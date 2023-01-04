<script lang="ts" setup>
import { Fade as KFade } from "@progress/kendo-vue-animation";
import { useAlerts } from "@/stores/alerts";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-vue-notification";

const alerts = useAlerts();
</script>

<template>
  <div class="z-10">
    <NotificationGroup :style="{
      right: '10px',
      bottom: '10px',
      alignItems: 'flex-start',
      flexWrap: 'wrap-reverse',
    }">
      <KFade v-for="alert in alerts.items" :key="alert.id" :appear="true">
        <Notification :type="{
          style: alert.style,
          icon: true,
        }" :closable="alert.closable" @close="alerts.remove(alert.id)">
          <div v-if="alert.html" v-html="alert.message"></div>
          <span v-else>{{ alert.message }}</span>
        </Notification>
      </KFade>
    </NotificationGroup>
  </div>
</template>