<template>
  <div class="row my-3 pt-4">
    <div class="col text-center">
      <h1 class="display-3 title">Stravanity</h1>
      <h4>Easy to beat Strava segments</h4>
    </div>
  </div>

  <div class="row my-3 howto collapse">
    <div class="col text-center">
      <a
        role="button"
        class="link-primary"
        data-bs-toggle="collapse"
        data-bs-target=".howto"
        aria-expanded="true"
        aria-controls="howto"
      >
        How to use Stravanity?
      </a>
    </div>
  </div>

  <div class="row my-3 mx-1 howto show">
    <div class="col">
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <div class="row justify-content-center">
            <div class="col">
              <div class="row align-items-baseline">
                <div class="col px-4">
                  <h4>How to use Stravanity</h4>
                  <p>
                    Stravanity is a simple tool designed to help you explore Strava segments near you, and
                    <b>find the easiest ones to beat.</b>
                  </p>

                  <h6>There are 2 ways to beat a Strava segment</h6>
                  <ol>
                    <li>
                      Course Record
                      <div>
                        This achievement is awarded to the fastest athlete to date on a segment's overall leaderboard.
                        <div class="text-muted my-1">
                          Stravanity computes the
                          <u>average speed</u>
                          you need in order to beat the current course record
                        </div>
                      </div>
                    </li>
                    <li>
                      Local Legend
                      <div>
                        This achievement is awarded to the athlete who completes a given segment the most times over a
                        rolling 90-day period regardless of pace or speed.
                        <div class="text-muted my-1">
                          Stravanity computes the
                          <u>total distance</u>
                          you need to run in order to beat the current local legend
                        </div>
                      </div>
                    </li>
                  </ol>

                  <h6>Finding segments</h6>
                  <div>
                    Just explore the map to load segments. Use a
                    <b>high zoom level</b>
                    to load less popular (and probably easier) segments, then
                    <b>zoom out</b>
                    to see everything you've loaded. Stravanity will show you a list of the segments visible on the map,
                    ordered
                    <b>from the easiest to the most difficult</b>
                  </div>
                </div>
                <div class="col-auto">
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    data-bs-toggle="collapse"
                    data-bs-target=".howto"
                    aria-expanded="true"
                    aria-controls="howto"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Top',
  });
</script>

<style lang="scss" scoped>
  h6 {
    font-weight: bold;
  }
</style>
