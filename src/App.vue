<template>
  <!-- <div class="absolute max-w-xl m-auto -top-4 -right-40 hidden maxsize:grid">
    <img src="./assets/images/magnifying-glass.svg" class="select-none row-start-1 col-start-1"
      alt="Magnifying Glass" />
    <div class="row-start-1 col-start-1 mt-6 ml-6">
      <Graph />
    </div>
  </div> -->

  <div class="p-6">
    <h1 class="text-6xl font-bold">Case Law Explorer</h1>
    <h2 class="text-3xl mt-2">
      A software application for conducting network analysis on court cases
    </h2>

    <img src="./assets/images/network.png" class="w-full xl:w-3/4 mt-10"
      alt="The Case Law Explorer tool showing a network graph of related legal cases" />

    <div class="max-w-5xl mt-4">
      <Section title="About" :text="about" />
      <div class="flex flex-col md:flex-row gap-5 mt-3">
        <a href="https://app.caselawexplorer.tech">
          <button
            class="bg-black text-white text-xl font-bold rounded px-4 py-2 flex items-center justify-center gap-2 select-none">
            Try it out
          </button>
        </a>
      </div>

      <div class="mt-10">
        <Section title="Community"
          text="The project is currently seeking ambassadors from higher education institutions who support the use and continuous development of Case Law Explorer. Participating institutions will be listed on this page." />
      </div>
    </div>

    <div class="flex flex-row flex-wrap mt-10">
      <div class="w-full">
        <h3>Current ambassadors</h3>
        <div class="flex flex-wrap mt-4">
          <a href="https://www.maastrichtuniversity.nl/">
            <img src="./assets/images/UM.svg" class="duration-300 grayscale hover:grayscale-0" alt="UM logo" />
          </a>
          <a href="https://www.zuyd.nl/" class="ml-4">
            <img src="./assets/images/Zuyd.svg" class="ml-4 duration-300 grayscale hover:grayscale-0" alt="Zuyd logo" />
          </a>
        </div>
      </div>
      <!-- <div class="w-full md:w-1/2">
        <h3>The tool</h3>
        <img src="./assets/images/network.jpg" class="w-full xl:w-3/4 mt-4"
          alt="The Case Law Explorer tool showing a network graph of related legal cases" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import Graph from "./components/Graph.vue";
import Section from "./components/Section.vue";

const about = [
  "Case Law Explorer allows finding precedents for small and large samples, and identifying topics (clusters or communities) within a network of court decisions.",
  "Case Law Explorer was initially developed by the <a href='https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab'>Maastricht Law and Tech Lab</a> and the <a href='https://www.biss-institute.com/'>Brightlands Institute for Smart Society (BISS)</a> of Maastricht University. <a href='https://www.zuyd.nl/'>Zuyd University for Applied Sciences</a> and <a href='https://www.maastrichtuniversity.nl/'>Maastricht University</a> teamed up to further develop the software and to implement it in their educational programs.",
];
</script>
