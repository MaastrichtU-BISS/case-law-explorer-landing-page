import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

//initilize svg or grab svg
var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");
//intialize data
var graph = generateGraph();
console.log(graph)
var simulation = d3
  .forceSimulation(graph.nodes)
  .force(
    "link",
    d3
      .forceLink()
      .id(function(d) {
        return d.name;
      })
      .links(graph.links)
  )
  .force("charge", d3.forceManyBody().strength(-100))
  .force("center", d3.forceCenter(width / 7, height / 2))
  .force("x",  d3.forceX())
  .force("y", d3.forceY())   //forcex,y  make the graph return to the orinal point but if the graph is heavy enough this is not needed
  .on("tick", ticked);
setInterval(()=> {
  simulation.alphaTarget(0.1);
},)
var link = svg
  .append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(graph.links)
  .enter(1)
  .append("line")
  .attr("stroke-width", function(d) {
    return 1.5;
  });
var node = svg
  .append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(graph.nodes)
  .enter()
  .append("circle")
  .attr("r", 6)
  .attr("fill", function(d) {
    return "#262FA5";
  })
  .call(
    d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)
  );
function ticked() {
  link
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });
  node
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    });
}
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}
function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}
function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
function getRandom(min, max){
  return Number.parseInt(Math.random() * (max-min) + min);
}
function generateGraph(){
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
}