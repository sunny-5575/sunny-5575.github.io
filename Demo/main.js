import * as THREE from 'https://unpkg.com/three@^0.155.0/build/three.module.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import gsap from 'gsap'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const canvas = document.querySelector('canvas.canvas')   //Canvas element
const openDoorIcon = document.querySelector('div.openDoorIcon')

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


const group1 = new THREE.Group()
const group2 = new THREE.Group()
const group3 = new THREE.Group()
const group4 = new THREE.Group()
const group5 = new THREE.Group()
const group6 = new THREE.Group()
const group7 = new THREE.Group()
const doors = new THREE.Group()
const frame = new THREE.Group()
const constrains = new THREE.Group()

scene.add(group1)
scene.add(group2)
scene.add(group3)
scene.add(group4)
scene.add(group5)
scene.add(group6)
scene.add(group7)
scene.add(doors)
scene.add(constrains)

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-3.2, 1.5, 3.8)
scene.add(camera)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const controls = new PointerLockControls(camera, canvas)


const textureloader = new THREE.TextureLoader()
const room1Texture = textureloader.load('.https://drive.google.com/uc?export=view&id=1uNLWT0iEPgY_iD-J-20wo3x_wfjuZ7ez')
room1Texture.flipY = false
const room1DeskTexture = textureloader.load('.https://drive.google.com/uc?export=view&id=1t2eZpCcsLQuJBgh2Q8JAHn4viTyysOB7')
const room1TableTexture = textureloader.load('.https://drive.google.com/uc?export=view&id=1EI7mZFO-5FdNrds77uEgHBDBAerDfjb1')
const room1Material = new THREE.MeshBasicMaterial({ map: room1Texture })
const room1DeskMaterial = new THREE.MeshBasicMaterial({ map: room1DeskTexture })
const room1TableMaterial = new THREE.MeshBasicMaterial({ map: room1TableTexture })
const hideMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const manger = new THREE.LoadingManager();
const pre = document.getElementById('preloader')
manger.onLoad = function () {
    pre.style.display = 'none'
    canvas.style.display = 'block'
}
const loader = new GLTFLoader(manger)

loader.load(
    '.https://drive.google.com/uc?export=view&id=1k2VITR8j6o-UQmN3JjVI1QI7yDO9K0xF',    //file name

    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = room1Material
        })
        const desk = gltf.scene.children.find(child => child.name === 'desk')
        desk.material = room1DeskMaterial
        group1.add(gltf.scene)
    },
)

loader.load(
    '.https://drive.google.com/uc?export=view&id=11x7sljgQH9OUXEPkVpgAtdBpnnsT3pM3',    //file name

    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = room1TableMaterial
        })
        group1.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1FiKk3TK3hZyOT_DaFKTXhYqOMTN4lRmC',    //file name

    (gltf) => {
        group2.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1k9x5B3RK8CJFbK34gU-fy-TebW_8PQfW',    //file name

    (gltf) => {
        group3.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1R4iEDR6NVUcHgU6xX4NMChZXooLl-irm',    //file name

    (gltf) => {
        group4.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1AD-bxRdxyleMBUCjHkNcpgumcq0EciGj',    //file name

    (gltf) => {
        group5.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1S5XCplNjCNdd2HzqsGY1G4OZMbZix3z5',    //file name

    (gltf) => {
        group6.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1KJLFxQRrO-y_iBWX1tbXgpab_UOhHFdU',    //file name

    (gltf) => {
        group7.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1W0XGSSV3hqngfvNlzVTLDAmXy5k_ExFs',    //file name

    (gltf) => {
        gltf.scene.traverse((child) => {
            child.layers.enable(1)
            child.layers.enable(2)
        })
        doors.add(gltf.scene)
    },
)

// loader.load(
//     'https://drive.google.com/uc?export=view&id=hall1Gate1.glb',    //file name

//     (gltf) => {
//         gltf.scene.traverse((child) => {
//             child.layers.enable(2)
//         })
//         doors.add(gltf.scene)
//     },
// )

loader.load(
    'https://drive.google.com/uc?export=view&id=142K_P9fgRq3r46VZfNgTp1Zvm6CxxxNr',    //file name

    (gltf) => {
        gltf.scene.traverse((child) => {
            child.layers.enable(1)
            child.layers.enable(2)
        })
        doors.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1mDNFLEI0VyTqrbjZMga2j2CAlY48u2pC',    //file name

    (gltf) => {
        gltf.scene.traverse((child) => {
            child.layers.enable(1)
            child.layers.enable(2)
        })
        doors.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=17zMhCR2nYiN2goyXDZTG1EVocI10nN-e',    //file name

    (gltf) => {
        gltf.scene.traverse((child) => {
            child.layers.enable(1)
            child.layers.enable(2)
        })
        doors.add(gltf.scene)
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1hvq-HMjdjQET7JGO75w85u64TOjklBzy',    //file name

    (gltf) => {
        gltf.scene.traverse((child) => {
            child.layers.enable(1)
            child.layers.enable(2)
        })
        doors.add(gltf.scene)
    },


)

doors.layers.enable(1)
doors.layers.enable(2)

loader.load(
    '.https://drive.google.com/uc?export=view&id=1-TRTMBfhTqiNWsBNlsaMD3WHEvNg8QfZ',    //file name

    (gltf) => {
        console.log('gltf.scene')
        console.log(gltf.scene)
        gltf.scene.traverse((child) => {
            console.log(gltf.scene.children[0])
            gltf.scene.children[0].material = hideMaterial
            gltf.scene.children[0].layers.disable(0)
            gltf.scene.children[0].layers.enable(1)
            constrains.add(gltf.scene.children[0])
        })
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1SHEVhF97UNbGfPzlLZ7emXJQwz2UVQrY',    //file name

    (gltf) => {
        console.log('gltf.scene')
        console.log(gltf.scene)
        console.log(gltf.scene.children[0])
        gltf.scene.children[0].material = hideMaterial
        gltf.scene.children[0].layers.disable(0)
        gltf.scene.children[0].layers.enable(1)
        constrains.add(gltf.scene.children[0])
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1Q0Owi2UzOQ0UqrWWr30ak3XbWQD7701u',    //file name

    (gltf) => {
        console.log('gltf.scene')
        console.log(gltf.scene)
        console.log(gltf.scene.children[0])
        gltf.scene.children[0].material = hideMaterial
        gltf.scene.children[0].layers.disable(0)
        gltf.scene.children[0].layers.enable(1)
        constrains.add(gltf.scene.children[0])
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=189it_g3bUkyAu97al082adHLglQF2laJ',    //file name

    (gltf) => {
        console.log('gltf.scene')
        console.log(gltf.scene)
        console.log(gltf.scene.children[0])
        gltf.scene.children[0].material = hideMaterial
        gltf.scene.children[0].layers.disable(0)
        gltf.scene.children[0].layers.enable(1)
        constrains.add(gltf.scene.children[0])
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1fWX-K7FVCrqpRWHD8nLep_80Zj50WITu',    //file name

    (gltf) => {
        console.log('gltf.scene')
        console.log(gltf.scene)
        console.log(gltf.scene.children[0])
        gltf.scene.children[0].material = hideMaterial
        gltf.scene.children[0].layers.disable(0)
        gltf.scene.children[0].layers.enable(1)
        constrains.add(gltf.scene.children[0])
    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1vIcJmrytpbiEu_XiOKRiQ9NckiOe5rI8',    //file name

    (gltf) => {
        console.log('gltf.scene')
        console.log(gltf.scene)
        gltf.scene.material = hideMaterial
        gltf.scene.material.opacity = 0.5
        gltf.scene.layers.disable(0)
        gltf.scene.layers.enable(1)
        constrains.add(gltf.scene)

    },
)

loader.load(
    'https://drive.google.com/uc?export=view&id=1KJLFxQRrO-y_iBWX1tbXgpab_UOhHFdU',    //file name

    (gltf) => {
        console.log('gltf.scene')
        console.log(gltf.scene)
        console.log(gltf.scene.children[0])
        gltf.scene.children[0].material = hideMaterial
        gltf.scene.children[0].layers.disable(0)
        gltf.scene.children[0].layers.enable(1)
        constrains.add(gltf.scene.children[0])
    },
)

console.log('constrains')
console.log(constrains)

loader.load(
    'https://drive.google.com/uc?export=view&id=1_cZgm59722D9p14OiL1jxGJL7-EXDehw',
    (gltf) => {
        scene.add(gltf.scene)
    }
)

console.log(doors)

scene.add(group1)
scene.add(group2)
scene.add(group3)
scene.add(group4)
scene.add(group5)
scene.add(group6)
scene.add(group7)
scene.add(doors)
scene.add(frame)

// const controls1 = new OrbitControls(camera, canvas)
// controls1.target.set(0, 0.75, 0)
// controls1.enableDamping = true

const rayCaster1 = new THREE.Raycaster()
rayCaster1.near = 0
rayCaster1.far = 0.5
rayCaster1.layers.set(1)

const rayCaster2 = new THREE.Raycaster()
rayCaster2.near = 0
rayCaster2.far = 1
rayCaster2.layers.set(2)

canvas.addEventListener('dblclick', () => {

    if (!controls.isLocked) {
        controls.lock()
        console.log('mouseis locked')
    }
    else {
        controls.unlock()
        enable.stat = true
        console.log('mouseis unlocked')
    }

})

console.log('doors')

console.log(doors)

const enable = { stat: true }

const openDoor = () => {

    console.log("entered")
    enable.stat = false

    const direction = new THREE.Vector3()
    camera.getWorldDirection(direction)
    rayCaster2.set(camera.position, direction)
    const intersects = rayCaster2.intersectObject(doors)

    console.log(intersects)

    if (intersects.length == 0)
        return

    console.log(intersects)

    var timeLine = new gsap.timeline()
    timeLine.to(intersects[0].object.rotation, { z: intersects[0].object.rotation.z + Math.PI * 0.5, duration: 0.5 })
    timeLine.to(intersects[0].object.rotation, { z: intersects[0].object.rotation.z + Math.PI * 0.5, duration: 3 })
    timeLine.to(intersects[0].object.rotation, { z: intersects[0].object.rotation.z, duration: 0.5 })
    timeLine.to(enable, { stat: true })
    // setTimeout(() => {
    //     enable = true
    // }, 4200)
}

window.addEventListener('keydown', (event) => {
    if (controls.isLocked == false)
        return

    const x = camera.position.x, z = camera.position.z;

    const distance = 0.4
    const speed = 0.4

    const direction = new THREE.Vector3()
    camera.getWorldDirection(direction)
    direction.y = 0
    direction.normalize()
    let intersects

    switch (event.code) {
        case 'KeyW':
            rayCaster1.set(camera.position, direction)
            intersects = rayCaster1.intersectObjects([constrains, doors])
            if (intersects.length !== 0)
                return
            console.log(intersects.length)
            controls.moveForward(distance)
            break

        case 'KeyA':
            direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.5 * Math.PI)
            rayCaster1.set(camera.position, direction)
            intersects = rayCaster1.intersectObjects([constrains, doors])
            if (intersects.length !== 0)
                return
            console.log("A")
            controls.moveRight(-distance)
            break

        case 'KeyS':
            direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI)
            rayCaster1.set(camera.position, direction)
            intersects = rayCaster1.intersectObjects([constrains, doors])
            if (intersects.length !== 0)
                return
            console.log("S")
            controls.moveForward(-distance)
            break

        case 'KeyD':
            direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), -0.5 * Math.PI)
            rayCaster1.set(camera.position, direction)
            intersects = rayCaster1.intersectObjects([constrains, doors])
            if (intersects.length !== 0)
                return
            console.log("D")
            controls.moveRight(distance)
            break

        case 'KeyO':
            if (enable.stat === true)
                openDoor()
            break

        case 'KeyL':
            console.log(camera.position)
            console.log(camera.rotation)
    }

    gsap.from(camera.position, { x: x, z: z, duration: distance / speed })
})


const tick = () => {
    const direction = new THREE.Vector3()
    camera.getWorldDirection(direction)
    rayCaster2.set(camera.position, direction)
    const intersects = rayCaster2.intersectObject(doors)

    if (intersects.lenth == 0)
        openDoorIcon.style.display = 'none'
    else
        openDoorIcon.style.display = 'block'

    //controls1.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
