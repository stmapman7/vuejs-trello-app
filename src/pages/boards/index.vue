<script setup lang="ts">
import AppPageHeading from "@/components/AppPageHeading.vue";
import type { Board } from "@/types";
import { computed } from "vue";
import { useAlerts } from "@/stores/alerts";
import createBoardMutation from "@/graphql/mutations/createBoard.mutation.gql";
import boardsQuery from "@/graphql/queries/boards.query.gql";
import { useMutation, useQuery } from "@vue/apollo-composable";

const { result, loading, onError } = useQuery(boardsQuery);
const boards = computed(() => result.value?.boardsList.items || []);

// static boards code was here - see text file

const alerts = useAlerts();

onError(() => alerts.error("Error loading boards."));

const { mutate: createBoard } = useMutation(createBoardMutation);

const getCoolGradient = (index: any) => {
  let finalGradientString = ''
  switch (index) {
    case 1:
      finalGradientString = "from-orange-400 to-pink-500";
      break;
    case 2:
      finalGradientString = "from-green-400 to-blue-400";
      break;
    case 3:
      finalGradientString = "from-purple-400 to-blue-400";
      break;
    default:
      finalGradientString = "from-orange-400 to-yellow-500";
  }
  return finalGradientString;
};
</script>

<template>
  <AppPageHeading>Boards</AppPageHeading>

  <div class="flex flex-wrap gap-2">
    <div class="border rounded-md  bg-gradient-to-tr" v-for="(board, index) in boards" :key="board.id"
      :class="getCoolGradient(index)">
      <BoardCard :board="board" class="transition duration-100 ease-in border rounded-md hover:-rotate-3" />
    </div>
    <button class="text-gray-500" @click="createBoard()">
      <span>New Board +</span>
    </button>
  </div>
    <p v-if="loading">Loading...</p>
</template>