const SOURCE_DIR = './source';
const BUILD_DIR = './.build';
const TEST_DIR = './.test';
const DEPLOY_DIR = './docs';
const DOCUMENTATION_DIR = './documentation';
const VENDOR_DIR = 'node_modules';


module.exports = {
    browsersync: {
        basedir: BUILD_DIR,
        index: 'index.html',
        watch: BUILD_DIR + '/**/*.html'
    },
    clean: {
        build: {
            root: BUILD_DIR + '/**',
            images: BUILD_DIR + '/images/**',
            scripts: BUILD_DIR + '/main.js',
            static: BUILD_DIR + '/static/**/*',
            styles: BUILD_DIR + '/main.css'
        },
        deploy: {
            root: DEPLOY_DIR + '/**',
            images: DEPLOY_DIR + '/images/**',
            scripts: DEPLOY_DIR + '/main.js',
            static: DEPLOY_DIR + '/static/**/*',
            styles: DEPLOY_DIR + '/main.css'
        },
        documentation: {
            root: DOCUMENTATION_DIR + '/**',
            styles: DOCUMENTATION_DIR + '/styles/**',
        },
        screenshots: './screenshots/',
        test: {
            root: TEST_DIR + '/**',
            images: TEST_DIR + '/images/**',
            scripts: TEST_DIR + '/main.js',
            static: TEST_DIR + '/static/**/*',
            styles: TEST_DIR + '/main.css'
        }
    },
    documentation: {
        sassdoc: {
            source: SOURCE_DIR + '/**/*.scss',
            dest: DOCUMENTATION_DIR + '/styles'
        }
    },
    errata: {
        source: [
            SOURCE_DIR + '/browserconfig.xml',
            SOURCE_DIR + '/crossdomain.xml',
            SOURCE_DIR + '/humans.txt',
            SOURCE_DIR + '/manifest.json',
            SOURCE_DIR + '/robots.txt'
        ],
        build: BUILD_DIR,
        test: TEST_DIR,
        deploy: DEPLOY_DIR
    },
    images: {
        source: [
            SOURCE_DIR + '/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}',
            '!' + SOURCE_DIR + '/vendor/**/*',
            '!' + SOURCE_DIR + '/static/**/*',
            '!' + SOURCE_DIR + '/**/icon-*.svg'
        ],
        watch: [
            SOURCE_DIR + '/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}',
            '!' + SOURCE_DIR + '/vendor/**/*',
            '!' + SOURCE_DIR + '/static/**/*',
            '!' + SOURCE_DIR + '/**/icon-*.svg'
        ],
        build: BUILD_DIR + '/images/',
        test: TEST_DIR + '/images/',
        deploy: {
            source: TEST_DIR + '/images/**/*',
            dest: DEPLOY_DIR + '/images/'
        }
    },
    lint: {
        scripts: [
            SOURCE_DIR + '/*.js',
            '!' + SOURCE_DIR + '/vendor/**/*.js'
        ],
        styles: [
            SOURCE_DIR + '/**/*.scss',
            '!' + SOURCE_DIR + '/base/_reset.scss',
            '!' + SOURCE_DIR + '/vendor/**/*'
        ],
        pages: SOURCE_DIR + '/**/*.hbs'
    },
    pages: {
        source: SOURCE_DIR + '/*.hbs',
        partials: SOURCE_DIR + '/**/*.hbs',
        content: SOURCE_DIR + '/content.json',
        watch: SOURCE_DIR + '/**/*.hbs',
        build: BUILD_DIR,
        test: {
            source: BUILD_DIR + '/*.html',
            dest: TEST_DIR,
        },
        deploy: {
            source: TEST_DIR + '/*.html',
            dest: DEPLOY_DIR
        }
    },
    responsify: {
        source: {
            jpgs: SOURCE_DIR + '/**/*-fullsize.{jpg,jpeg}',
            pngs: SOURCE_DIR + '/**/*-fullsize.png'
        }
    },
    screenshots: {
        source: DEPLOY_DIR + '/*.html',
        dest: './screenshots/'
    },
    scripts: {
        source: SOURCE_DIR + '/**/*.js',
        watch: SOURCE_DIR + '/**/*.js',
        build: BUILD_DIR,
        test: TEST_DIR,
        deploy: {
            source: TEST_DIR + '/*.js',
            dest: DEPLOY_DIR
        }
    },
    sprites: {
        source: [
            SOURCE_DIR + '/**/icon-*.svg',
            '!' + SOURCE_DIR + '/vendor/**/*',
            '!' + SOURCE_DIR + '/static/**/*'
        ],
        dest: SOURCE_DIR + '/elements/'
    },
    static: {
        source: SOURCE_DIR + '/static/**/*',
        build: BUILD_DIR + '/static/',
        test: TEST_DIR + '/static/',
        deploy: {
            source: TEST_DIR + '/static/**/*',
            dest: DEPLOY_DIR + '/static/'
        }
    },
    styles: {
        source: SOURCE_DIR + '/main.scss',
        watch: SOURCE_DIR + '/**/*.scss',
        build: BUILD_DIR,
        test: TEST_DIR,
        deploy: {
            source: TEST_DIR + '/main.css',
            dest: DEPLOY_DIR
        }
    },
    vendor: {
        jquery: {
            source: VENDOR_DIR + '/jquery/dist/jquery.min.js',
            dest: SOURCE_DIR + '/vendor/jquery/'
        },
        accessiblehtml: {
            source: VENDOR_DIR + '/accessible-html-content-patterns/docs/index.html',
            dest: SOURCE_DIR
        }
    }
};
