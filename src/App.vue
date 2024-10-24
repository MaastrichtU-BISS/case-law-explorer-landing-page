<template>
  <div class="absolute max-w-xl m-auto -top-4 -right-40 hidden maxsize:grid">
    <img
      src="./assets/images/magnifying-glass.svg"
      class="select-none row-start-1 col-start-1"
      alt="Magnifying Glass"
    />
    <div class="row-start-1 col-start-1 mt-6 ml-6">
      <Graph />
    </div>
  </div>

  <div class="p-6">
    <img src="./assets/images/Case-Law-Explorer-logo.svg" alt="Case Law Explorer logo" />
    <h1 class="text-3xl text-lightblue">
      A software application for conducting network analysis on court cases
    </h1>
    <div class="max-w-5xl mt-14 text-darkblue">
      <Section title="About" :text="about" />
      <div class="flex flex-col md:flex-row gap-5 mt-3">
        <a href="https://maastrichtlawtech.github.io/case-explorer-ui/#/userguide/">
          <button
            class="bg-lightblue border-lightblue border-2 hover:bg-darkblue hover:border-darkblue text-white font-bold rounded p-4 uppercase flex items-center justify-center gap-2 select-none"
          >
            How to get started <span class="text-2xl h-[36px]">→</span>
          </button>
        </a>
        <a href="https://maastrichtlawtech.github.io/case-law-explorer/#/">
          <button
            class="border-lightblue border-2 text-lightblue hover:border-darkblue hover:text-darkblue font-bold rounded p-4 uppercase select-none h-full"
          >
            Documentation
          </button>
        </a>
      </div>

      <Section
        title="Community"
        text="The project is currently seeking ambassadors from higher education institutions who support the use and continuous development of Case Law Explorer. Participating institutions will be listed on this page."
      />
    </div>

    <div class="flex flex-row flex-wrap">
      <div class="w-full md:w-1/2">
        <h2>Current ambassadors</h2>
        <div class="flex flex-wrap mt-4">
          <a href="https://www.maastrichtuniversity.nl/">
            <img
              src="./assets/images/UM.svg"
              class="duration-300 grayscale hover:grayscale-0"
              alt="UM logo"
            />
          </a>
          <a href="https://www.zuyd.nl/" class="ml-4">
            <img
              src="./assets/images/Zuyd.svg"
              class="ml-4 duration-300 grayscale hover:grayscale-0"
              alt="Zuyd logo"
            />
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <h2>The tool</h2>
        <img
          src="./assets/images/network.jpg"
          class="w-full xl:w-3/4 mt-4"
          alt="The Case Law Explorer tool showing a network graph of related legal cases"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Graph from "./components/Graph.vue";
import Section from "./components/Section.vue";

const about = [
  "Case Law Explorer allows finding precedents for small and large samples, and identifying topics (clusters or communities) within a network of court decisions.",
  "Case Law Explorer was initially developed by the <a href='https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab'>Maastricht Law and Tech Lab</a> and the <a href='https://www.biss-institute.com/'>Brightlands Institute for Smart Society (BISS)</a> of Maastricht University. <a href='https://www.zuyd.nl/'>Zuyd University for Applied Sciences</a> and <a href='https://www.maastrichtuniversity.nl/'>Maastricht University</a> teamed up to further develop the software and to implement it in their educational programs.",
];
</script>
