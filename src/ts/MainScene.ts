import * as ORE from '@ore-three-ts';
import * as THREE from 'three';

import { DOFFilter } from './DOFFilter';

export class MainScene extends ORE.BaseScene {

	private dof: DOFFilter;
	private light: THREE.Light;

	constructor() {

		super();

		this.name = "MainScene";

	}

	onBind( gProps: ORE.GlobalProperties ) {

		super.onBind( gProps );

		this.renderer = this.gProps.renderer;

		this.dof = new DOFFilter( this.renderer );

		this.initScene();

	}

	private initScene() {

		var boxGeo = new THREE.BoxBufferGeometry( 1, 1, 1 );
		var boXMat = new THREE.MeshNormalMaterial();

		let n = 7;
		let width = 20;
		for ( let i = 0; i < n; i ++ ) {

			for ( let j = 0; j < n; j ++ ) {

				for ( let k = 0; k < n; k ++ ) {

					let box = new THREE.Mesh( boxGeo, boXMat );
					box.position.set( width / ( n - 1 ) * j - width / 2, width / ( n - 1 ) * k - width / 2, width / ( n - 1 ) * i - width / 2 );
					this.scene.add( box );

				}

			}

		}

		this.camera.position.set( 0, 1.5, 3 );
		this.camera.lookAt( 0, 0, 0 );

		this.light = new THREE.DirectionalLight();
		this.light.position.y = 10;
		this.scene.add( this.light );


	}

	public animate( deltaTime: number ) {

		let scale = 10;
		this.camera.position.set( Math.sin( this.time ) * scale, Math.sin( this.time ) * 5, Math.cos( this.time ) * scale );
		this.camera.lookAt( 0, 0, 0 );

		this.dof.render( this.scene, this.camera );
		// this.renderer.render( this.scene, this.camera );

	}

	public onResize( args: ORE.ResizeArgs ) {

		super.onResize( args );

	}

	public onTouchStart( cursor: ORE.Cursor, event: MouseEvent ) {

	}

	public onTouchMove( cursor: ORE.Cursor, event: MouseEvent ) {

	}

	public onTouchEnd( cursor: ORE.Cursor, event: MouseEvent ) {

	}

	public onHover( cursor: ORE.Cursor ) {

	}

	public onWheel( event: WheelEvent, trackpadDelta: number ) {

	}

}
