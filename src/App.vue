<script setup lang="ts">
import nodegraph from './components/Graph.vue'
</script>

<template>
<img src="./assets/magnifying glass.svg" class="absolute hidden max-w-xl m-auto -top-4 -right-40 maxsize:block" alt="Magnifying Glass"/>
  <div class="p-6">
  <img src="./assets/Case Law Explorer logo.svg" class="w-96" alt="Case Law Explorer logo"/>
  <h1 class="text-2xl text-lightblue">Een open-source tool voor juridische netwerkanalyse</h1>
  <div class="max-w-5xl mt-16 text-darkblue">
  <h1 class="text-3xl font-bold ">Over Case Law Explorer</h1>
  <p class="mt-4">
    Case Law Explorer is ontwikkeld door Prof. Dr. Gijs van Dijck, Maastricht Law and Tech Lab en het Brightlands Institute for Smart Society
    Case Law Explorer maakt de toepassing van netwerkanalyse op een juridische context mogelijk. De analyse kan betrekking hebben op wetgeving,
    jurisprudentie, netwerken van criminelen, patenten, netwerken van advocaten enz.
  </p>
  <h1 class="mt-12 text-3xl font-bold">Wij zoeken ambassadeurs</h1>
  <p class="mt-4">
    Om de Case Law Explorer een stap verder te brengen en het gebruik ervan binnen universiteiten en hogescholen te stimuleren zijn we opzoek naar ambassadeurs. Als ambassadeur heb je enerzijds de
    mogelijkheid om de tool nu al binnen je instelling te gebruiken en anderzijds kun je bijdragen aan de doorontwikkeling en verdere uitwerking van de tool zodat deze aansluit op specifieke behoeften.
  </p>
  </div>
  <div class="flex flex-row flex-wrap">
  <div >
    <h1 class="mt-12 text-3xl font-bold text-darkblue">Huidige ambassadeurs</h1>
    <div class="flex flex-wrap mt-4">
        <img src="./assets/UM.svg" class="duration-300 grayscale hover:grayscale-0"  alt="UM logo" />
        <img src="./assets/Zuyd.svg" class="ml-4 duration-300 grayscale hover:grayscale-0"  alt="Zuyd logo" />
    </div>
  </div>
  <div class="ml-auto mr-64">
   <nodegraph></nodegraph>
  </div>
  </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>