<script setup lang="ts">
//import AppImageDropZone from "../../components/AppImageDropZone.vue";
import { toRefs, ref } from "vue";
import type { Board, Task } from "@/types";
import { useAlerts } from "@/stores/alerts";
import { v4 as uuidv4 } from "uuid";
const alerts = useAlerts();

// Define Props
const props = defineProps<{
  id: string;
}>();
const { id: boardId } = toRefs(props);

const board = ref<Partial<Board>>({
  id: boardId.value,
  title: "My First Board (or Let's have an amazing time at Vue.js Forge!! 🍍)",
  order: JSON.stringify([{ id: "1", title: "backlog 🌴", taskIds: ["1", "2"] }]),
});

const tasks = ref<Partial<Task>[]>([
  { id: "1", title: "Code like amazing coder", dueAt: new Date("2022/8/12") },
  { id: "2", title: "Pushing some clean code" }
]);

async function addTask(task: Task) {
  return new Promise((resolve, reject) => {
    const taskWithId = {
      ...task,
      id: uuidv4(),
    };
    tasks.value.push(taskWithId);
    resolve(taskWithId);
  });
}

// Board CRUD
function updateBoard(b: Board) {
  board.value = b;
  alerts.success("Board updated!");
}
function deleteBoardIfConfirmed() {
  const yes = confirm("Are you sure you want to delete this board?");
  if (yes) {
    alerts.success(`Board successfully deleted`);
  }
}
</script>
<template>
  <!-- <AppImageDropZone /> -->
  <div>
      <div class="flex justify-between">
        <AppPageHeading>
           {{ board.title }}
        </AppPageHeading>
        <BoardMenu :board="board" @deleteBoard="deleteBoardIfConfirmed" />
      </div>
    <BoardDragAndDrop
    :board="board"
    :tasks="tasks"
    @update="updateBoard"
    :addTask="addTask" />
    <details>
      <pre>
         {{ board }}
      </pre>
    </details>
  </div>
</template>

<style scoped>
pre {
  width: 400px;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>