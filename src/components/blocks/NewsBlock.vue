<template>
  <section class="news-block py-5 bg-slate-100 blue-border-top">
    <div class="container max-w-screen-xl mx-auto px-4 py-5">

      <titleSpark h="2" class="text-4xl uppercase mb-6">Новости компании</titleSpark>

      <div class="grid grid-cols-12 md:gap-x-12 gap-y-8 border-bottom">

        <div
        v-for="article in news"
        :key="article"
        class="news-block__item col-span-12 lg:col-span-4 lg:py-4"
        >
          <p class="text-sm">{{ article }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      news: [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',

        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',

        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens';

.news-block {
  .news-block__item {
    position: relative;

    @media (min-width: 1024px) {
      &:not(:last-child)::before {
        content: '';
        position: absolute;
        display: inline-block;
        border-left: 1px solid $blue;
        top: 0;
        height: 100%;
        right: -1.5rem;
      }
    }
  }
}
</style>
