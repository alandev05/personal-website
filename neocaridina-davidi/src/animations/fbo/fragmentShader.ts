const fragmentShader = `
void main() {
  vec3 color = vec3(0.2, 0.26, 0.32);
  float alpha = 1.0;
  gl_FragColor = vec4(color, alpha);
}
`;

export default fragmentShader;

