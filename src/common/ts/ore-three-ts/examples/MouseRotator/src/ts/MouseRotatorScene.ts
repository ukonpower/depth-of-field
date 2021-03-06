import * as THREE from 'three';
import * as ORE from '@ore-three-ts';

export class MouseRotatorScene extends ORE.BaseScene {

	private rotator: ORE.MouseRotator;

	private box: THREE.Mesh;

	constructor() {

		super();

	}

	public onBind( gProps: ORE.GlobalProperties ) {

		super.onBind( gProps );

		this.camera.position.set( 0, 1.5, 4 );
		this.camera.lookAt( 0, 0, 0 );

		this.box = new THREE.Mesh( new THREE.BoxGeometry(), new THREE.MeshNormalMaterial() );
		this.scene.add( this.box );

		this.rotator = new ORE.MouseRotator( this.box );

	}

	public animate( deltaTime: number ) {

		this.rotator.update();

		this.renderer.render( this.scene, this.camera );

	}

	public onResize( args: ORE.ResizeArgs ) {

		super.onResize( args );

	}

	public onTouchMove( cursor: ORE.Cursor, e: MouseEvent ) {

		this.rotator.addVelocity( cursor.delta );

	}

}
