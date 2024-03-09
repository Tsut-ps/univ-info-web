<script setup lang="ts">
import MainVisual from '../components/MainVisual.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Events from '../components/Events.vue'
import Feature from '../components/Feature.vue'
import Curriculum from '../components/Curriculum.vue'
import CurriculumDetail from '../components/CurriculumDetail.vue'
import GraduateSchool from '../components/GraduateSchool.vue'
</script>


<template>
  <main>
    <MainVisual></MainVisual>

    <!-- 本文の要素 / 上部に外部余白 -->
    <article class="mt-5">
      <About></About>
      <Feature></Feature>
      <News></News>
      <Events></Events>
      <Curriculum></Curriculum>
      <CurriculumDetail></CurriculumDetail>
      <GraduateSchool></GraduateSchool>
    </article>

  </main>
</template>
