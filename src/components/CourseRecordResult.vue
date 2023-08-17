<template>
  <div class="row justify-content-between">
    <div class="col-auto">
      <div class="text-muted small">Segment distance</div>
      <div class="h5">{{ distance }}</div>
    </div>
    <div class="col-auto">
      <div class="text-muted small">Avg grade</div>
      <div class="h5">{{ grade }}</div>
    </div>
    <div class="col-auto">
      <div class="text-muted small">Efforts</div>
      <div class="h5">{{ segment.details?.effort_count }}</div>
    </div>
    <div class="col-auto">
      <div class="text-muted small">Best time</div>
      <div class="h5">{{ segment.computed?.bestTimeString }}</div>
    </div>
    <div class="col-auto">
      <div class="text-muted small">
        {{ label }}
      </div>
      <div
        class="h5"
        :class="athleteIsFastest ? 'text-success fw-bold' : ''"
        :title="athleteIsFastest ? 'It\'s you!' : ''"
      >
        {{ speed }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import { ActivityType, type Segment } from '@/types';
  import { formatDistance, formatSpeed, parseTime } from '@/utils';

  export default defineComponent({
    name: 'CourseRecordResult',
    props: {
      segment: {
        type: Object as PropType<Segment>,
        required: true,
      },
    },
    computed: {
      athleteIsFastest(): boolean {
        const athletePr = this.segment.details?.athlete_segment_stats?.pr_elapsed_time;

        if (athletePr) {
          return athletePr === parseTime(this.segment.details?.xoms.kom!);
        }

        return false;
      },
      distance(): string {
        return formatDistance(this.segment.details?.distance);
      },
      grade(): string {
        return this.segment.details?.average_grade?.toFixed(1) + '%';
      },
      speed(): string {
        return formatSpeed(this.segment.computed?.speedRecord, this.segment.details?.activity_type);
      },
      label(): string {
        return this.segment.details?.activity_type === ActivityType.Ride ? 'Best speed' : 'Best pace';
      },
    },
  });
</script>
