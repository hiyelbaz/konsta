<template>
  <component :is="component" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
  import { BlockTitleColors } from '../../shared/colors/BlockTitleColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-block-title',
    props: {
      component: {
        type: String,
        default: 'span',
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      withBlock: {
        type: Boolean,
        default: true,
      },
      medium: {
        type: Boolean,
        default: false,
      },
      large: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const colors = computed(() =>
        BlockTitleColors(props.colors || {}, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        BlockTitleClasses(props, colors.value)
      );
      return {
        c,
      };
    },
  };
</script>
