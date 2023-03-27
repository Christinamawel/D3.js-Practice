import './css/styles.css';
import { select, range } from 'd3';

const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;

// ---------no d3 used create svg----------
// const svg = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'svg'
// );
// svg.setAttribute('width', fullWidth);
// svg.setAttribute('height', fullHeight);
// document.body.appendChild(svg);

const svg = select('body')
  .append('svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight);

// ---------no d3 used looping----------
// const n = 100;
// for (let i = 0; i < n; i++) {
//   const rect = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'rect'
//   );
//   rect.setAttribute('y', i * 20);
//   rect.setAttribute('width', width);
//   rect.setAttribute('height', 10);
//   rect.setAttribute('mask', 'url(#circle-mask)');
//   svg.appendChild(rect);
// }

// ---------d3 longhand looping----------
// const n = 100;
// const marks = [];
// for (let i = 0; i < n; i++) {
//   marks.push({
//     y: i * 20,
//     width: fullWidth,
//     height: 10,
//     mask: 'url(#circle-mask)'
//   });
// }

// svg
//   .selectAll('rect')
//   .data(marks)
//   .join('rect')
//   .attr('y', (d) => d.y)
//  // d is the data created above or in other words our marks array
//   .attr('width', (d) => d.width)
//   .attr('height', (d) => d.height)
//   .attr('mask', (d) => d.mask);

// ---------d3 shorthand looping----------
const n = 150;

svg
  .append('g')
  // creates group of elements
  .selectAll('rect')
  .data(range(n)) 
  // range creates an array that is n in length 
  .join('rect')
  .attr('y', (d) => d * 20)
  .attr('width', fullWidth)
  .attr('height', 10)
  .attr('mask', 'url(#circle-mask)');

// ---------d3 shorthand looping horizontal----------
svg
  .append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
  .attr('x', (d) => d * 20)
  .attr('width', 10)
  .attr('height', fullHeight)
  .attr('mask', 'url(#circle-mask-2)');

// ---------no D3 used square mask----------
// const mask = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'mask'
// );
// mask.setAttribute('id', 'circle-mask');
// svg.appendChild(mask);

// const maskRect = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect'
// );
// maskRect.setAttribute('width', width);
// maskRect.setAttribute('height', height);
// maskRect.setAttribute('fill', 'black');
// mask.appendChild(maskRect);

// ----------D3  square mask----------
const mask = svg.append('mask').attr('id', 'circle-mask');

mask
  .append('rect')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  .attr('fill', 'black');

// ---------no D3 used circle mask----------
// const circle = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'circle'
// );
// circle.setAttribute('cx', width / 2);
// circle.setAttribute('cy', height / 2);
// circle.setAttribute('r', 200);
// circle.setAttribute('fill', 'white');
// mask.appendChild(circle);

// const mask2 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'mask'
// );
// mask2.setAttribute('id', 'circle-mask-2');
// svg.appendChild(mask2);

// --------- D3 circle mask----------

mask.append('circle')
  .attr('cx', fullWidth / 2)
  .attr('cy', fullHeight / 2)
  .attr('r', 200)
  .attr('fill', 'white');

// --------- D3 second mask----------
const mask2 = svg.append('mask').attr('id', 'circle-mask-2');

mask2
  .append('rect')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  .attr('fill', 'white');

mask2.append('circle')
  .attr('cx', fullWidth / 2)
  .attr('cy', fullHeight / 2)
  .attr('r', 200)
  .attr('fill', 'black');