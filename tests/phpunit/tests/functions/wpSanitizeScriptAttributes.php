<?php

/**
 * Test wp_sanitize_script_attributes().
 *
 * @group functions.php
 */
class Tests_Functions_wpSanitizeScriptAttributes extends WP_UnitTestCase {

	function html5_script_support() {
		global $_wp_theme_features;
		$_wp_theme_features = array(
			'html5' => array(
				array( 'script' ),
			),
		);
	}

	function no_html5_script_support() {
		global $_wp_theme_features;
		if ( isset( $_wp_theme_features['html5'] ) ) {
			unset( $_wp_theme_features['html5'] );
		}
	}

	function test_sanitize_script_attributes_type_set_html5_script_support() {
		$this->html5_script_support();
		$this->assertSame(
			' type="application/javascript" src="PATH/FILE.js" nomodule',
			wp_sanitize_script_attributes(
				array(
					'type'     => 'application/javascript',
					'src'      => 'PATH/FILE.js',
					'async'    => false,
					'nomodule' => true,
				)
			)
		);
	}

	function test_sanitize_script_attributes_type_set_no_html5_script_support() {
		$this->no_html5_script_support();

		$this->assertSame(
			' src="PATH/FILE.js" type="application/javascript" nomodule',
			wp_sanitize_script_attributes(
				array(
					'src'      => 'PATH/FILE.js',
					'type'     => 'application/javascript',
					'async'    => false,
					'nomodule' => true,
				)
			)
		);
	}


	function test_sanitize_script_attributes_type_not_set_html5_script_support() {
		$this->html5_script_support();

		$this->assertSame(
			' src="PATH/FILE.js" nomodule',
			wp_sanitize_script_attributes(
				array(
					'src'      => 'PATH/FILE.js',
					'async'    => false,
					'nomodule' => true,
				)
			)
		);
	}

	function test_sanitize_script_attributes_type_not_set_no_html5_script_support() {
		$this->no_html5_script_support();

		$this->assertSame(
			' src="PATH/FILE.js" nomodule type="text/javascript"',
			wp_sanitize_script_attributes(
				array(
					'src'      => 'PATH/FILE.js',
					'async'    => false,
					'nomodule' => true,
				)
			)
		);
	}


	function test_sanitize_script_attributes_no_attributes_html5_script_support() {
		$this->html5_script_support();

		$this->assertSame(
			'',
			wp_sanitize_script_attributes()
		);
	}

	function test_sanitize_script_attributes_no_attributes_no_html5_script_support() {
		$this->no_html5_script_support();

		$this->assertSame(
			' type="text/javascript"',
			wp_sanitize_script_attributes()
		);
	}

	function test_sanitize_script_attributes_only_false_boolean_attributes_html5_script_support() {
		$this->html5_script_support();

		$this->assertSame(
			'',
			wp_sanitize_script_attributes(
				array(
					'async'    => false,
					'nomodule' => false,
				)
			)
		);
	}

	function test_sanitize_script_attributes_only_false_boolean_attributes_no_html5_script_support() {
		$this->no_html5_script_support();

		$this->assertSame(
			' type="text/javascript"',
			wp_sanitize_script_attributes(
				array(
					'async'    => false,
					'nomodule' => false,
				)
			)
		);
	}
	function test_sanitize_script_attributes_only_true_boolean_attributes_html5_script_support() {
		$this->html5_script_support();

		$this->assertSame(
			' async nomodule',
			wp_sanitize_script_attributes(
				array(
					'async'    => true,
					'nomodule' => true,
				)
			)
		);
	}

	function test_sanitize_script_attributes_only_true_boolean_attributes_no_html5_script_support() {
		$this->no_html5_script_support();

		$this->assertSame(
			' async nomodule type="text/javascript"',
			wp_sanitize_script_attributes(
				array(
					'async'    => true,
					'nomodule' => true,
				)
			)
		);
	}

	function test_sanitize_script_attributes_wp_script_attributes_filter_html5_script_support() {
		$this->html5_script_support();

		add_filter(
			'wp_script_attributes',
			function( $attributes ) {
				if ( isset( $attributes['id'] ) && $attributes['id'] === 'utils-js-extra' ) {
					$attributes['async'] = true;
				}
				return $attributes;
			}
		);

		$this->assertSame(
			' src="PATH/FILE.js" id="utils-js-extra" async nomodule',
			wp_sanitize_script_attributes(
				array(
					'src'      => 'PATH/FILE.js',
					'id'       => 'utils-js-extra',
					'async'    => false,
					'nomodule' => true,
				)
			)
		);
	}

	function test_sanitize_script_attributes_wp_script_attributes_filter_no_html5_script_support() {
		$this->no_html5_script_support();

		add_filter(
			'wp_script_attributes',
			function( $attributes ) {
				if ( isset( $attributes['id'] ) && $attributes['id'] === 'utils-js-extra' ) {
					$attributes['async'] = true;
				}
				return $attributes;
			}
		);

		$this->assertSame(
			' src="PATH/FILE.js" id="utils-js-extra" async nomodule type="text/javascript"',
			wp_sanitize_script_attributes(
				array(
					'src'      => 'PATH/FILE.js',
					'id'       => 'utils-js-extra',
					'async'    => false,
					'nomodule' => true,
				)
			)
		);
	}


}
