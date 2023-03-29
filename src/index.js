import './css/styles.css';
import { select, range, symbol, symbolsFill } from 'd3';

const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight);

const n = 150;

svg
  .append('g')
  .selectAll('rect')
  .data(range(n)) 
  .join('rect')
  .attr('y', (d) => d * 20)
  .attr('width', fullWidth)
  .attr('height', 10)
  .attr('mask', 'url(#mask-1)');

svg
  .append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
  .attr('x', (d) => d * 20)
  .attr('width', 10)
  .attr('height', fullHeight)
  .attr('mask', 'url(#mask-2)');

const renderMask = (selection, id, inverted) => {
  const mask = selection.append('mask').attr('id', id);

  mask
    .append('rect')
    .attr('width', fullWidth)
    .attr('height', fullHeight)
    .attr('fill', inverted ? 'black': 'white');

  mask.selectAll('g')
    .data(range(symbolsFill.length))
    .join((enter) => 
      enter
        .append('g')
        .attr(
          'transform', 
          (d) => `translate(${d * 330 + 200}, ${fullHeight / 2})`
        )
        .append('path')
        .attr('d', (d) => symbol(symbolsFill[d], 50000)())
        .attr('fill', inverted ? 'white': 'black'));
};

// renderMask(svg, 'mask-1', false);
// renderMask(svg, 'mask-2', true);

svg
  .call(renderMask, 'mask-1', false)
  .call(renderMask, 'mask-2', true);