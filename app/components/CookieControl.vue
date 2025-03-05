<script lang="ts" setup>
import { emojiBlast } from 'emoji-blast'
import { useCookiesStore } from '~/store/cookies'

defineProps<{
  clearSiteDataURL?: string | undefined;
}>();

const cookiesStore = useCookiesStore()
const { cookiesState } = storeToRefs(cookiesStore)

const { texts } = useCookieControl();

const open = ref(cookiesState.value === null)
</script>

<template>
  <div>
    <UCard v-if="open"
      class="fixed inset-x-0 bottom-8 z-20 mx-auto w-full max-w-lg bg-white/75 backdrop-blur dark:bg-white/5">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-semibold leading-6">
            {{ texts.title }}

            <span class="select-none" @click="
              emojiBlast({
                emojis: ['🍪'],
              })
              ">🍪</span>
          </h3>

          <UButton color="neutral" variant="ghost" icon="i-lucide-x" class="-my-1" @click="open = false" />
        </div>
      </template>

      <div class="flex w-full flex-col gap-2">
        <p>{{ texts.subtitle }}</p>

        <UButtonGroup class="inline-flex w-full flex-1">
          <UButton variant="link" block class="flex-1" to="/privacy" :external="true">
            {{ texts.privacyPolicy }}
          </UButton>

          <UButton variant="link" block class="flex-1" to="/imprint" :external="true">
            {{ texts.imprint }}
          </UButton>

          <UButton v-if="clearSiteDataURL" variant="link" block class="flex-1" :to="clearSiteDataURL">
            {{ texts.clearData }}
          </UButton>
        </UButtonGroup>


        <p class="text-xs">
          {{ texts.description }}
        </p>
      </div>

      <template #footer>
        <UButtonGroup class="inline-flex w-full">
          <UButton color="neutral" block class="flex-1" @click="open = false">
            {{ texts.close }}
          </UButton>

          <UButton block color="error" class="flex-1" :variant="cookiesState === false ? 'soft' : 'solid'" @click="
            cookiesState = false;
          open = false;
          ">
            {{ texts.reject }}
          </UButton>

          <UButton block color="success" class="flex-1" :variant="cookiesState === true ? 'soft' : 'solid'" @click="
            cookiesState = true;
          open = false;
          ">
            {{ texts.accept }}
          </UButton>
        </UButtonGroup>
      </template>
    </UCard>

    <UButton icon="i-lucide-cookie" size="xl" class="fixed bottom-10 right-6" @click="open = true" />
  </div>
</template>
