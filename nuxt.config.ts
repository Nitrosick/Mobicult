const title = 'Mobicult'

export default defineNuxtConfig({
  compatibilityDate: '2025-02-09',
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      title: title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    }
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    'dayjs-nuxt'
  ],
  components: {
    dirs: [
      'components/ui',
      'components/app'
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['import'],
          additionalData: '@import "@/assets/style/variables.scss";'
        },
      },
    },
  },
  css: [
    '@/assets/style/normalize.scss',
    '@/assets/style/main.scss'
  ],
  imports: {
    dirs: ['store']
  }
})
