<template>
  <section class="bg-dark text-white py-5">
    <div class="container max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-x-6 py-5 items-center">

      <div class="logo_illustration">
        <img class="logo_illustration__logo py-4" src="/assets/img/pages-illustrations/main/logo_illustration__logo.svg" alt="">
        <img class="logo_illustration__lines py-4" src="/assets/img/pages-illustrations/main/logo_illustration__lines.svg" alt="">
      </div>

      <div class="py-4">
        <titleSpark h="1" white class="text-2xl mb-4">ПОСТАВКА РАДИОЭЛЕКТРОННЫХ КОМПОНЕНТОВ И&nbsp;ОБОРУДОВАНИЯ</titleSpark>

        <p class="mb-3 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

        <p class="mb-3 text-sm">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container max-w-screen-xl mx-auto px-4 py-5">

      <titleSpark h="2" class="text-4xl mb-4">О нас</titleSpark>

      <div class="grid grid-cols-12 md:gap-6 lg:gap-12">

        <div class="col-span-12 md:col-span-6 lg:col-span-6">
          <p class="mb-3 text-sm">Компания <span class="font-bold"><span class="font-bold">«Паритет»</span></span> — надежный поставщик оборудования, КИПиА и  электронных компонентов отечественного и иностранного производства для предприятий промышленности всех областей.</p>

          <p class="mb-3 text-sm font-bold">Система менеджмента качества в компании внедрена и функционирует в соответствии с требованиями ГОСТ ISO 9001-2015 и других руководящих документов.</p>

          <p class="mb-3 text-sm">ООО <span class="font-bold">«Паритет»</span> ведет свою деятельность в соответствии с законодательными и нормативными актами, применимыми к деятельности нашей компании. Мы работаем также в соответствии с 223 ФЗ, 44 ФЗ.</p>

          <p class="mb-3 text-sm">Мы осуществляем как розничную продажу, так и комплексные оптовые и мелкооптовые поставки оборудования для промышленности различных областей, контрольно измерительные приборы и автоматику, все виды электронных компонентов, кабели, провода, и многие другие комплектующие изделия. Наименования поставляемых изделий исчисляются десятками тысяч типов и типономиналов. Благодаря налаженным дистрибьюторским и партнерским каналам, поставки осуществляются со складов США, Европы, стран Юго-Восточной Азии в кратчайшие сроки и по минимальным ценам. При выполнении поставок иностранного оборудования, приборов и комплектующих, ООО <span class="font-bold">«Паритет»</span> стремится к максимально полному обеспечению потребителей нормативно-технической документацией, необходимыми сертификатами качества, а также к выполнению гарантийных обязательств, предоставляемых фирмами-производителями.</p>

          <p class="mb-3 text-sm">Поставленные нами оборудование, приборы и электронные компоненты надежно работают в самых ответственных видах промышленности, эксплуатируются в космосе, на железнодорожном транспорте, в авиации, на судах морского флота и в специальной технике. По договоренности с потребителями компания имеет возможность осуществлять авансовые поставки партий изделий с отсрочкой платежей по ним, а также формировать на складе необходимый задел требуемых приборов, оборудования и комплектующих изделий.</p>

          <p class="mb-3 text-sm">Мы всегда находимся на рубеже передовых технологий и постоянного совершенствования в работе.</p>

          <div class="map aspect-[4/3] bg-slate-300 w-full mt-9"></div>
        </div>

        <div class="col-span-12 md:col-span-6 lg:col-span-6 py-4">
          <img src="/assets/img/pages-illustrations/main/image_2023-10-19_12-29-56.webp" alt="">
        </div>

      </div>

      <div class="my-10 text-center">
        <pBtn href="#" class="mx-auto">Перейти в магазин</pBtn>
      </div>

    </div>
  </section>

  <NewsBlock/>
</template>

<script>
import NewsBlock from '@/components/blocks/NewsBlock.vue'

export default {
  components: {
    NewsBlock,
  },
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
