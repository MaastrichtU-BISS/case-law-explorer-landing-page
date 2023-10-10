<template>
  <div class="ml-auto mr-64">
        <svg class="mt-4 w-96" width="1400" height="300"></svg>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as d3 from "d3";



const graph = ref<{nodes: any[], links: any[]}>();
const simulation = ref();
const link = ref();
const node = ref();

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max-min) + min);
};

const generateGraph = () => {
  const n = 20;
  const M = (n*(n-1)/2);
  const m = getRandom(M/8, M/2);
  let nodes = [];
  let edges = [];
  for (let i = 0; i < n; i++) {
    nodes.push({
      name: i
    });
  };
  for (let i = 0; i < m; i++) {
    const a = getRandom(0,n);
    const b = getRandom(0,n);
    edges.push({source: a, target: b});
  }
  return {
    nodes: nodes,
    links: edges
  };
};

const ticked = () => {
  link.value
    .attr("x1", function(d: { source: { x: any; }; }) {
      return d.source.x;
    })
    .attr("y1", function(d: { source: { y: any; }; }) {
      return d.source.y;
    })
    .attr("x2", function(d: { target: { x: any; }; }) {
      return d.target.x;
    })
    .attr("y2", function(d: { target: { y: any; }; }) {
      return d.target.y;
    });
  node.value
    .attr("cx", function(d: { x: any; }) {
      return d.x;
    })
    .attr("cy", function(d: { y: any; }) {
      return d.y;
    });
}
function dragstarted(event: any, d: { fx: any; x: any; fy: any; y: any; }) {
  
  if (!event.active) simulation.value.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}
function dragged(event: any, d: { fx: any; fy: any; }) {
  d.fx = event.x;
  d.fy = event.y;
}
function dragended(event: any, d: { fx: null; fy: null; }) {
  if (!event.active) simulation.value.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

onMounted(() => {

  console.log(d3)

  var svg = d3.select("svg");
  let width: number = Number.parseFloat(svg.attr("width"));
  let height: number = Number.parseFloat(svg.attr("height"));
  //intialize data
  graph.value = generateGraph();
  console.log(graph.value)
  simulation.value = d3
    .forceSimulation(graph.value.nodes)
    .force(
      "link",
      d3
        .forceLink()
        .id(function (d: any) {
          return d.name;
        })
        .links(graph.value.links)
    )
    .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(width / 7, height / 2))
    .force("x",  d3.forceX())
    .force("y", d3.forceY())   //forcex,y  make the graph return to the orinal point but if the graph is heavy enough this is not needed
    .on("tick", ticked);
  link.value = svg
  .append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(graph.value.links)
  .enter()
  .append("line")
  .attr("stroke-width", function() {
    return 1.5;
  });

  node.value = svg
  .append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data<Node>(graph.value.nodes)
  .enter()
  .append<SVGCircleElement>("circle")
  .attr("r", 6)
  .attr("fill", function() {
    return "#262FA5";
  })
  .call(
    d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)
  );

  setInterval(()=> {
    simulation.value.alphaTarget(0.1);
  });
});

</script>
<style>
.links line {
  stroke: #747474;
  stroke-opacity: 0.7;
}</style>