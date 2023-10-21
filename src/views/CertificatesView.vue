<template>
  <section class="py-5">
    <div class="container max-w-screen-xl mx-auto px-4 py-9">

      <titleSpark h="2" class="text-4xl mb-4 uppercase">Документация</titleSpark>

      <p class="mb-3 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

      <p class="mb-3 text-sm">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

      <p class="mb-3 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    </div>
  </section>

  <section class="pt-5">
    <div class="container max-w-screen-xl mx-auto px-4 py-5">
      <titleSpark h="2" class="text-4xl mb-4 uppercase">Сертификаты</titleSpark>
    </div>

    <div class="bg-dark text-white py-9 blue-border-top-xl">
      <div class="container max-w-screen-xl mx-auto px-4 py-5">
        <div class="grid grid-cols-3 md:gap-6 lg:gap-20 justify-start justify-items-start content-start ">

          <a href="/files/certificates/ИСО 9001.pdf" class="my-4">
            <img src="/assets/img/pages-illustrations/certificates/ИСО-9001.webp" class="w-full" alt="ИСО-9001">
          </a>

          <a href="/files/certificates/ИСО 9001 приложение.pdf" class="my-4">
            <img src="/assets/img/pages-illustrations/certificates/ИСО-9001-приложение.webp" class="w-full" alt="ИСО-9001-приложение">
          </a>

          <a href="/files/certificates/ИСО 9001 Разрешение.pdf" class="my-4">
            <img src="/assets/img/pages-illustrations/certificates/ИСО-9001-Разрешение.webp" class="w-full" alt="">
          </a>

        </div>
      </div>
    </div>
  </section>

  <section class="py-9">
    <div class="container max-w-screen-xl mx-auto px-4 py-9">

      <titleSpark h="2" class="text-4xl mb-4 uppercase">Наши партнёры</titleSpark>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
        <div
        v-for="logo in 12"
        :key="logo"
        class="bg-slate-300 aspect-video p-5 text-center"
        >Логотип</div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss">
.logo_illustration {
  position: relative;

  .logo_illustration__logo {
    position: absolute;
    top: 18%;
    bottom: 18%;
    height: 64%;
    width: 100%;
  }
  .logo_illustration__lines {}
}
</style>
