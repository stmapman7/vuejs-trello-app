<script setup lang="ts">
import {
  Card,
  CardTitle,
  CardHeader,
  Avatar,
  CardSubtitle,
} from "@progress/kendo-vue-layout";
import { Chip } from "@progress/kendo-vue-buttons";
import { useDateFormat } from "@vueuse/core";
import type { Task } from "@/types";
const props = defineProps<{
  task: Task;
}>();
const date = useDateFormat(props.task.dueAt, "MM/DD");
</script>
<template>
  <RouterLink :to="`/boards/${$route.params.id}/tasks/${task.id}`">
    <Card>
      <CardHeader>
        <div class="flex justify-between">
          <CardTitle>
            {{ task.title }}
          </CardTitle>
          <Avatar type="image" size="medium" shape="circle">
            <img
              style="width: 45px; height: 45px"
              src="https://as1.ftcdn.net/v2/jpg/03/03/90/42/1000_F_303904224_i72XoZHkbQSlSkG4V1reSXwfDHTDI7Eq.jpg"
            />
          </Avatar>
        </div>

        <CardSubtitle>
          <chip
            v-if="task.dueAt"
            :text="date"
            value="chip"
            rounded="full"
            icon="k-i-clock"
            theme-color="info"
          />
        </CardSubtitle>
      </CardHeader>
    </Card>
  </RouterLink>
</template>