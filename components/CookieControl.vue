<script lang="ts" setup>
import { emojiBlast } from 'emoji-blast';
import { defaultCookieControlTexts, type CookieControlTexts } from '../composables/useCookieControl';
import { useCookiesStore } from '../stores/cookies';

const props = withDefaults(
    defineProps<{
        clearSiteDataURL?: string | undefined;
        texts?: Partial<CookieControlTexts> | undefined;
    }>(),
    {
        clearSiteDataURL: undefined,
        texts: () => ({}),
    },
);

const cookiesStore = useCookiesStore();
const { cookiesState } = storeToRefs(cookiesStore);

const texts = computed<CookieControlTexts>(() => ({
    ...defaultCookieControlTexts,
    ...props.texts,
}));

const open = ref(cookiesState.value === null);
</script>

<template>
    <div>
        <UCard
            v-if="open"
            class="fixed inset-x-0 bottom-8 z-20 mx-auto w-full max-w-lg bg-white/75 backdrop-blur dark:bg-white/5"
        >
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-semibold leading-6">
                        {{ texts.title }}

                        <span
                            class="select-none"
                            @click="
                                emojiBlast({
                                    emojis: ['🍪'],
                                })
                            "
                            >🍪</span
                        >
                    </h3>

                    <UButton color="neutral" variant="ghost" icon="i-lucide-x" class="-my-1" @click="open = false" />
                </div>
            </template>

            <div class="flex w-full flex-col gap-2">
                <p>{{ texts.subtitle }}</p>

                <UFieldGroup class="inline-flex w-full flex-1">
                    <UButton variant="link" block class="flex-1" to="/privacy" :external="true">
                        {{ texts.privacyPolicy }}
                    </UButton>

                    <UButton variant="link" block class="flex-1" to="/imprint" :external="true">
                        {{ texts.imprint }}
                    </UButton>

                    <UButton v-if="clearSiteDataURL" variant="link" block class="flex-1" :to="clearSiteDataURL">
                        {{ texts.clearData }}
                    </UButton>
                </UFieldGroup>

                <p class="text-xs">
                    {{ texts.description }}
                </p>
            </div>

            <template #footer>
                <UFieldGroup class="inline-flex w-full">
                    <UButton color="neutral" block class="flex-1" @click="open = false">
                        {{ texts.close }}
                    </UButton>

                    <UButton
                        block
                        color="error"
                        class="flex-1"
                        :variant="cookiesState === false ? 'soft' : 'solid'"
                        @click="
                            cookiesState = false;
                            open = false;
                        "
                    >
                        {{ texts.reject }}
                    </UButton>

                    <UButton
                        block
                        color="success"
                        class="flex-1"
                        :variant="cookiesState === true ? 'soft' : 'solid'"
                        @click="
                            cookiesState = true;
                            open = false;
                        "
                    >
                        {{ texts.accept }}
                    </UButton>
                </UFieldGroup>
            </template>
        </UCard>

        <UButton icon="i-lucide-cookie" size="xl" class="fixed bottom-10 right-6" @click="open = true" />
    </div>
</template>
