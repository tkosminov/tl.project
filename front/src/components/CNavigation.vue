<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'VDashboard' }" class="navbar-brand">{{
        $t("routers.brand")
      }}</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                ><i :class="'bi bi-' + route.meta.icon"></i>
                {{ $t(route_name) }}</span
              >
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto mb-lg-0">
          <li class="nav-item dropdown" v-if="current_user">
            <a
              class="nav-link dropdown-toggle p-0"
              href="#"
              id="navbarUserDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="avatar bg-secondary inline-block">
                {{ current_user.login.slice(0, 2) }}
              </div>

              <div class="inline-block">
                {{ current_user.login }}
              </div>
            </a>

            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-dark"
              aria-labelledby="navbarUserDropdownMenuLink"
            >
              <li v-for="nav_route of user_nav_routers" :key="nav_route.name">
                <router-link
                  :to="{
                    name: nav_route.name,
                    params: { login: current_user.login },
                  }"
                  class="dropdown-item"
                >
                  {{ $t(nav_route.meta!.name! as string) }}
                </router-link>
              </li>

              <li><hr class="dropdown-divider" /></li>

              <li
                v-for="nav_route of user_translation_nav_routers"
                :key="nav_route.name"
              >
                <router-link
                  :to="{ name: nav_route.name }"
                  class="dropdown-item"
                >
                  {{ $t(nav_route.meta!.name! as string) }}
                </router-link>
              </li>

              <li><hr class="dropdown-divider" /></li>

              <li>
                <button class="dropdown-item" @click="signOut">
                  {{ $t("views.auth.common.sign_out") }}
                </button>
              </li>
            </ul>
          </li>

          <li class="nav-item" v-else>
            <router-link :to="{ name: 'VSignIn' }" class="nav-link">
              {{ $t("views.auth.common.sign_in") }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref, watch, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

import { currentUserStore, type ICurrentUser } from "@/stores/current-user";
import { useApi } from "@/api/api";
import { useToast } from "vue-toastification";
import { user_nav_routers, user_translation_nav_routers } from "@/router";

const route = useRoute();
const current_user_store = currentUserStore();
const api = useApi();
const toast = useToast();

const current_user: Ref<ICurrentUser | null> = ref(null);
current_user.value = current_user_store.currentUser;

current_user_store.$subscribe((_mutation, state) => {
  current_user.value = state.current_user;
});

const route_name: Ref<string> = ref("");

const unwatch = watch(
  () => route.meta.name,
  (curr_name, _prev_name) => {
    route_name.value = curr_name as string;
  },
);

function signOut() {
  api.signOut(true);

  toast.success("SIGN_OUT_SUCCESS", {
    timeout: 2500,
  });
}

onBeforeUnmount(() => {
  unwatch();
});
</script>

<style>
.avatar {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  margin-right: 5px;
}

.inline-block {
  display: inline-block;
}
</style>
