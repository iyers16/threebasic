const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#0000ff")
document.body.appendChild( renderer.domElement )
camera.position.z = 75

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// basic cube
var geometry = new THREE.BoxGeometry( 20, 20, 20)
var material = new THREE.MeshBasicMaterial({color: 0xef0000})
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
// basic sphere
var geometry = new THREE.SphereGeometry( 20, 20, 20)
var material = new THREE.MeshBasicMaterial( {color: 0x00cf00})
var sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// animation
function animate() {
	requestAnimationFrame( animate )
  cube.position.x = -40;
  sphere.position.x = 40;

  sphere.rotation.x += 0.1;
  sphere.rotation.y += 0.1;

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera )
}
//animation call
animate()
