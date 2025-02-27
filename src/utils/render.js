const render = (
  props = {},
  component, 
  styles = '',
  parentElement = document.getElementById('root'),
) => {
  if (!component) {
    throw new Error('Please pass in a component to render page');
  }

  const html = component(props);
  const css = styles(props);

  if (css) {
    const styleElement = document.createElement('style');
    if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
    else styleElement.appendChild(document.createTextNode(css));
    document.head.appendChild(styleElement);
  }

  if (parentElement) {
    return parentElement.innerHTML = html;
  }
  return html;
}

export default render;