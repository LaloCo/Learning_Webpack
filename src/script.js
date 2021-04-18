import './style.css'
import * as THREE from 'three'

// this is the root of the project, not index.html
// that means that we don't need to add this script
// to the index.html for it to work, and since this
// file is importing thee styles.css, we don't need
// to add it to the html file either.

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1) // width, height, depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)
cube.position.x = 0.7
cube.position.y = -0.6
cube.position.z = 1

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // degrees & aspect ratio
camera.position.z = 3 // three times thee size of cube (which is 1x1x1 as set)

console.log(cube.position.length()) // distance from 0,0,0
console.log(cube.position.distanceTo(camera.position)) // distance to camera

scene.add(cube)
scene.add(camera)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
