/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '128',
    CullFaceNone = 0,
    CullFaceBack = 1,
    CullFaceFront = 2,
    PCFShadowMap = 1,
    PCFSoftShadowMap = 2,
    VSMShadowMap = 3,
    FrontSide = 0,
    BackSide = 1,
    DoubleSide = 2,
    FlatShading = 1,
    NoBlending = 0,
    NormalBlending = 1,
    AdditiveBlending = 2,
    SubtractiveBlending = 3,
    MultiplyBlending = 4,
    CustomBlending = 5,
    AddEquation = 100,
    SubtractEquation = 101,
    ReverseSubtractEquation = 102,
    MinEquation = 103,
    MaxEquation = 104,
    ZeroFactor = 200,
    OneFactor = 201,
    SrcColorFactor = 202,
    OneMinusSrcColorFactor = 203,
    SrcAlphaFactor = 204,
    OneMinusSrcAlphaFactor = 205,
    DstAlphaFactor = 206,
    OneMinusDstAlphaFactor = 207,
    DstColorFactor = 208,
    OneMinusDstColorFactor = 209,
    SrcAlphaSaturateFactor = 210,
    NeverDepth = 0,
    AlwaysDepth = 1,
    LessDepth = 2,
    LessEqualDepth = 3,
    EqualDepth = 4,
    GreaterEqualDepth = 5,
    GreaterDepth = 6,
    NotEqualDepth = 7,
    MultiplyOperation = 0,
    MixOperation = 1,
    AddOperation = 2,
    NoToneMapping = 0,
    LinearToneMapping = 1,
    ReinhardToneMapping = 2,
    CineonToneMapping = 3,
    ACESFilmicToneMapping = 4,
    CustomToneMapping = 5,
    UVMapping = 300,
    CubeReflectionMapping = 301,
    CubeRefractionMapping = 302,
    EquirectangularReflectionMapping = 303,
    EquirectangularRefractionMapping = 304,
    CubeUVReflectionMapping = 306,
    CubeUVRefractionMapping = 307,
    RepeatWrapping = 1000,
    ClampToEdgeWrapping = 1001,
    MirroredRepeatWrapping = 1002,
    NearestFilter = 1003,
    NearestMipmapNearestFilter = 1004,
    NearestMipmapLinearFilter = 1005,
    LinearFilter = 1006,
    LinearMipmapNearestFilter = 1007,
    LinearMipmapLinearFilter = 1008,
    UnsignedByteType = 1009,
    ByteType = 1010,
    ShortType = 1011,
    UnsignedShortType = 1012,
    IntType = 1013,
    UnsignedIntType = 1014,
    FloatType = 1015,
    HalfFloatType = 1016,
    UnsignedShort4444Type = 1017,
    UnsignedShort5551Type = 1018,
    UnsignedShort565Type = 1019,
    UnsignedInt248Type = 1020,
    AlphaFormat = 1021,
    RGBFormat = 1022,
    RGBAFormat = 1023,
    LuminanceFormat = 1024,
    LuminanceAlphaFormat = 1025,
    DepthFormat = 1026,
    DepthStencilFormat = 1027,
    RedFormat = 1028,
    RedIntegerFormat = 1029,
    RGFormat = 1030,
    RGIntegerFormat = 1031,
    RGBIntegerFormat = 1032,
    RGBAIntegerFormat = 1033,
    RGB_S3TC_DXT1_Format = 33776,
    RGBA_S3TC_DXT1_Format = 33777,
    RGBA_S3TC_DXT3_Format = 33778,
    RGBA_S3TC_DXT5_Format = 33779,
    RGB_PVRTC_4BPPV1_Format = 35840,
    RGB_PVRTC_2BPPV1_Format = 35841,
    RGBA_PVRTC_4BPPV1_Format = 35842,
    RGBA_PVRTC_2BPPV1_Format = 35843,
    RGB_ETC1_Format = 36196,
    RGB_ETC2_Format = 37492,
    RGBA_ETC2_EAC_Format = 37496,
    RGBA_ASTC_4x4_Format = 37808,
    RGBA_ASTC_5x4_Format = 37809,
    RGBA_ASTC_5x5_Format = 37810,
    RGBA_ASTC_6x5_Format = 37811,
    RGBA_ASTC_6x6_Format = 37812,
    RGBA_ASTC_8x5_Format = 37813,
    RGBA_ASTC_8x6_Format = 37814,
    RGBA_ASTC_8x8_Format = 37815,
    RGBA_ASTC_10x5_Format = 37816,
    RGBA_ASTC_10x6_Format = 37817,
    RGBA_ASTC_10x8_Format = 37818,
    RGBA_ASTC_10x10_Format = 37819,
    RGBA_ASTC_12x10_Format = 37820,
    RGBA_ASTC_12x12_Format = 37821,
    RGBA_BPTC_Format = 36492,
    SRGB8_ALPHA8_ASTC_4x4_Format = 37840,
    SRGB8_ALPHA8_ASTC_5x4_Format = 37841,
    SRGB8_ALPHA8_ASTC_5x5_Format = 37842,
    SRGB8_ALPHA8_ASTC_6x5_Format = 37843,
    SRGB8_ALPHA8_ASTC_6x6_Format = 37844,
    SRGB8_ALPHA8_ASTC_8x5_Format = 37845,
    SRGB8_ALPHA8_ASTC_8x6_Format = 37846,
    SRGB8_ALPHA8_ASTC_8x8_Format = 37847,
    SRGB8_ALPHA8_ASTC_10x5_Format = 37848,
    SRGB8_ALPHA8_ASTC_10x6_Format = 37849,
    SRGB8_ALPHA8_ASTC_10x8_Format = 37850,
    SRGB8_ALPHA8_ASTC_10x10_Format = 37851,
    SRGB8_ALPHA8_ASTC_12x10_Format = 37852,
    SRGB8_ALPHA8_ASTC_12x12_Format = 37853,
    LoopOnce = 2200,
    LoopRepeat = 2201,
    LoopPingPong = 2202,
    InterpolateDiscrete = 2300,
    InterpolateLinear = 2301,
    InterpolateSmooth = 2302,
    ZeroCurvatureEnding = 2400,
    ZeroSlopeEnding = 2401,
    WrapAroundEnding = 2402,
    NormalAnimationBlendMode = 2500,
    AdditiveAnimationBlendMode = 2501,
    TrianglesDrawMode = 0,
    TriangleStripDrawMode = 1,
    TriangleFanDrawMode = 2,
    LinearEncoding = 3000,
    sRGBEncoding = 3001,
    GammaEncoding = 3007,
    RGBEEncoding = 3002,
    LogLuvEncoding = 3003,
    RGBM7Encoding = 3004,
    RGBM16Encoding = 3005,
    RGBDEncoding = 3006,
    BasicDepthPacking = 3200,
    RGBADepthPacking = 3201,
    TangentSpaceNormalMap = 0,
    ObjectSpaceNormalMap = 1,
    KeepStencilOp = 7680,
    AlwaysStencilFunc = 519,
    StaticDrawUsage = 35044,
    DynamicDrawUsage = 35048,
    GLSL3 = '300 es';
class EventDispatcher {
    addEventListener(e, t) {
        void 0 === this._listeners &&
        (this._listeners = {});
        const n = this._listeners;
        void 0 === n[e] &&
        (n[e] = []),
        - 1 === n[e].indexOf(t) &&
        n[e].push(t)
    }
    hasEventListener(e, t) {
        if (void 0 === this._listeners) return !1;
        const n = this._listeners;
        return void 0 !== n[e] &&
            - 1 !== n[e].indexOf(t)
    }
    removeEventListener(e, t) {
        if (void 0 === this._listeners) return;
        const n = this._listeners[e];
        if (void 0 !== n) {
            const e = n.indexOf(t);
            - 1 !== e &&
            n.splice(e, 1)
        }
    }
    dispatchEvent(e) {
        if (void 0 === this._listeners) return;
        const t = this._listeners[e.type];
        if (void 0 !== t) {
            e.target = this;
            const n = t.slice(0);
            for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
            e.target = null
        }
    }
}
const _lut = [];
for (let e = 0; e < 256; e++) _lut[e] = (e < 16 ? '0' : '') + e.toString(16);
let _seed = 1234567;
const DEG2RAD = Math.PI / 180,
    RAD2DEG = 180 / Math.PI;
function generateUUID() {
    const e = 4294967295 * Math.random() | 0,
        t = 4294967295 * Math.random() | 0,
        n = 4294967295 * Math.random() | 0,
        r = 4294967295 * Math.random() | 0;
    return (
        _lut[255 & e] + _lut[e >> 8 & 255] + _lut[e >> 16 & 255] + _lut[e >> 24 & 255] + '-' + _lut[255 & t] + _lut[t >> 8 & 255] + '-' + _lut[t >> 16 & 15 | 64] + _lut[t >> 24 & 255] + '-' + _lut[63 & n | 128] + _lut[n >> 8 & 255] + '-' + _lut[n >> 16 & 255] + _lut[n >> 24 & 255] + _lut[255 & r] + _lut[r >> 8 & 255] + _lut[r >> 16 & 255] + _lut[r >> 24 & 255]
    ).toUpperCase()
}
function clamp$1(e, t, n) {
    return Math.max(t, Math.min(n, e))
}
function euclideanModulo(e, t) {
    return (e % t + t) % t
}
function mapLinear(e, t, n, r, i) {
    return r + (e - t) * (i - r) / (n - t)
}
function inverseLerp(e, t, n) {
    return e !== t ? (n - e) / (t - e) : 0
}
function lerp$1(e, t, n) {
    return (1 - n) * e + n * t
}
function damp(e, t, n, r) {
    return lerp$1(e, t, 1 - Math.exp( - n * r))
}
function pingpong(e, t = 1) {
    return t - Math.abs(euclideanModulo(e, 2 * t) - t)
}
function smoothstep(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
}
function smootherstep(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
}
function randInt(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1))
}
function randFloat(e, t) {
    return e + Math.random() * (t - e)
}
function randFloatSpread(e) {
    return e * (0.5 - Math.random())
}
function seededRandom(e) {
    return void 0 !== e &&
    (_seed = e % 2147483647),
        _seed = 16807 * _seed % 2147483647,
    (_seed - 1) / 2147483646
}
function degToRad(e) {
    return e * DEG2RAD
}
function radToDeg(e) {
    return e * RAD2DEG
}
function isPowerOfTwo(e) {
    return 0 == (e & e - 1) &&
        0 !== e
}
function ceilPowerOfTwo(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
}
function floorPowerOfTwo(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
}
function setQuaternionFromProperEuler(e, t, n, r, i) {
    const a = Math.cos,
        s = Math.sin,
        o = a(n / 2),
        l = s(n / 2),
        c = a((t + r) / 2),
        h = s((t + r) / 2),
        u = a((t - r) / 2),
        d = s((t - r) / 2),
        p = a((r - t) / 2),
        m = s((r - t) / 2);
    switch (i) {
        case 'XYX':
            e.set(o * h, l * u, l * d, o * c);
            break;
        case 'YZY':
            e.set(l * d, o * h, l * u, o * c);
            break;
        case 'ZXZ':
            e.set(l * u, l * d, o * h, o * c);
            break;
        case 'XZX':
            e.set(o * h, l * m, l * p, o * c);
            break;
        case 'YXY':
            e.set(l * p, o * h, l * m, o * c);
            break;
        case 'ZYZ':
            e.set(l * m, l * p, o * h, o * c);
            break;
        default:
            console.warn(
                'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + i
            )
    }
}
var MathUtils = Object.freeze({
    __proto__: null,
    DEG2RAD: DEG2RAD,
    RAD2DEG: RAD2DEG,
    generateUUID: generateUUID,
    clamp: clamp$1,
    euclideanModulo: euclideanModulo,
    mapLinear: mapLinear,
    inverseLerp: inverseLerp,
    lerp: lerp$1,
    damp: damp,
    pingpong: pingpong,
    smoothstep: smoothstep,
    smootherstep: smootherstep,
    randInt: randInt,
    randFloat: randFloat,
    randFloatSpread: randFloatSpread,
    seededRandom: seededRandom,
    degToRad: degToRad,
    radToDeg: radToDeg,
    isPowerOfTwo: isPowerOfTwo,
    ceilPowerOfTwo: ceilPowerOfTwo,
    floorPowerOfTwo: floorPowerOfTwo,
    setQuaternionFromProperEuler: setQuaternionFromProperEuler
});
class Vector2 {
    constructor(e = 0, t = 0) {
        this.x = e,
            this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
            this.y = t,
            this
    }
    setScalar(e) {
        return this.x = e,
            this.y = e,
            this
    }
    setX(e) {
        return this.x = e,
            this
    }
    setY(e) {
        return this.y = e,
            this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error('index is out of range: ' + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error('index is out of range: ' + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y)
    }
    copy(e) {
        return this.x = e.x,
            this.y = e.y,
            this
    }
    add(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
            ),
                this.addVectors(e, t)
        ) : (this.x += e.x, this.y += e.y, this)
    }
    addScalar(e) {
        return this.x += e,
            this.y += e,
            this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
            this.y += e.y * t,
            this
    }
    sub(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
            ),
                this.subVectors(e, t)
        ) : (this.x -= e.x, this.y -= e.y, this)
    }
    subScalar(e) {
        return this.x -= e,
            this.y -= e,
            this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this
    }
    multiply(e) {
        return this.x *= e.x,
            this.y *= e.y,
            this
    }
    multiplyScalar(e) {
        return this.x *= e,
            this.y *= e,
            this
    }
    divide(e) {
        return this.x /= e.x,
            this.y /= e.y,
            this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6],
            this.y = r[1] * t + r[4] * n + r[7],
            this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
            this.y = Math.max(e, Math.min(t, this.y)),
            this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
    }
    round() {
        return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
    }
    negate() {
        return this.x = - this.x,
            this.y = - this.y,
            this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2( - this.y, - this.x) + Math.PI
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
            this.y = e.y + (t.y - e.y) * n,
            this
    }
    equals(e) {
        return e.x === this.x &&
            e.y === this.y
    }
    fromArray(e, t = 0) {
        return this.x = e[t],
            this.y = e[t + 1],
            this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x,
            e[t + 1] = this.y,
            e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n &&
        console.warn(
            'THREE.Vector2: offset has been removed from .fromBufferAttribute().'
        ),
            this.x = e.getX(t),
            this.y = e.getY(t),
            this
    }
    rotateAround(e, t) {
        const n = Math.cos(t),
            r = Math.sin(t),
            i = this.x - e.x,
            a = this.y - e.y;
        return this.x = i * n - a * r + e.x,
            this.y = i * r + a * n + e.y,
            this
    }
    random() {
        return this.x = Math.random(),
            this.y = Math.random(),
            this
    }
}
Vector2.prototype.isVector2 = !0;
class Matrix3 {
    constructor() {
        this.elements = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ],
        arguments.length > 0 &&
        console.error(
            'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.'
        )
    }
    set(e, t, n, r, i, a, s, o, l) {
        const c = this.elements;
        return c[0] = e,
            c[1] = r,
            c[2] = s,
            c[3] = t,
            c[4] = i,
            c[5] = o,
            c[6] = n,
            c[7] = a,
            c[8] = l,
            this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return t[0] = n[0],
            t[1] = n[1],
            t[2] = n[2],
            t[3] = n[3],
            t[4] = n[4],
            t[5] = n[5],
            t[6] = n[6],
            t[7] = n[7],
            t[8] = n[8],
            this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
            t.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
            this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            r = t.elements,
            i = this.elements,
            a = n[0],
            s = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            h = n[7],
            u = n[2],
            d = n[5],
            p = n[8],
            m = r[0],
            f = r[3],
            g = r[6],
            v = r[1],
            _ = r[4],
            x = r[7],
            y = r[2],
            b = r[5],
            M = r[8];
        return i[0] = a * m + s * v + o * y,
            i[3] = a * f + s * _ + o * b,
            i[6] = a * g + s * x + o * M,
            i[1] = l * m + c * v + h * y,
            i[4] = l * f + c * _ + h * b,
            i[7] = l * g + c * x + h * M,
            i[2] = u * m + d * v + p * y,
            i[5] = u * f + d * _ + p * b,
            i[8] = u * g + d * x + p * M,
            this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
            t[3] *= e,
            t[6] *= e,
            t[1] *= e,
            t[4] *= e,
            t[7] *= e,
            t[2] *= e,
            t[5] *= e,
            t[8] *= e,
            this
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            r = e[2],
            i = e[3],
            a = e[4],
            s = e[5],
            o = e[6],
            l = e[7],
            c = e[8];
        return t * a * c - t * s * l - n * i * c + n * s * o + r * i * l - r * a * o
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            r = e[2],
            i = e[3],
            a = e[4],
            s = e[5],
            o = e[6],
            l = e[7],
            c = e[8],
            h = c * a - s * l,
            u = s * o - c * i,
            d = l * i - a * o,
            p = t * h + n * u + r * d;
        if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const m = 1 / p;
        return e[0] = h * m,
            e[1] = (r * l - c * n) * m,
            e[2] = (s * n - r * a) * m,
            e[3] = u * m,
            e[4] = (c * t - r * o) * m,
            e[5] = (r * i - s * t) * m,
            e[6] = d * m,
            e[7] = (n * o - l * t) * m,
            e[8] = (a * t - n * i) * m,
            this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
            t[1] = t[3],
            t[3] = e,
            e = t[2],
            t[2] = t[6],
            t[6] = e,
            e = t[5],
            t[5] = t[7],
            t[7] = e,
            this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
            e[1] = t[3],
            e[2] = t[6],
            e[3] = t[1],
            e[4] = t[4],
            e[5] = t[7],
            e[6] = t[2],
            e[7] = t[5],
            e[8] = t[8],
            this
    }
    setUvTransform(e, t, n, r, i, a, s) {
        const o = Math.cos(i),
            l = Math.sin(i);
        return this.set(n * o, n * l, - n * (o * a + l * s) + a + e, - r * l, r * o, - r * ( - l * a + o * s) + s + t, 0, 0, 1),
            this
    }
    scale(e, t) {
        const n = this.elements;
        return n[0] *= e,
            n[3] *= e,
            n[6] *= e,
            n[1] *= t,
            n[4] *= t,
            n[7] *= t,
            this
    }
    rotate(e) {
        const t = Math.cos(e),
            n = Math.sin(e),
            r = this.elements,
            i = r[0],
            a = r[3],
            s = r[6],
            o = r[1],
            l = r[4],
            c = r[7];
        return r[0] = t * i + n * o,
            r[3] = t * a + n * l,
            r[6] = t * s + n * c,
            r[1] = - n * i + t * o,
            r[4] = - n * a + t * l,
            r[7] = - n * s + t * c,
            this
    }
    translate(e, t) {
        const n = this.elements;
        return n[0] += e * n[2],
            n[3] += e * n[5],
            n[6] += e * n[8],
            n[1] += t * n[2],
            n[4] += t * n[5],
            n[7] += t * n[8],
            this
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
        return !0
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return e[t] = n[0],
            e[t + 1] = n[1],
            e[t + 2] = n[2],
            e[t + 3] = n[3],
            e[t + 4] = n[4],
            e[t + 5] = n[5],
            e[t + 6] = n[6],
            e[t + 7] = n[7],
            e[t + 8] = n[8],
            e
    }
    clone() {
        return (new this.constructor).fromArray(this.elements)
    }
}
let _canvas;
Matrix3.prototype.isMatrix3 = !0;
class ImageUtils {
    static getDataURL(e) {
        if (/^data:/i.test(e.src)) return e.src;
        if ('undefined' == typeof HTMLCanvasElement) return e.src;
        let t;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
            void 0 === _canvas &&
            (
                _canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas')
            ),
                _canvas.width = e.width,
                _canvas.height = e.height;
            const n = _canvas.getContext('2d');
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
                t = _canvas
        }
        return t.width > 2048 ||
        t.height > 2048 ? (
            console.warn(
                'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
                e
            ),
                t.toDataURL('image/jpeg', 0.6)
        ) : t.toDataURL('image/png')
    }
}
let textureId = 0;
class Texture extends EventDispatcher {
    constructor(
        e = Texture.DEFAULT_IMAGE,
        t = Texture.DEFAULT_MAPPING,
        n = 1001,
        r = 1001,
        i = 1006,
        a = 1008,
        s = 1023,
        o = 1009,
        l = 1,
        c = 3000
    ) {
        super (),
            Object.defineProperty(this, 'id', {
                value: textureId++
            }),
            this.uuid = generateUUID(),
            this.name = '',
            this.image = e,
            this.mipmaps = [],
            this.mapping = t,
            this.wrapS = n,
            this.wrapT = r,
            this.magFilter = i,
            this.minFilter = a,
            this.anisotropy = l,
            this.format = s,
            this.internalFormat = null,
            this.type = o,
            this.offset = new Vector2(0, 0),
            this.repeat = new Vector2(1, 1),
            this.center = new Vector2(0, 0),
            this.rotation = 0,
            this.matrixAutoUpdate = !0,
            this.matrix = new Matrix3,
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = c,
            this.version = 0,
            this.onUpdate = null
    }
    updateMatrix() {
        this.matrix.setUvTransform(
            this.offset.x,
            this.offset.y,
            this.repeat.x,
            this.repeat.y,
            this.rotation,
            this.center.x,
            this.center.y
        )
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.name = e.name,
            this.image = e.image,
            this.mipmaps = e.mipmaps.slice(0),
            this.mapping = e.mapping,
            this.wrapS = e.wrapS,
            this.wrapT = e.wrapT,
            this.magFilter = e.magFilter,
            this.minFilter = e.minFilter,
            this.anisotropy = e.anisotropy,
            this.format = e.format,
            this.internalFormat = e.internalFormat,
            this.type = e.type,
            this.offset.copy(e.offset),
            this.repeat.copy(e.repeat),
            this.center.copy(e.center),
            this.rotation = e.rotation,
            this.matrixAutoUpdate = e.matrixAutoUpdate,
            this.matrix.copy(e.matrix),
            this.generateMipmaps = e.generateMipmaps,
            this.premultiplyAlpha = e.premultiplyAlpha,
            this.flipY = e.flipY,
            this.unpackAlignment = e.unpackAlignment,
            this.encoding = e.encoding,
            this
    }
    toJSON(e) {
        const t = void 0 === e ||
            'string' == typeof e;
        if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.5,
                type: 'Texture',
                generator: 'Texture.toJSON'
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [
                this.repeat.x,
                this.repeat.y
            ],
            offset: [
                this.offset.x,
                this.offset.y
            ],
            center: [
                this.center.x,
                this.center.y
            ],
            rotation: this.rotation,
            wrap: [
                this.wrapS,
                this.wrapT
            ],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        if (void 0 !== this.image) {
            const r = this.image;
            if (
                void 0 === r.uuid &&
                (r.uuid = generateUUID()),
                !t &&
                void 0 === e.images[r.uuid]
            ) {
                let t;
                if (Array.isArray(r)) {
                    t = [];
                    for (let e = 0, n = r.length; e < n; e++) r[e].isDataTexture ? t.push(serializeImage(r[e].image)) : t.push(serializeImage(r[e]))
                } else t = serializeImage(r);
                e.images[r.uuid] = {
                    uuid: r.uuid,
                    url: t
                }
            }
            n.image = r.uuid
        }
        return t ||
        (e.textures[this.uuid] = n),
            n
    }
    dispose() {
        this.dispatchEvent({
            type: 'dispose'
        })
    }
    transformUv(e) {
        if (300 !== this.mapping) return e;
        if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
            case 1000:
                e.x = e.x - Math.floor(e.x);
                break;
            case 1001:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
        }
        if (e.y < 0 || e.y > 1) switch (this.wrapT) {
            case 1000:
                e.y = e.y - Math.floor(e.y);
                break;
            case 1001:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
        }
        return this.flipY &&
        (e.y = 1 - e.y),
            e
    }
    set needsUpdate(e) {
        !0 === e &&
        this.version++
    }
}
function serializeImage(e) {
    return 'undefined' != typeof HTMLImageElement &&
    e instanceof HTMLImageElement ||
    'undefined' != typeof HTMLCanvasElement &&
    e instanceof HTMLCanvasElement ||
    'undefined' != typeof ImageBitmap &&
    e instanceof ImageBitmap ? ImageUtils.getDataURL(e) : e.data ? {
            data: Array.prototype.slice.call(e.data),
            width: e.width,
            height: e.height,
            type: e.data.constructor.name
        }
        : (
            console.warn('THREE.Texture: Unable to serialize Texture.'),
                {
                }
        )
}
Texture.DEFAULT_IMAGE = void 0,
    Texture.DEFAULT_MAPPING = 300,
    Texture.prototype.isTexture = !0;
class Vector4 {
    constructor(e = 0, t = 0, n = 0, r = 1) {
        this.x = e,
            this.y = t,
            this.z = n,
            this.w = r
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, r) {
        return this.x = e,
            this.y = t,
            this.z = n,
            this.w = r,
            this
    }
    setScalar(e) {
        return this.x = e,
            this.y = e,
            this.z = e,
            this.w = e,
            this
    }
    setX(e) {
        return this.x = e,
            this
    }
    setY(e) {
        return this.y = e,
            this
    }
    setZ(e) {
        return this.z = e,
            this
    }
    setW(e) {
        return this.w = e,
            this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error('index is out of range: ' + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error('index is out of range: ' + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w)
    }
    copy(e) {
        return this.x = e.x,
            this.y = e.y,
            this.z = e.z,
            this.w = void 0 !== e.w ? e.w : 1,
            this
    }
    add(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
            ),
                this.addVectors(e, t)
        ) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    }
    addScalar(e) {
        return this.x += e,
            this.y += e,
            this.z += e,
            this.w += e,
            this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this.z = e.z + t.z,
            this.w = e.w + t.w,
            this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
            this.y += e.y * t,
            this.z += e.z * t,
            this.w += e.w * t,
            this
    }
    sub(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
            ),
                this.subVectors(e, t)
        ) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    }
    subScalar(e) {
        return this.x -= e,
            this.y -= e,
            this.z -= e,
            this.w -= e,
            this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this.z = e.z - t.z,
            this.w = e.w - t.w,
            this
    }
    multiply(e) {
        return this.x *= e.x,
            this.y *= e.y,
            this.z *= e.z,
            this.w *= e.w,
            this
    }
    multiplyScalar(e) {
        return this.x *= e,
            this.y *= e,
            this.z *= e,
            this.w *= e,
            this
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            r = this.z,
            i = this.w,
            a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i,
            this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i,
            this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i,
            this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i,
            this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 0.0001 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t),
            this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t,
            n,
            r,
            i;
        const a = 0.01,
            s = 0.1,
            o = e.elements,
            l = o[0],
            c = o[4],
            h = o[8],
            u = o[1],
            d = o[5],
            p = o[9],
            m = o[2],
            f = o[6],
            g = o[10];
        if (Math.abs(c - u) < a && Math.abs(h - m) < a && Math.abs(p - f) < a) {
            if (
                Math.abs(c + u) < s &&
                Math.abs(h + m) < s &&
                Math.abs(p + f) < s &&
                Math.abs(l + d + g - 3) < s
            ) return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const e = (l + 1) / 2,
                o = (d + 1) / 2,
                v = (g + 1) / 2,
                _ = (c + u) / 4,
                x = (h + m) / 4,
                y = (p + f) / 4;
            return e > o &&
            e > v ? e < a ? (n = 0, r = 0.707106781, i = 0.707106781) : (n = Math.sqrt(e), r = _ / n, i = x / n) : o > v ? o < a ? (n = 0.707106781, r = 0, i = 0.707106781) : (r = Math.sqrt(o), n = _ / r, i = y / r) : v < a ? (n = 0.707106781, r = 0.707106781, i = 0) : (i = Math.sqrt(v), n = x / i, r = y / i),
                this.set(n, r, i, t),
                this
        }
        let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
        return Math.abs(v) < 0.001 &&
        (v = 1),
            this.x = (f - p) / v,
            this.y = (h - m) / v,
            this.z = (u - c) / v,
            this.w = Math.acos((l + d + g - 1) / 2),
            this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this.z = Math.min(this.z, e.z),
            this.w = Math.min(this.w, e.w),
            this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this.z = Math.max(this.z, e.z),
            this.w = Math.max(this.w, e.w),
            this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this.z = Math.max(e.z, Math.min(t.z, this.z)),
            this.w = Math.max(e.w, Math.min(t.w, this.w)),
            this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
            this.y = Math.max(e, Math.min(t, this.y)),
            this.z = Math.max(e, Math.min(t, this.z)),
            this.w = Math.max(e, Math.min(t, this.w)),
            this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
    }
    round() {
        return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
    }
    negate() {
        return this.x = - this.x,
            this.y = - this.y,
            this.z = - this.z,
            this.w = - this.w,
            this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this.z += (e.z - this.z) * t,
            this.w += (e.w - this.w) * t,
            this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
            this.y = e.y + (t.y - e.y) * n,
            this.z = e.z + (t.z - e.z) * n,
            this.w = e.w + (t.w - e.w) * n,
            this
    }
    equals(e) {
        return e.x === this.x &&
            e.y === this.y &&
            e.z === this.z &&
            e.w === this.w
    }
    fromArray(e, t = 0) {
        return this.x = e[t],
            this.y = e[t + 1],
            this.z = e[t + 2],
            this.w = e[t + 3],
            this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x,
            e[t + 1] = this.y,
            e[t + 2] = this.z,
            e[t + 3] = this.w,
            e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n &&
        console.warn(
            'THREE.Vector4: offset has been removed from .fromBufferAttribute().'
        ),
            this.x = e.getX(t),
            this.y = e.getY(t),
            this.z = e.getZ(t),
            this.w = e.getW(t),
            this
    }
    random() {
        return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this.w = Math.random(),
            this
    }
}
Vector4.prototype.isVector4 = !0;
class WebGLRenderTarget extends EventDispatcher {
    constructor(e, t, n) {
        super (),
            this.width = e,
            this.height = t,
            this.depth = 1,
            this.scissor = new Vector4(0, 0, e, t),
            this.scissorTest = !1,
            this.viewport = new Vector4(0, 0, e, t),
            n = n ||
                {
                },
            this.texture = new Texture(
                void 0,
                n.mapping,
                n.wrapS,
                n.wrapT,
                n.magFilter,
                n.minFilter,
                n.format,
                n.type,
                n.anisotropy,
                n.encoding
            ),
            this.texture.image = {},
            this.texture.image.width = e,
            this.texture.image.height = t,
            this.texture.image.depth = 1,
            this.texture.generateMipmaps = void 0 !== n.generateMipmaps &&
                n.generateMipmaps,
            this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006,
            this.depthBuffer = void 0 === n.depthBuffer ||
                n.depthBuffer,
            this.stencilBuffer = void 0 !== n.stencilBuffer &&
                n.stencilBuffer,
            this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }
    setTexture(e) {
        e.image = {
            width: this.width,
            height: this.height,
            depth: this.depth
        },
            this.texture = e
    }
    setSize(e, t, n = 1) {
        this.width === e &&
        this.height === t &&
        this.depth === n ||
        (
            this.width = e,
                this.height = t,
                this.depth = n,
                this.texture.image.width = e,
                this.texture.image.height = t,
                this.texture.image.depth = n,
                this.dispose()
        ),
            this.viewport.set(0, 0, e, t),
            this.scissor.set(0, 0, e, t)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.width = e.width,
            this.height = e.height,
            this.depth = e.depth,
            this.viewport.copy(e.viewport),
            this.texture = e.texture.clone(),
            this.depthBuffer = e.depthBuffer,
            this.stencilBuffer = e.stencilBuffer,
            this.depthTexture = e.depthTexture,
            this
    }
    dispose() {
        this.dispatchEvent({
            type: 'dispose'
        })
    }
}
WebGLRenderTarget.prototype.isWebGLRenderTarget = !0;
class WebGLMultisampleRenderTarget extends WebGLRenderTarget {
    constructor(e, t, n) {
        super (e, t, n),
            this.samples = 4
    }
    copy(e) {
        return super.copy.call(this, e),
            this.samples = e.samples,
            this
    }
}
WebGLMultisampleRenderTarget.prototype.isWebGLMultisampleRenderTarget = !0;
class Quaternion {
    constructor(e = 0, t = 0, n = 0, r = 1) {
        this._x = e,
            this._y = t,
            this._z = n,
            this._w = r
    }
    static slerp(e, t, n, r) {
        return console.warn(
            'THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.'
        ),
            n.slerpQuaternions(e, t, r)
    }
    static slerpFlat(e, t, n, r, i, a, s) {
        let o = n[r + 0],
            l = n[r + 1],
            c = n[r + 2],
            h = n[r + 3];
        const u = i[a + 0],
            d = i[a + 1],
            p = i[a + 2],
            m = i[a + 3];
        if (0 === s) return e[t + 0] = o,
            e[t + 1] = l,
            e[t + 2] = c,
            void (e[t + 3] = h);
        if (1 === s) return e[t + 0] = u,
            e[t + 1] = d,
            e[t + 2] = p,
            void (e[t + 3] = m);
        if (h !== m || o !== u || l !== d || c !== p) {
            let e = 1 - s;
            const t = o * u + l * d + c * p + h * m,
                n = t >= 0 ? 1 : - 1,
                r = 1 - t * t;
            if (r > Number.EPSILON) {
                const i = Math.sqrt(r),
                    a = Math.atan2(i, t * n);
                e = Math.sin(e * a) / i,
                    s = Math.sin(s * a) / i
            }
            const i = s * n;
            if (o = o * e + u * i, l = l * e + d * i, c = c * e + p * i, h = h * e + m * i, e === 1 - s) {
                const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                o *= e,
                    l *= e,
                    c *= e,
                    h *= e
            }
        }
        e[t] = o,
            e[t + 1] = l,
            e[t + 2] = c,
            e[t + 3] = h
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
        const s = n[r],
            o = n[r + 1],
            l = n[r + 2],
            c = n[r + 3],
            h = i[a],
            u = i[a + 1],
            d = i[a + 2],
            p = i[a + 3];
        return e[t] = s * p + c * h + o * d - l * u,
            e[t + 1] = o * p + c * u + l * h - s * d,
            e[t + 2] = l * p + c * d + s * u - o * h,
            e[t + 3] = c * p - s * h - o * u - l * d,
            e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
            this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
            this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
            this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
            this._onChangeCallback()
    }
    set(e, t, n, r) {
        return this._x = e,
            this._y = t,
            this._z = n,
            this._w = r,
            this._onChangeCallback(),
            this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w)
    }
    copy(e) {
        return this._x = e.x,
            this._y = e.y,
            this._z = e.z,
            this._w = e.w,
            this._onChangeCallback(),
            this
    }
    setFromEuler(e, t) {
        if (!e || !e.isEuler) throw new Error(
            'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.'
        );
        const n = e._x,
            r = e._y,
            i = e._z,
            a = e._order,
            s = Math.cos,
            o = Math.sin,
            l = s(n / 2),
            c = s(r / 2),
            h = s(i / 2),
            u = o(n / 2),
            d = o(r / 2),
            p = o(i / 2);
        switch (a) {
            case 'XYZ':
                this._x = u * c * h + l * d * p,
                    this._y = l * d * h - u * c * p,
                    this._z = l * c * p + u * d * h,
                    this._w = l * c * h - u * d * p;
                break;
            case 'YXZ':
                this._x = u * c * h + l * d * p,
                    this._y = l * d * h - u * c * p,
                    this._z = l * c * p - u * d * h,
                    this._w = l * c * h + u * d * p;
                break;
            case 'ZXY':
                this._x = u * c * h - l * d * p,
                    this._y = l * d * h + u * c * p,
                    this._z = l * c * p + u * d * h,
                    this._w = l * c * h - u * d * p;
                break;
            case 'ZYX':
                this._x = u * c * h - l * d * p,
                    this._y = l * d * h + u * c * p,
                    this._z = l * c * p - u * d * h,
                    this._w = l * c * h + u * d * p;
                break;
            case 'YZX':
                this._x = u * c * h + l * d * p,
                    this._y = l * d * h + u * c * p,
                    this._z = l * c * p - u * d * h,
                    this._w = l * c * h - u * d * p;
                break;
            case 'XZY':
                this._x = u * c * h - l * d * p,
                    this._y = l * d * h - u * c * p,
                    this._z = l * c * p + u * d * h,
                    this._w = l * c * h + u * d * p;
                break;
            default:
                console.warn(
                    'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + a
                )
        }
        return !1 !== t &&
        this._onChangeCallback(),
            this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2,
            r = Math.sin(n);
        return this._x = e.x * r,
            this._y = e.y * r,
            this._z = e.z * r,
            this._w = Math.cos(n),
            this._onChangeCallback(),
            this
    }
    setFromRotationMatrix(e) {
        const t = e.elements,
            n = t[0],
            r = t[4],
            i = t[8],
            a = t[1],
            s = t[5],
            o = t[9],
            l = t[2],
            c = t[6],
            h = t[10],
            u = n + s + h;
        if (u > 0) {
            const e = 0.5 / Math.sqrt(u + 1);
            this._w = 0.25 / e,
                this._x = (c - o) * e,
                this._y = (i - l) * e,
                this._z = (a - r) * e
        } else if (n > s && n > h) {
            const e = 2 * Math.sqrt(1 + n - s - h);
            this._w = (c - o) / e,
                this._x = 0.25 * e,
                this._y = (r + a) / e,
                this._z = (i + l) / e
        } else if (s > h) {
            const e = 2 * Math.sqrt(1 + s - n - h);
            this._w = (i - l) / e,
                this._x = (r + a) / e,
                this._y = 0.25 * e,
                this._z = (o + c) / e
        } else {
            const e = 2 * Math.sqrt(1 + h - n - s);
            this._w = (a - r) / e,
                this._x = (i + l) / e,
                this._y = (o + c) / e,
                this._z = 0.25 * e
        }
        return this._onChangeCallback(),
            this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (
            n = 0,
                Math.abs(e.x) > Math.abs(e.z) ? (this._x = - e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = - e.z, this._z = e.y, this._w = n)
        ) : (
            this._x = e.y * t.z - e.z * t.y,
                this._y = e.z * t.x - e.x * t.z,
                this._z = e.x * t.y - e.y * t.x,
                this._w = n
        ),
            this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(clamp$1(this.dot(e), - 1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (0 === n) return this;
        const r = Math.min(1, t / n);
        return this.slerp(e, r),
            this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= - 1,
            this._y *= - 1,
            this._z *= - 1,
            this._onChangeCallback(),
            this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(
            this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        )
    }
    normalize() {
        let e = this.length();
        return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (
            e = 1 / e,
                this._x = this._x * e,
                this._y = this._y * e,
                this._z = this._z * e,
                this._w = this._w * e
        ),
            this._onChangeCallback(),
            this
    }
    multiply(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'
            ),
                this.multiplyQuaternions(e, t)
        ) : this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x,
            r = e._y,
            i = e._z,
            a = e._w,
            s = t._x,
            o = t._y,
            l = t._z,
            c = t._w;
        return this._x = n * c + a * s + r * l - i * o,
            this._y = r * c + a * o + i * s - n * l,
            this._z = i * c + a * l + n * o - r * s,
            this._w = a * c - n * s - r * o - i * l,
            this._onChangeCallback(),
            this
    }
    slerp(e, t) {
        if (0 === t) return this;
        if (1 === t) return this.copy(e);
        const n = this._x,
            r = this._y,
            i = this._z,
            a = this._w;
        let s = a * e._w + n * e._x + r * e._y + i * e._z;
        if (
            s < 0 ? (this._w = - e._w, this._x = - e._x, this._y = - e._y, this._z = - e._z, s = - s) : this.copy(e),
            s >= 1
        ) return this._w = a,
            this._x = n,
            this._y = r,
            this._z = i,
            this;
        const o = 1 - s * s;
        if (o <= Number.EPSILON) {
            const e = 1 - t;
            return this._w = e * a + t * this._w,
                this._x = e * n + t * this._x,
                this._y = e * r + t * this._y,
                this._z = e * i + t * this._z,
                this.normalize(),
                this._onChangeCallback(),
                this
        }
        const l = Math.sqrt(o),
            c = Math.atan2(l, s),
            h = Math.sin((1 - t) * c) / l,
            u = Math.sin(t * c) / l;
        return this._w = a * h + this._w * u,
            this._x = n * h + this._x * u,
            this._y = r * h + this._y * u,
            this._z = i * h + this._z * u,
            this._onChangeCallback(),
            this
    }
    slerpQuaternions(e, t, n) {
        this.copy(e).slerp(t, n)
    }
    equals(e) {
        return e._x === this._x &&
            e._y === this._y &&
            e._z === this._z &&
            e._w === this._w
    }
    fromArray(e, t = 0) {
        return this._x = e[t],
            this._y = e[t + 1],
            this._z = e[t + 2],
            this._w = e[t + 3],
            this._onChangeCallback(),
            this
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x,
            e[t + 1] = this._y,
            e[t + 2] = this._z,
            e[t + 3] = this._w,
            e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
            this._y = e.getY(t),
            this._z = e.getZ(t),
            this._w = e.getW(t),
            this
    }
    _onChange(e) {
        return this._onChangeCallback = e,
            this
    }
    _onChangeCallback() {
    }
}
Quaternion.prototype.isQuaternion = !0;
class Vector3 {
    constructor(e = 0, t = 0, n = 0) {
        this.x = e,
            this.y = t,
            this.z = n
    }
    set(e, t, n) {
        return void 0 === n &&
        (n = this.z),
            this.x = e,
            this.y = t,
            this.z = n,
            this
    }
    setScalar(e) {
        return this.x = e,
            this.y = e,
            this.z = e,
            this
    }
    setX(e) {
        return this.x = e,
            this
    }
    setY(e) {
        return this.y = e,
            this
    }
    setZ(e) {
        return this.z = e,
            this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error('index is out of range: ' + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error('index is out of range: ' + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z)
    }
    copy(e) {
        return this.x = e.x,
            this.y = e.y,
            this.z = e.z,
            this
    }
    add(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
            ),
                this.addVectors(e, t)
        ) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    }
    addScalar(e) {
        return this.x += e,
            this.y += e,
            this.z += e,
            this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this.z = e.z + t.z,
            this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
            this.y += e.y * t,
            this.z += e.z * t,
            this
    }
    sub(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
            ),
                this.subVectors(e, t)
        ) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    }
    subScalar(e) {
        return this.x -= e,
            this.y -= e,
            this.z -= e,
            this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this.z = e.z - t.z,
            this
    }
    multiply(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'
            ),
                this.multiplyVectors(e, t)
        ) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    }
    multiplyScalar(e) {
        return this.x *= e,
            this.y *= e,
            this.z *= e,
            this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
            this.y = e.y * t.y,
            this.z = e.z * t.z,
            this
    }
    applyEuler(e) {
        return e &&
        e.isEuler ||
        console.error(
            'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'
        ),
            this.applyQuaternion(_quaternion$4.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            r = this.z,
            i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6] * r,
            this.y = i[1] * t + i[4] * n + i[7] * r,
            this.z = i[2] * t + i[5] * n + i[8] * r,
            this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            r = this.z,
            i = e.elements,
            a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
        return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a,
            this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a,
            this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a,
            this
    }
    applyQuaternion(e) {
        const t = this.x,
            n = this.y,
            r = this.z,
            i = e.x,
            a = e.y,
            s = e.z,
            o = e.w,
            l = o * t + a * r - s * n,
            c = o * n + s * t - i * r,
            h = o * r + i * n - a * t,
            u = - i * t - a * n - s * r;
        return this.x = l * o + u * - i + c * - s - h * - a,
            this.y = c * o + u * - a + h * - i - l * - s,
            this.z = h * o + u * - s + l * - a - c * - i,
            this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x,
            n = this.y,
            r = this.z,
            i = e.elements;
        return this.x = i[0] * t + i[4] * n + i[8] * r,
            this.y = i[1] * t + i[5] * n + i[9] * r,
            this.z = i[2] * t + i[6] * n + i[10] * r,
            this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
            this.y /= e.y,
            this.z /= e.z,
            this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this.z = Math.min(this.z, e.z),
            this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this.z = Math.max(this.z, e.z),
            this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this.z = Math.max(e.z, Math.min(t.z, this.z)),
            this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
            this.y = Math.max(e, Math.min(t, this.y)),
            this.z = Math.max(e, Math.min(t, this.z)),
            this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
    }
    round() {
        return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
    }
    negate() {
        return this.x = - this.x,
            this.y = - this.y,
            this.z = - this.z,
            this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this.z += (e.z - this.z) * t,
            this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
            this.y = e.y + (t.y - e.y) * n,
            this.z = e.z + (t.z - e.z) * n,
            this
    }
    cross(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'
            ),
                this.crossVectors(e, t)
        ) : this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x,
            r = e.y,
            i = e.z,
            a = t.x,
            s = t.y,
            o = t.z;
        return this.x = r * o - i * s,
            this.y = i * a - n * o,
            this.z = n * s - r * a,
            this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (0 === t) return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return _vector$c.copy(this).projectOnVector(e),
            this.sub(_vector$c)
    }
    reflect(e) {
        return this.sub(_vector$c.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (0 === t) return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(clamp$1(n, - 1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y,
            r = this.z - e.z;
        return t * t + n * n + r * r
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const r = Math.sin(t) * e;
        return this.x = r * Math.sin(n),
            this.y = Math.cos(t) * e,
            this.z = r * Math.cos(n),
            this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
            this.y = n,
            this.z = e * Math.cos(t),
            this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
            this.y = t[13],
            this.z = t[14],
            this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length(),
            n = this.setFromMatrixColumn(e, 1).length(),
            r = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
            this.y = n,
            this.z = r,
            this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, 4 * t)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, 3 * t)
    }
    equals(e) {
        return e.x === this.x &&
            e.y === this.y &&
            e.z === this.z
    }
    fromArray(e, t = 0) {
        return this.x = e[t],
            this.y = e[t + 1],
            this.z = e[t + 2],
            this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x,
            e[t + 1] = this.y,
            e[t + 2] = this.z,
            e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n &&
        console.warn(
            'THREE.Vector3: offset has been removed from .fromBufferAttribute().'
        ),
            this.x = e.getX(t),
            this.y = e.getY(t),
            this.z = e.getZ(t),
            this
    }
    random() {
        return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this
    }
}
Vector3.prototype.isVector3 = !0;
const _vector$c = new Vector3,
    _quaternion$4 = new Quaternion;
class Box3 {
    constructor(e = new Vector3(1 / 0, 1 / 0, 1 / 0), t = new Vector3( - 1 / 0, - 1 / 0, - 1 / 0)) {
        this.min = e,
            this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
            this.max.copy(t),
            this
    }
    setFromArray(e) {
        let t = 1 / 0,
            n = 1 / 0,
            r = 1 / 0,
            i = - 1 / 0,
            a = - 1 / 0,
            s = - 1 / 0;
        for (let o = 0, l = e.length; o < l; o += 3) {
            const l = e[o],
                c = e[o + 1],
                h = e[o + 2];
            l < t &&
            (t = l),
            c < n &&
            (n = c),
            h < r &&
            (r = h),
            l > i &&
            (i = l),
            c > a &&
            (a = c),
            h > s &&
            (s = h)
        }
        return this.min.set(t, n, r),
            this.max.set(i, a, s),
            this
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0,
            n = 1 / 0,
            r = 1 / 0,
            i = - 1 / 0,
            a = - 1 / 0,
            s = - 1 / 0;
        for (let o = 0, l = e.count; o < l; o++) {
            const l = e.getX(o),
                c = e.getY(o),
                h = e.getZ(o);
            l < t &&
            (t = l),
            c < n &&
            (n = c),
            h < r &&
            (r = h),
            l > i &&
            (i = l),
            c > a &&
            (a = c),
            h > s &&
            (s = h)
        }
        return this.min.set(t, n, r),
            this.max.set(i, a, s),
            this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = _vector$b.copy(t).multiplyScalar(0.5);
        return this.min.copy(e).sub(n),
            this.max.copy(e).add(n),
            this
    }
    setFromObject(e) {
        return this.makeEmpty(),
            this.expandByObject(e)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
            this.max.copy(e.max),
            this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
            this.max.x = this.max.y = this.max.z = - 1 / 0,
            this
    }
    isEmpty() {
        return this.max.x < this.min.x ||
            this.max.y < this.min.y ||
            this.max.z < this.min.z
    }
    getCenter(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Box3: .getCenter() target is now required'),
                e = new Vector3
        ),
            this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5)
    }
    getSize(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Box3: .getSize() target is now required'),
                e = new Vector3
        ),
            this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
            this.max.max(e),
            this
    }
    expandByVector(e) {
        return this.min.sub(e),
            this.max.add(e),
            this
    }
    expandByScalar(e) {
        return this.min.addScalar( - e),
            this.max.addScalar(e),
            this
    }
    expandByObject(e) {
        e.updateWorldMatrix(!1, !1);
        const t = e.geometry;
        void 0 !== t &&
        (
            null === t.boundingBox &&
            t.computeBoundingBox(),
                _box$3.copy(t.boundingBox),
                _box$3.applyMatrix4(e.matrixWorld),
                this.union(_box$3)
        );
        const n = e.children;
        for (let e = 0, t = n.length; e < t; e++) this.expandByObject(n[e]);
        return this
    }
    containsPoint(e) {
        return !(
            e.x < this.min.x ||
            e.x > this.max.x ||
            e.y < this.min.y ||
            e.y > this.max.y ||
            e.z < this.min.z ||
            e.z > this.max.z
        )
    }
    containsBox(e) {
        return this.min.x <= e.min.x &&
            e.max.x <= this.max.x &&
            this.min.y <= e.min.y &&
            e.max.y <= this.max.y &&
            this.min.z <= e.min.z &&
            e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return void 0 === t &&
        (
            console.warn('THREE.Box3: .getParameter() target is now required'),
                t = new Vector3
        ),
            t.set(
                (e.x - this.min.x) / (this.max.x - this.min.x),
                (e.y - this.min.y) / (this.max.y - this.min.y),
                (e.z - this.min.z) / (this.max.z - this.min.z)
            )
    }
    intersectsBox(e) {
        return !(
            e.max.x < this.min.x ||
            e.min.x > this.max.x ||
            e.max.y < this.min.y ||
            e.min.y > this.max.y ||
            e.max.z < this.min.z ||
            e.min.z > this.max.z
        )
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, _vector$b),
        _vector$b.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t,
            n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x),
            e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y),
            e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z),
        t <= - e.constant &&
        n >= - e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty()) return !1;
        this.getCenter(_center),
            _extents.subVectors(this.max, _center),
            _v0$2.subVectors(e.a, _center),
            _v1$7.subVectors(e.b, _center),
            _v2$3.subVectors(e.c, _center),
            _f0.subVectors(_v1$7, _v0$2),
            _f1.subVectors(_v2$3, _v1$7),
            _f2.subVectors(_v0$2, _v2$3);
        let t = [
            0,
            - _f0.z,
            _f0.y,
            0,
            - _f1.z,
            _f1.y,
            0,
            - _f2.z,
            _f2.y,
            _f0.z,
            0,
            - _f0.x,
            _f1.z,
            0,
            - _f1.x,
            _f2.z,
            0,
            - _f2.x,
            - _f0.y,
            _f0.x,
            0,
            - _f1.y,
            _f1.x,
            0,
            - _f2.y,
            _f2.x,
            0
        ];
        return !!satForAxes(t, _v0$2, _v1$7, _v2$3, _extents) &&
            (
                t = [
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                ],
                !!satForAxes(t, _v0$2, _v1$7, _v2$3, _extents) &&
                (
                    _triangleNormal.crossVectors(_f0, _f1),
                        t = [
                            _triangleNormal.x,
                            _triangleNormal.y,
                            _triangleNormal.z
                        ],
                        satForAxes(t, _v0$2, _v1$7, _v2$3, _extents)
                )
            )
    }
    clampPoint(e, t) {
        return void 0 === t &&
        (
            console.warn('THREE.Box3: .clampPoint() target is now required'),
                t = new Vector3
        ),
            t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return _vector$b.copy(e).clamp(this.min, this.max).sub(e).length()
    }
    getBoundingSphere(e) {
        return void 0 === e &&
        console.error('THREE.Box3: .getBoundingSphere() target is now required'),
            this.getCenter(e.center),
            e.radius = 0.5 * this.getSize(_vector$b).length(),
            e
    }
    intersect(e) {
        return this.min.max(e.min),
            this.max.min(e.max),
        this.isEmpty() &&
        this.makeEmpty(),
            this
    }
    union(e) {
        return this.min.min(e.min),
            this.max.max(e.max),
            this
    }
    applyMatrix4(e) {
        return this.isEmpty() ||
        (
            _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
                _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
                _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
                _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
                _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
                _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
                _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
                _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
                this.setFromPoints(_points)
        ),
            this
    }
    translate(e) {
        return this.min.add(e),
            this.max.add(e),
            this
    }
    equals(e) {
        return e.min.equals(this.min) &&
            e.max.equals(this.max)
    }
}
Box3.prototype.isBox3 = !0;
const _points = [
        new Vector3,
        new Vector3,
        new Vector3,
        new Vector3,
        new Vector3,
        new Vector3,
        new Vector3,
        new Vector3
    ],
    _vector$b = new Vector3,
    _box$3 = new Box3,
    _v0$2 = new Vector3,
    _v1$7 = new Vector3,
    _v2$3 = new Vector3,
    _f0 = new Vector3,
    _f1 = new Vector3,
    _f2 = new Vector3,
    _center = new Vector3,
    _extents = new Vector3,
    _triangleNormal = new Vector3,
    _testAxis = new Vector3;
function satForAxes(e, t, n, r, i) {
    for (let a = 0, s = e.length - 3; a <= s; a += 3) {
        _testAxis.fromArray(e, a);
        const s = i.x * Math.abs(_testAxis.x) + i.y * Math.abs(_testAxis.y) + i.z * Math.abs(_testAxis.z),
            o = t.dot(_testAxis),
            l = n.dot(_testAxis),
            c = r.dot(_testAxis);
        if (Math.max( - Math.max(o, l, c), Math.min(o, l, c)) > s) return !1
    }
    return !0
}
const _box$2 = new Box3,
    _v1$6 = new Vector3,
    _toFarthestPoint = new Vector3,
    _toPoint = new Vector3;
class Sphere {
    constructor(e = new Vector3, t = - 1) {
        this.center = e,
            this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
            this.radius = t,
            this
    }
    setFromPoints(e, t) {
        const n = this.center;
        void 0 !== t ? n.copy(t) : _box$2.setFromPoints(e).getCenter(n);
        let r = 0;
        for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
        return this.radius = Math.sqrt(r),
            this
    }
    copy(e) {
        return this.center.copy(e.center),
            this.radius = e.radius,
            this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
            this.radius = - 1,
            this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return void 0 === t &&
        (
            console.warn('THREE.Sphere: .clampPoint() target is now required'),
                t = new Vector3
        ),
            t.copy(e),
        n > this.radius * this.radius &&
        (
            t.sub(this.center).normalize(),
                t.multiplyScalar(this.radius).add(this.center)
        ),
            t
    }
    getBoundingBox(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Sphere: .getBoundingBox() target is now required'),
                e = new Box3
        ),
            this.isEmpty() ? (e.makeEmpty(), e) : (
                e.set(this.center, this.center),
                    e.expandByScalar(this.radius),
                    e
            )
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
            this.radius = this.radius * e.getMaxScaleOnAxis(),
            this
    }
    translate(e) {
        return this.center.add(e),
            this
    }
    expandByPoint(e) {
        _toPoint.subVectors(e, this.center);
        const t = _toPoint.lengthSq();
        if (t > this.radius * this.radius) {
            const e = Math.sqrt(t),
                n = 0.5 * (e - this.radius);
            this.center.add(_toPoint.multiplyScalar(n / e)),
                this.radius += n
        }
        return this
    }
    union(e) {
        return _toFarthestPoint.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius),
            this.expandByPoint(_v1$6.copy(e.center).add(_toFarthestPoint)),
            this.expandByPoint(_v1$6.copy(e.center).sub(_toFarthestPoint)),
            this
    }
    equals(e) {
        return e.center.equals(this.center) &&
            e.radius === this.radius
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const _vector$a = new Vector3,
    _segCenter = new Vector3,
    _segDir = new Vector3,
    _diff = new Vector3,
    _edge1 = new Vector3,
    _edge2 = new Vector3,
    _normal$1 = new Vector3;
class Ray {
    constructor(e = new Vector3, t = new Vector3(0, 0, - 1)) {
        this.origin = e,
            this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
            this.direction.copy(t),
            this
    }
    copy(e) {
        return this.origin.copy(e.origin),
            this.direction.copy(e.direction),
            this
    }
    at(e, t) {
        return void 0 === t &&
        (
            console.warn('THREE.Ray: .at() target is now required'),
                t = new Vector3
        ),
            t.copy(this.direction).multiplyScalar(e).add(this.origin)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
            this
    }
    recast(e) {
        return this.origin.copy(this.at(e, _vector$a)),
            this
    }
    closestPointToPoint(e, t) {
        void 0 === t &&
        (
            console.warn('THREE.Ray: .closestPointToPoint() target is now required'),
                t = new Vector3
        ),
            t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = _vector$a.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (
            _vector$a.copy(this.direction).multiplyScalar(t).add(this.origin),
                _vector$a.distanceToSquared(e)
        )
    }
    distanceSqToSegment(e, t, n, r) {
        _segCenter.copy(e).add(t).multiplyScalar(0.5),
            _segDir.copy(t).sub(e).normalize(),
            _diff.copy(this.origin).sub(_segCenter);
        const i = 0.5 * e.distanceTo(t),
            a = - this.direction.dot(_segDir),
            s = _diff.dot(this.direction),
            o = - _diff.dot(_segDir),
            l = _diff.lengthSq(),
            c = Math.abs(1 - a * a);
        let h,
            u,
            d,
            p;
        if (c > 0) if (h = a * o - s, u = a * s - o, p = i * c, h >= 0) if (u >= - p) if (u <= p) {
            const e = 1 / c;
            h *= e,
                u *= e,
                d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l
        } else u = i,
            h = Math.max(0, - (a * u + s)),
            d = - h * h + u * (u + 2 * o) + l;
        else u = - i,
                h = Math.max(0, - (a * u + s)),
                d = - h * h + u * (u + 2 * o) + l;
        else u <= - p ? (
                h = Math.max(0, - ( - a * i + s)),
                    u = h > 0 ? - i : Math.min(Math.max( - i, - o), i),
                    d = - h * h + u * (u + 2 * o) + l
            ) : u <= p ? (h = 0, u = Math.min(Math.max( - i, - o), i), d = u * (u + 2 * o) + l) : (
                h = Math.max(0, - (a * i + s)),
                    u = h > 0 ? i : Math.min(Math.max( - i, - o), i),
                    d = - h * h + u * (u + 2 * o) + l
            );
        else u = a > 0 ? - i : i,
            h = Math.max(0, - (a * u + s)),
            d = - h * h + u * (u + 2 * o) + l;
        return n &&
        n.copy(this.direction).multiplyScalar(h).add(this.origin),
        r &&
        r.copy(_segDir).multiplyScalar(u).add(_segCenter),
            d
    }
    intersectSphere(e, t) {
        _vector$a.subVectors(e.center, this.origin);
        const n = _vector$a.dot(this.direction),
            r = _vector$a.dot(_vector$a) - n * n,
            i = e.radius * e.radius;
        if (r > i) return null;
        const a = Math.sqrt(i - r),
            s = n - a,
            o = n + a;
        return s < 0 &&
        o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
        const n = - (this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return null === n ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        if (0 === t) return !0;
        return e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n,
            r,
            i,
            a,
            s,
            o;
        const l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            h = 1 / this.direction.z,
            u = this.origin;
        return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l),
            c >= 0 ? (i = (e.min.y - u.y) * c, a = (e.max.y - u.y) * c) : (i = (e.max.y - u.y) * c, a = (e.min.y - u.y) * c),
            n > a ||
            i > r ? null : (
                (i > n || n != n) &&
                (n = i),
                (a < r || r != r) &&
                (r = a),
                    h >= 0 ? (s = (e.min.z - u.z) * h, o = (e.max.z - u.z) * h) : (s = (e.max.z - u.z) * h, o = (e.min.z - u.z) * h),
                    n > o ||
                    s > r ? null : (
                        (s > n || n != n) &&
                        (n = s),
                        (o < r || r != r) &&
                        (r = o),
                            r < 0 ? null : this.at(n >= 0 ? n : r, t)
                    )
            )
    }
    intersectsBox(e) {
        return null !== this.intersectBox(e, _vector$a)
    }
    intersectTriangle(e, t, n, r, i) {
        _edge1.subVectors(t, e),
            _edge2.subVectors(n, e),
            _normal$1.crossVectors(_edge1, _edge2);
        let a,
            s = this.direction.dot(_normal$1);
        if (s > 0) {
            if (r) return null;
            a = 1
        } else {
            if (!(s < 0)) return null;
            a = - 1,
                s = - s
        }
        _diff.subVectors(this.origin, e);
        const o = a * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
        if (o < 0) return null;
        const l = a * this.direction.dot(_edge1.cross(_diff));
        if (l < 0) return null;
        if (o + l > s) return null;
        const c = - a * _diff.dot(_normal$1);
        return c < 0 ? null : this.at(c / s, i)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
            this.direction.transformDirection(e),
            this
    }
    equals(e) {
        return e.origin.equals(this.origin) &&
            e.direction.equals(this.direction)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class Matrix4 {
    constructor() {
        this.elements = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ],
        arguments.length > 0 &&
        console.error(
            'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.'
        )
    }
    set(e, t, n, r, i, a, s, o, l, c, h, u, d, p, m, f) {
        const g = this.elements;
        return g[0] = e,
            g[4] = t,
            g[8] = n,
            g[12] = r,
            g[1] = i,
            g[5] = a,
            g[9] = s,
            g[13] = o,
            g[2] = l,
            g[6] = c,
            g[10] = h,
            g[14] = u,
            g[3] = d,
            g[7] = p,
            g[11] = m,
            g[15] = f,
            this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
    }
    clone() {
        return (new Matrix4).fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return t[0] = n[0],
            t[1] = n[1],
            t[2] = n[2],
            t[3] = n[3],
            t[4] = n[4],
            t[5] = n[5],
            t[6] = n[6],
            t[7] = n[7],
            t[8] = n[8],
            t[9] = n[9],
            t[10] = n[10],
            t[11] = n[11],
            t[12] = n[12],
            t[13] = n[13],
            t[14] = n[14],
            t[15] = n[15],
            this
    }
    copyPosition(e) {
        const t = this.elements,
            n = e.elements;
        return t[12] = n[12],
            t[13] = n[13],
            t[14] = n[14],
            this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
            this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0),
            t.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
            this
    }
    extractRotation(e) {
        const t = this.elements,
            n = e.elements,
            r = 1 / _v1$5.setFromMatrixColumn(e, 0).length(),
            i = 1 / _v1$5.setFromMatrixColumn(e, 1).length(),
            a = 1 / _v1$5.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * r,
            t[1] = n[1] * r,
            t[2] = n[2] * r,
            t[3] = 0,
            t[4] = n[4] * i,
            t[5] = n[5] * i,
            t[6] = n[6] * i,
            t[7] = 0,
            t[8] = n[8] * a,
            t[9] = n[9] * a,
            t[10] = n[10] * a,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            this
    }
    makeRotationFromEuler(e) {
        e &&
        e.isEuler ||
        console.error(
            'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.'
        );
        const t = this.elements,
            n = e.x,
            r = e.y,
            i = e.z,
            a = Math.cos(n),
            s = Math.sin(n),
            o = Math.cos(r),
            l = Math.sin(r),
            c = Math.cos(i),
            h = Math.sin(i);
        if ('XYZ' === e.order) {
            const e = a * c,
                n = a * h,
                r = s * c,
                i = s * h;
            t[0] = o * c,
                t[4] = - o * h,
                t[8] = l,
                t[1] = n + r * l,
                t[5] = e - i * l,
                t[9] = - s * o,
                t[2] = i - e * l,
                t[6] = r + n * l,
                t[10] = a * o
        } else if ('YXZ' === e.order) {
            const e = o * c,
                n = o * h,
                r = l * c,
                i = l * h;
            t[0] = e + i * s,
                t[4] = r * s - n,
                t[8] = a * l,
                t[1] = a * h,
                t[5] = a * c,
                t[9] = - s,
                t[2] = n * s - r,
                t[6] = i + e * s,
                t[10] = a * o
        } else if ('ZXY' === e.order) {
            const e = o * c,
                n = o * h,
                r = l * c,
                i = l * h;
            t[0] = e - i * s,
                t[4] = - a * h,
                t[8] = r + n * s,
                t[1] = n + r * s,
                t[5] = a * c,
                t[9] = i - e * s,
                t[2] = - a * l,
                t[6] = s,
                t[10] = a * o
        } else if ('ZYX' === e.order) {
            const e = a * c,
                n = a * h,
                r = s * c,
                i = s * h;
            t[0] = o * c,
                t[4] = r * l - n,
                t[8] = e * l + i,
                t[1] = o * h,
                t[5] = i * l + e,
                t[9] = n * l - r,
                t[2] = - l,
                t[6] = s * o,
                t[10] = a * o
        } else if ('YZX' === e.order) {
            const e = a * o,
                n = a * l,
                r = s * o,
                i = s * l;
            t[0] = o * c,
                t[4] = i - e * h,
                t[8] = r * h + n,
                t[1] = h,
                t[5] = a * c,
                t[9] = - s * c,
                t[2] = - l * c,
                t[6] = n * h + r,
                t[10] = e - i * h
        } else if ('XZY' === e.order) {
            const e = a * o,
                n = a * l,
                r = s * o,
                i = s * l;
            t[0] = o * c,
                t[4] = - h,
                t[8] = l * c,
                t[1] = e * h + i,
                t[5] = a * c,
                t[9] = n * h - r,
                t[2] = r * h - n,
                t[6] = s * c,
                t[10] = i * h + e
        }
        return t[3] = 0,
            t[7] = 0,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(_zero, e, _one)
    }
    lookAt(e, t, n) {
        const r = this.elements;
        return _z.subVectors(e, t),
        0 === _z.lengthSq() &&
        (_z.z = 1),
            _z.normalize(),
            _x.crossVectors(n, _z),
        0 === _x.lengthSq() &&
        (
            1 === Math.abs(n.z) ? _z.x += 0.0001 : _z.z += 0.0001,
                _z.normalize(),
                _x.crossVectors(n, _z)
        ),
            _x.normalize(),
            _y.crossVectors(_z, _x),
            r[0] = _x.x,
            r[4] = _y.x,
            r[8] = _z.x,
            r[1] = _x.y,
            r[5] = _y.y,
            r[9] = _z.y,
            r[2] = _x.z,
            r[6] = _y.z,
            r[10] = _z.z,
            this
    }
    multiply(e, t) {
        return void 0 !== t ? (
            console.warn(
                'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'
            ),
                this.multiplyMatrices(e, t)
        ) : this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            r = t.elements,
            i = this.elements,
            a = n[0],
            s = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            h = n[5],
            u = n[9],
            d = n[13],
            p = n[2],
            m = n[6],
            f = n[10],
            g = n[14],
            v = n[3],
            _ = n[7],
            x = n[11],
            y = n[15],
            b = r[0],
            M = r[4],
            w = r[8],
            S = r[12],
            T = r[1],
            E = r[5],
            L = r[9],
            A = r[13],
            R = r[2],
            C = r[6],
            P = r[10],
            I = r[14],
            N = r[3],
            D = r[7],
            B = r[11],
            V = r[15];
        return i[0] = a * b + s * T + o * R + l * N,
            i[4] = a * M + s * E + o * C + l * D,
            i[8] = a * w + s * L + o * P + l * B,
            i[12] = a * S + s * A + o * I + l * V,
            i[1] = c * b + h * T + u * R + d * N,
            i[5] = c * M + h * E + u * C + d * D,
            i[9] = c * w + h * L + u * P + d * B,
            i[13] = c * S + h * A + u * I + d * V,
            i[2] = p * b + m * T + f * R + g * N,
            i[6] = p * M + m * E + f * C + g * D,
            i[10] = p * w + m * L + f * P + g * B,
            i[14] = p * S + m * A + f * I + g * V,
            i[3] = v * b + _ * T + x * R + y * N,
            i[7] = v * M + _ * E + x * C + y * D,
            i[11] = v * w + _ * L + x * P + y * B,
            i[15] = v * S + _ * A + x * I + y * V,
            this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
            t[4] *= e,
            t[8] *= e,
            t[12] *= e,
            t[1] *= e,
            t[5] *= e,
            t[9] *= e,
            t[13] *= e,
            t[2] *= e,
            t[6] *= e,
            t[10] *= e,
            t[14] *= e,
            t[3] *= e,
            t[7] *= e,
            t[11] *= e,
            t[15] *= e,
            this
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[4],
            r = e[8],
            i = e[12],
            a = e[1],
            s = e[5],
            o = e[9],
            l = e[13],
            c = e[2],
            h = e[6],
            u = e[10],
            d = e[14];
        return e[3] * ( + i * o * h - r * l * h - i * s * u + n * l * u + r * s * d - n * o * d) + e[7] * ( + t * o * d - t * l * u + i * a * u - r * a * d + r * l * c - i * o * c) + e[11] * ( + t * l * h - t * s * d - i * a * h + n * a * d + i * s * c - n * l * c) + e[15] * ( - r * s * c - t * o * h + t * s * u + r * a * h - n * a * u + n * o * c)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
            e[1] = e[4],
            e[4] = t,
            t = e[2],
            e[2] = e[8],
            e[8] = t,
            t = e[6],
            e[6] = e[9],
            e[9] = t,
            t = e[3],
            e[3] = e[12],
            e[12] = t,
            t = e[7],
            e[7] = e[13],
            e[13] = t,
            t = e[11],
            e[11] = e[14],
            e[14] = t,
            this
    }
    setPosition(e, t, n) {
        const r = this.elements;
        return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n),
            this
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            r = e[2],
            i = e[3],
            a = e[4],
            s = e[5],
            o = e[6],
            l = e[7],
            c = e[8],
            h = e[9],
            u = e[10],
            d = e[11],
            p = e[12],
            m = e[13],
            f = e[14],
            g = e[15],
            v = h * f * l - m * u * l + m * o * d - s * f * d - h * o * g + s * u * g,
            _ = p * u * l - c * f * l - p * o * d + a * f * d + c * o * g - a * u * g,
            x = c * m * l - p * h * l + p * s * d - a * m * d - c * s * g + a * h * g,
            y = p * h * o - c * m * o - p * s * u + a * m * u + c * s * f - a * h * f,
            b = t * v + n * _ + r * x + i * y;
        if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const M = 1 / b;
        return e[0] = v * M,
            e[1] = (m * u * i - h * f * i - m * r * d + n * f * d + h * r * g - n * u * g) * M,
            e[2] = (s * f * i - m * o * i + m * r * l - n * f * l - s * r * g + n * o * g) * M,
            e[3] = (h * o * i - s * u * i - h * r * l + n * u * l + s * r * d - n * o * d) * M,
            e[4] = _ * M,
            e[5] = (c * f * i - p * u * i + p * r * d - t * f * d - c * r * g + t * u * g) * M,
            e[6] = (p * o * i - a * f * i - p * r * l + t * f * l + a * r * g - t * o * g) * M,
            e[7] = (a * u * i - c * o * i + c * r * l - t * u * l - a * r * d + t * o * d) * M,
            e[8] = x * M,
            e[9] = (p * h * i - c * m * i - p * n * d + t * m * d + c * n * g - t * h * g) * M,
            e[10] = (a * m * i - p * s * i + p * n * l - t * m * l - a * n * g + t * s * g) * M,
            e[11] = (c * s * i - a * h * i - c * n * l + t * h * l + a * n * d - t * s * d) * M,
            e[12] = y * M,
            e[13] = (c * m * r - p * h * r + p * n * u - t * m * u - c * n * f + t * h * f) * M,
            e[14] = (p * s * r - a * m * r - p * n * o + t * m * o + a * n * f - t * s * f) * M,
            e[15] = (a * h * r - c * s * r + c * n * o - t * h * o - a * n * u + t * s * u) * M,
            this
    }
    scale(e) {
        const t = this.elements,
            n = e.x,
            r = e.y,
            i = e.z;
        return t[0] *= n,
            t[4] *= r,
            t[8] *= i,
            t[1] *= n,
            t[5] *= r,
            t[9] *= i,
            t[2] *= n,
            t[6] *= r,
            t[10] *= i,
            t[3] *= n,
            t[7] *= r,
            t[11] *= i,
            this
    }
    getMaxScaleOnAxis() {
        const e = this.elements,
            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, r))
    }
    makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
            this
    }
    makeRotationX(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, - n, 0, 0, n, t, 0, 0, 0, 0, 1),
            this
    }
    makeRotationY(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, - n, 0, t, 0, 0, 0, 0, 1),
            this
    }
    makeRotationZ(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, - n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t),
            r = Math.sin(t),
            i = 1 - n,
            a = e.x,
            s = e.y,
            o = e.z,
            l = i * a,
            c = i * s;
        return this.set(
            l * a + n,
            l * s - r * o,
            l * o + r * s,
            0,
            l * s + r * o,
            c * s + n,
            c * o - r * a,
            0,
            l * o - r * s,
            c * o + r * a,
            i * o * o + n,
            0,
            0,
            0,
            0,
            1
        ),
            this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
            this
    }
    makeShear(e, t, n) {
        return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1),
            this
    }
    compose(e, t, n) {
        const r = this.elements,
            i = t._x,
            a = t._y,
            s = t._z,
            o = t._w,
            l = i + i,
            c = a + a,
            h = s + s,
            u = i * l,
            d = i * c,
            p = i * h,
            m = a * c,
            f = a * h,
            g = s * h,
            v = o * l,
            _ = o * c,
            x = o * h,
            y = n.x,
            b = n.y,
            M = n.z;
        return r[0] = (1 - (m + g)) * y,
            r[1] = (d + x) * y,
            r[2] = (p - _) * y,
            r[3] = 0,
            r[4] = (d - x) * b,
            r[5] = (1 - (u + g)) * b,
            r[6] = (f + v) * b,
            r[7] = 0,
            r[8] = (p + _) * M,
            r[9] = (f - v) * M,
            r[10] = (1 - (u + m)) * M,
            r[11] = 0,
            r[12] = e.x,
            r[13] = e.y,
            r[14] = e.z,
            r[15] = 1,
            this
    }
    decompose(e, t, n) {
        const r = this.elements;
        let i = _v1$5.set(r[0], r[1], r[2]).length();
        const a = _v1$5.set(r[4], r[5], r[6]).length(),
            s = _v1$5.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 &&
        (i = - i),
            e.x = r[12],
            e.y = r[13],
            e.z = r[14],
            _m1$2.copy(this);
        const o = 1 / i,
            l = 1 / a,
            c = 1 / s;
        return _m1$2.elements[0] *= o,
            _m1$2.elements[1] *= o,
            _m1$2.elements[2] *= o,
            _m1$2.elements[4] *= l,
            _m1$2.elements[5] *= l,
            _m1$2.elements[6] *= l,
            _m1$2.elements[8] *= c,
            _m1$2.elements[9] *= c,
            _m1$2.elements[10] *= c,
            t.setFromRotationMatrix(_m1$2),
            n.x = i,
            n.y = a,
            n.z = s,
            this
    }
    makePerspective(e, t, n, r, i, a) {
        void 0 === a &&
        console.warn(
            'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.'
        );
        const s = this.elements,
            o = 2 * i / (t - e),
            l = 2 * i / (n - r),
            c = (t + e) / (t - e),
            h = (n + r) / (n - r),
            u = - (a + i) / (a - i),
            d = - 2 * a * i / (a - i);
        return s[0] = o,
            s[4] = 0,
            s[8] = c,
            s[12] = 0,
            s[1] = 0,
            s[5] = l,
            s[9] = h,
            s[13] = 0,
            s[2] = 0,
            s[6] = 0,
            s[10] = u,
            s[14] = d,
            s[3] = 0,
            s[7] = 0,
            s[11] = - 1,
            s[15] = 0,
            this
    }
    makeOrthographic(e, t, n, r, i, a) {
        const s = this.elements,
            o = 1 / (t - e),
            l = 1 / (n - r),
            c = 1 / (a - i),
            h = (t + e) * o,
            u = (n + r) * l,
            d = (a + i) * c;
        return s[0] = 2 * o,
            s[4] = 0,
            s[8] = 0,
            s[12] = - h,
            s[1] = 0,
            s[5] = 2 * l,
            s[9] = 0,
            s[13] = - u,
            s[2] = 0,
            s[6] = 0,
            s[10] = - 2 * c,
            s[14] = - d,
            s[3] = 0,
            s[7] = 0,
            s[11] = 0,
            s[15] = 1,
            this
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
        return !0
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return e[t] = n[0],
            e[t + 1] = n[1],
            e[t + 2] = n[2],
            e[t + 3] = n[3],
            e[t + 4] = n[4],
            e[t + 5] = n[5],
            e[t + 6] = n[6],
            e[t + 7] = n[7],
            e[t + 8] = n[8],
            e[t + 9] = n[9],
            e[t + 10] = n[10],
            e[t + 11] = n[11],
            e[t + 12] = n[12],
            e[t + 13] = n[13],
            e[t + 14] = n[14],
            e[t + 15] = n[15],
            e
    }
}
Matrix4.prototype.isMatrix4 = !0;
const _v1$5 = new Vector3,
    _m1$2 = new Matrix4,
    _zero = new Vector3(0, 0, 0),
    _one = new Vector3(1, 1, 1),
    _x = new Vector3,
    _y = new Vector3,
    _z = new Vector3,
    _matrix$1 = new Matrix4,
    _quaternion$3 = new Quaternion;
class Euler {
    constructor(e = 0, t = 0, n = 0, r = Euler.DefaultOrder) {
        this._x = e,
            this._y = t,
            this._z = n,
            this._order = r
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
            this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
            this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
            this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
            this._onChangeCallback()
    }
    set(e, t, n, r) {
        return this._x = e,
            this._y = t,
            this._z = n,
            this._order = r ||
                this._order,
            this._onChangeCallback(),
            this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order)
    }
    copy(e) {
        return this._x = e._x,
            this._y = e._y,
            this._z = e._z,
            this._order = e._order,
            this._onChangeCallback(),
            this
    }
    setFromRotationMatrix(e, t, n) {
        const r = e.elements,
            i = r[0],
            a = r[4],
            s = r[8],
            o = r[1],
            l = r[5],
            c = r[9],
            h = r[2],
            u = r[6],
            d = r[10];
        switch (t = t || this._order) {
            case 'XYZ':
                this._y = Math.asin(clamp$1(s, - 1, 1)),
                    Math.abs(s) < 0.9999999 ? (this._x = Math.atan2( - c, d), this._z = Math.atan2( - a, i)) : (this._x = Math.atan2(u, l), this._z = 0);
                break;
            case 'YXZ':
                this._x = Math.asin( - clamp$1(c, - 1, 1)),
                    Math.abs(c) < 0.9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2( - h, i), this._z = 0);
                break;
            case 'ZXY':
                this._x = Math.asin(clamp$1(u, - 1, 1)),
                    Math.abs(u) < 0.9999999 ? (this._y = Math.atan2( - h, d), this._z = Math.atan2( - a, l)) : (this._y = 0, this._z = Math.atan2(o, i));
                break;
            case 'ZYX':
                this._y = Math.asin( - clamp$1(h, - 1, 1)),
                    Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, i)) : (this._x = 0, this._z = Math.atan2( - a, l));
                break;
            case 'YZX':
                this._z = Math.asin(clamp$1(o, - 1, 1)),
                    Math.abs(o) < 0.9999999 ? (this._x = Math.atan2( - c, l), this._y = Math.atan2( - h, i)) : (this._x = 0, this._y = Math.atan2(s, d));
                break;
            case 'XZY':
                this._z = Math.asin( - clamp$1(a, - 1, 1)),
                    Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(s, i)) : (this._x = Math.atan2( - c, d), this._y = 0);
                break;
            default:
                console.warn(
                    'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + t
                )
        }
        return this._order = t,
        !1 !== n &&
        this._onChangeCallback(),
            this
    }
    setFromQuaternion(e, t, n) {
        return _matrix$1.makeRotationFromQuaternion(e),
            this.setFromRotationMatrix(_matrix$1, t, n)
    }
    setFromVector3(e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
    }
    reorder(e) {
        return _quaternion$3.setFromEuler(this),
            this.setFromQuaternion(_quaternion$3, e)
    }
    equals(e) {
        return e._x === this._x &&
            e._y === this._y &&
            e._z === this._z &&
            e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
            this._y = e[1],
            this._z = e[2],
        void 0 !== e[3] &&
        (this._order = e[3]),
            this._onChangeCallback(),
            this
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x,
            e[t + 1] = this._y,
            e[t + 2] = this._z,
            e[t + 3] = this._order,
            e
    }
    toVector3(e) {
        return e ? e.set(this._x, this._y, this._z) : new Vector3(this._x, this._y, this._z)
    }
    _onChange(e) {
        return this._onChangeCallback = e,
            this
    }
    _onChangeCallback() {
    }
}
Euler.prototype.isEuler = !0,
    Euler.DefaultOrder = 'XYZ',
    Euler.RotationOrders = [
        'XYZ',
        'YZX',
        'ZXY',
        'XZY',
        'YXZ',
        'ZYX'
    ];
class Layers {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = 1 << e | 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = - 1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return 0 != (this.mask & e.mask)
    }
}
let _object3DId = 0;
const _v1$4 = new Vector3,
    _q1 = new Quaternion,
    _m1$1 = new Matrix4,
    _target = new Vector3,
    _position$3 = new Vector3,
    _scale$2 = new Vector3,
    _quaternion$2 = new Quaternion,
    _xAxis = new Vector3(1, 0, 0),
    _yAxis = new Vector3(0, 1, 0),
    _zAxis = new Vector3(0, 0, 1),
    _addedEvent = {
        type: 'added'
    },
    _removedEvent = {
        type: 'removed'
    };
class Object3D extends EventDispatcher {
    constructor() {
        super (),
            Object.defineProperty(this, 'id', {
                value: _object3DId++
            }),
            this.uuid = generateUUID(),
            this.name = '',
            this.type = 'Object3D',
            this.parent = null,
            this.children = [],
            this.up = Object3D.DefaultUp.clone();
        const e = new Vector3,
            t = new Euler,
            n = new Quaternion,
            r = new Vector3(1, 1, 1);
        t._onChange((function () {
            n.setFromEuler(t, !1)
        })),
            n._onChange((function () {
                t.setFromQuaternion(n, void 0, !1)
            })),
            Object.defineProperties(
                this,
                {
                    position: {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    },
                    rotation: {
                        configurable: !0,
                        enumerable: !0,
                        value: t
                    },
                    quaternion: {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    },
                    scale: {
                        configurable: !0,
                        enumerable: !0,
                        value: r
                    },
                    modelViewMatrix: {
                        value: new Matrix4
                    },
                    normalMatrix: {
                        value: new Matrix3
                    }
                }
            ),
            this.matrix = new Matrix4,
            this.matrixWorld = new Matrix4,
            this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate,
            this.matrixWorldNeedsUpdate = !1,
            this.layers = new Layers,
            this.visible = !0,
            this.castShadow = !1,
            this.receiveShadow = !1,
            this.frustumCulled = !0,
            this.renderOrder = 0,
            this.animations = [],
            this.userData = {}
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(e) {
        this.matrixAutoUpdate &&
        this.updateMatrix(),
            this.matrix.premultiply(e),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
            this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return _q1.setFromAxisAngle(e, t),
            this.quaternion.multiply(_q1),
            this
    }
    rotateOnWorldAxis(e, t) {
        return _q1.setFromAxisAngle(e, t),
            this.quaternion.premultiply(_q1),
            this
    }
    rotateX(e) {
        return this.rotateOnAxis(_xAxis, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(_yAxis, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(_zAxis, e)
    }
    translateOnAxis(e, t) {
        return _v1$4.copy(e).applyQuaternion(this.quaternion),
            this.position.add(_v1$4.multiplyScalar(t)),
            this
    }
    translateX(e) {
        return this.translateOnAxis(_xAxis, e)
    }
    translateY(e) {
        return this.translateOnAxis(_yAxis, e)
    }
    translateZ(e) {
        return this.translateOnAxis(_zAxis, e)
    }
    localToWorld(e) {
        return e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? _target.copy(e) : _target.set(e, t, n);
        const r = this.parent;
        this.updateWorldMatrix(!0, !1),
            _position$3.setFromMatrixPosition(this.matrixWorld),
            this.isCamera ||
            this.isLight ? _m1$1.lookAt(_position$3, _target, this.up) : _m1$1.lookAt(_target, _position$3, this.up),
            this.quaternion.setFromRotationMatrix(_m1$1),
        r &&
        (
            _m1$1.extractRotation(r.matrixWorld),
                _q1.setFromRotationMatrix(_m1$1),
                this.quaternion.premultiply(_q1.invert())
        )
    }
    add(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
            return this
        }
        return e === this ? (
            console.error(
                'THREE.Object3D.add: object can\'t be added as a child of itself.',
                e
            ),
                this
        ) : (
            e &&
            e.isObject3D ? (
                null !== e.parent &&
                e.parent.remove(e),
                    e.parent = this,
                    this.children.push(e),
                    e.dispatchEvent(_addedEvent)
            ) : console.error(
                'THREE.Object3D.add: object not an instance of THREE.Object3D.',
                e
            ),
                this
        )
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
            return this
        }
        const t = this.children.indexOf(e);
        return - 1 !== t &&
        (
            e.parent = null,
                this.children.splice(t, 1),
                e.dispatchEvent(_removedEvent)
        ),
            this
    }
    clear() {
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            t.parent = null,
                t.dispatchEvent(_removedEvent)
        }
        return this.children.length = 0,
            this
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
            _m1$1.copy(this.matrixWorld).invert(),
        null !== e.parent &&
        (
            e.parent.updateWorldMatrix(!0, !1),
                _m1$1.multiply(e.parent.matrixWorld)
        ),
            e.applyMatrix4(_m1$1),
            this.add(e),
            e.updateWorldMatrix(!1, !0),
            this
    }
    getObjectById(e) {
        return this.getObjectByProperty('id', e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty('name', e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t) return this;
        for (let n = 0, r = this.children.length; n < r; n++) {
            const r = this.children[n].getObjectByProperty(e, t);
            if (void 0 !== r) return r
        }
    }
    getWorldPosition(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Object3D: .getWorldPosition() target is now required'),
                e = new Vector3
        ),
            this.updateWorldMatrix(!0, !1),
            e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return void 0 === e &&
        (
            console.warn(
                'THREE.Object3D: .getWorldQuaternion() target is now required'
            ),
                e = new Quaternion
        ),
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(_position$3, e, _scale$2),
            e
    }
    getWorldScale(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Object3D: .getWorldScale() target is now required'),
                e = new Vector3
        ),
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(_position$3, _quaternion$2, e),
            e
    }
    getWorldDirection(e) {
        void 0 === e &&
        (
            console.warn(
                'THREE.Object3D: .getWorldDirection() target is now required'
            ),
                e = new Vector3
        ),
            this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {
    }
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e)
    }
    traverseVisible(e) {
        if (!1 === this.visible) return;
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        null !== t &&
        (e(t), t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate &&
        this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
        (
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                this.matrixWorldNeedsUpdate = !1,
                e = !0
        );
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (
            !0 === e &&
            null !== n &&
            n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate &&
            this.updateMatrix(),
                null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            !0 === t
        ) {
            const e = this.children;
            for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        const t = void 0 === e ||
                'string' == typeof e,
            n = {};
        t &&
        (
            e = {
                geometries: {
                },
                materials: {
                },
                textures: {
                },
                images: {
                },
                shapes: {
                },
                skeletons: {
                },
                animations: {
                }
            },
                n.metadata = {
                    version: 4.5,
                    type: 'Object',
                    generator: 'Object3D.toJSON'
                }
        );
        const r = {};
        function i(t, n) {
            return void 0 === t[n.uuid] &&
            (t[n.uuid] = n.toJSON(e)),
                n.uuid
        }
        if (
            r.uuid = this.uuid,
                r.type = this.type,
            '' !== this.name &&
            (r.name = this.name),
            !0 === this.castShadow &&
            (r.castShadow = !0),
            !0 === this.receiveShadow &&
            (r.receiveShadow = !0),
            !1 === this.visible &&
            (r.visible = !1),
            !1 === this.frustumCulled &&
            (r.frustumCulled = !1),
            0 !== this.renderOrder &&
            (r.renderOrder = this.renderOrder),
            '{}' !== JSON.stringify(this.userData) &&
            (r.userData = this.userData),
                r.layers = this.layers.mask,
                r.matrix = this.matrix.toArray(),
            !1 === this.matrixAutoUpdate &&
            (r.matrixAutoUpdate = !1),
            this.isInstancedMesh &&
            (
                r.type = 'InstancedMesh',
                    r.count = this.count,
                    r.instanceMatrix = this.instanceMatrix.toJSON(),
                null !== this.instanceColor &&
                (r.instanceColor = this.instanceColor.toJSON())
            ),
            this.isMesh ||
            this.isLine ||
            this.isPoints
        ) {
            r.geometry = i(e.geometries, this.geometry);
            const t = this.geometry.parameters;
            if (void 0 !== t && void 0 !== t.shapes) {
                const n = t.shapes;
                if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
                    const r = n[t];
                    i(e.shapes, r)
                } else i(e.shapes, n)
            }
        }
        if (
            this.isSkinnedMesh &&
            (
                r.bindMode = this.bindMode,
                    r.bindMatrix = this.bindMatrix.toArray(),
                void 0 !== this.skeleton &&
                (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)
            ),
            void 0 !== this.material
        ) if (Array.isArray(this.material)) {
            const t = [];
            for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
            r.material = t
        } else r.material = i(e.materials, this.material);
        if (this.children.length > 0) {
            r.children = [];
            for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for (let t = 0; t < this.animations.length; t++) {
                const n = this.animations[t];
                r.animations.push(i(e.animations, n))
            }
        }
        if (t) {
            const t = a(e.geometries),
                r = a(e.materials),
                i = a(e.textures),
                s = a(e.images),
                o = a(e.shapes),
                l = a(e.skeletons),
                c = a(e.animations);
            t.length > 0 &&
            (n.geometries = t),
            r.length > 0 &&
            (n.materials = r),
            i.length > 0 &&
            (n.textures = i),
            s.length > 0 &&
            (n.images = s),
            o.length > 0 &&
            (n.shapes = o),
            l.length > 0 &&
            (n.skeletons = l),
            c.length > 0 &&
            (n.animations = c)
        }
        return n.object = r,
            n;
        function a(e) {
            const t = [];
            for (const n in e) {
                const r = e[n];
                delete r.metadata,
                    t.push(r)
            }
            return t
        }
    }
    clone(e) {
        return (new this.constructor).copy(this, e)
    }
    copy(e, t = !0) {
        if (
            this.name = e.name,
                this.up.copy(e.up),
                this.position.copy(e.position),
                this.rotation.order = e.rotation.order,
                this.quaternion.copy(e.quaternion),
                this.scale.copy(e.scale),
                this.matrix.copy(e.matrix),
                this.matrixWorld.copy(e.matrixWorld),
                this.matrixAutoUpdate = e.matrixAutoUpdate,
                this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
                this.layers.mask = e.layers.mask,
                this.visible = e.visible,
                this.castShadow = e.castShadow,
                this.receiveShadow = e.receiveShadow,
                this.frustumCulled = e.frustumCulled,
                this.renderOrder = e.renderOrder,
                this.userData = JSON.parse(JSON.stringify(e.userData)),
            !0 === t
        ) for (let t = 0; t < e.children.length; t++) {
            const n = e.children[t];
            this.add(n.clone())
        }
        return this
    }
}
Object3D.DefaultUp = new Vector3(0, 1, 0),
    Object3D.DefaultMatrixAutoUpdate = !0,
    Object3D.prototype.isObject3D = !0;
const _vector1 = new Vector3,
    _vector2$1 = new Vector3,
    _normalMatrix = new Matrix3;
class Plane {
    constructor(e = new Vector3(1, 0, 0), t = 0) {
        this.normal = e,
            this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
            this.constant = t,
            this
    }
    setComponents(e, t, n, r) {
        return this.normal.set(e, t, n),
            this.constant = r,
            this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
            this.constant = - t.dot(this.normal),
            this
    }
    setFromCoplanarPoints(e, t, n) {
        const r = _vector1.subVectors(n, t).cross(_vector2$1.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, e),
            this
    }
    copy(e) {
        return this.normal.copy(e.normal),
            this.constant = e.constant,
            this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
            this.constant *= e,
            this
    }
    negate() {
        return this.constant *= - 1,
            this.normal.negate(),
            this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return void 0 === t &&
        (
            console.warn('THREE.Plane: .projectPoint() target is now required'),
                t = new Vector3
        ),
            t.copy(this.normal).multiplyScalar( - this.distanceToPoint(e)).add(e)
    }
    intersectLine(e, t) {
        void 0 === t &&
        (
            console.warn('THREE.Plane: .intersectLine() target is now required'),
                t = new Vector3
        );
        const n = e.delta(_vector1),
            r = this.normal.dot(n);
        if (0 === r) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
        const i = - (e.start.dot(this.normal) + this.constant) / r;
        return i < 0 ||
        i > 1 ? null : t.copy(n).multiplyScalar(i).add(e.start)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start),
            n = this.distanceToPoint(e.end);
        return t < 0 &&
            n > 0 ||
            n < 0 &&
            t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Plane: .coplanarPoint() target is now required'),
                e = new Vector3
        ),
            e.copy(this.normal).multiplyScalar( - this.constant)
    }
    applyMatrix4(e, t) {
        const n = t ||
                _normalMatrix.getNormalMatrix(e),
            r = this.coplanarPoint(_vector1).applyMatrix4(e),
            i = this.normal.applyMatrix3(n).normalize();
        return this.constant = - r.dot(i),
            this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
            this
    }
    equals(e) {
        return e.normal.equals(this.normal) &&
            e.constant === this.constant
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
Plane.prototype.isPlane = !0;
const _v0$1 = new Vector3,
    _v1$3 = new Vector3,
    _v2$2 = new Vector3,
    _v3$1 = new Vector3,
    _vab = new Vector3,
    _vac = new Vector3,
    _vbc = new Vector3,
    _vap = new Vector3,
    _vbp = new Vector3,
    _vcp = new Vector3;
class Triangle {
    constructor(e = new Vector3, t = new Vector3, n = new Vector3) {
        this.a = e,
            this.b = t,
            this.c = n
    }
    static getNormal(e, t, n, r) {
        void 0 === r &&
        (
            console.warn('THREE.Triangle: .getNormal() target is now required'),
                r = new Vector3
        ),
            r.subVectors(n, t),
            _v0$1.subVectors(e, t),
            r.cross(_v0$1);
        const i = r.lengthSq();
        return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, r, i) {
        _v0$1.subVectors(r, t),
            _v1$3.subVectors(n, t),
            _v2$2.subVectors(e, t);
        const a = _v0$1.dot(_v0$1),
            s = _v0$1.dot(_v1$3),
            o = _v0$1.dot(_v2$2),
            l = _v1$3.dot(_v1$3),
            c = _v1$3.dot(_v2$2),
            h = a * l - s * s;
        if (
            void 0 === i &&
            (
                console.warn('THREE.Triangle: .getBarycoord() target is now required'),
                    i = new Vector3
            ),
            0 === h
        ) return i.set( - 2, - 1, - 1);
        const u = 1 / h,
            d = (l * o - s * c) * u,
            p = (a * c - s * o) * u;
        return i.set(1 - d - p, p, d)
    }
    static containsPoint(e, t, n, r) {
        return this.getBarycoord(e, t, n, r, _v3$1),
        _v3$1.x >= 0 &&
        _v3$1.y >= 0 &&
        _v3$1.x + _v3$1.y <= 1
    }
    static getUV(e, t, n, r, i, a, s, o) {
        return this.getBarycoord(e, t, n, r, _v3$1),
            o.set(0, 0),
            o.addScaledVector(i, _v3$1.x),
            o.addScaledVector(a, _v3$1.y),
            o.addScaledVector(s, _v3$1.z),
            o
    }
    static isFrontFacing(e, t, n, r) {
        return _v0$1.subVectors(n, t),
            _v1$3.subVectors(e, t),
        _v0$1.cross(_v1$3).dot(r) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
            this.b.copy(t),
            this.c.copy(n),
            this
    }
    setFromPointsAndIndices(e, t, n, r) {
        return this.a.copy(e[t]),
            this.b.copy(e[n]),
            this.c.copy(e[r]),
            this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
            this.b.copy(e.b),
            this.c.copy(e.c),
            this
    }
    getArea() {
        return _v0$1.subVectors(this.c, this.b),
            _v1$3.subVectors(this.a, this.b),
        0.5 * _v0$1.cross(_v1$3).length()
    }
    getMidpoint(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Triangle: .getMidpoint() target is now required'),
                e = new Vector3
        ),
            e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return Triangle.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Triangle: .getPlane() target is now required'),
                e = new Plane
        ),
            e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return Triangle.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getUV(e, t, n, r, i) {
        return Triangle.getUV(e, this.a, this.b, this.c, t, n, r, i)
    }
    containsPoint(e) {
        return Triangle.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return Triangle.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        void 0 === t &&
        (
            console.warn(
                'THREE.Triangle: .closestPointToPoint() target is now required'
            ),
                t = new Vector3
        );
        const n = this.a,
            r = this.b,
            i = this.c;
        let a,
            s;
        _vab.subVectors(r, n),
            _vac.subVectors(i, n),
            _vap.subVectors(e, n);
        const o = _vab.dot(_vap),
            l = _vac.dot(_vap);
        if (o <= 0 && l <= 0) return t.copy(n);
        _vbp.subVectors(e, r);
        const c = _vab.dot(_vbp),
            h = _vac.dot(_vbp);
        if (c >= 0 && h <= c) return t.copy(r);
        const u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0) return a = o / (o - c),
            t.copy(n).addScaledVector(_vab, a);
        _vcp.subVectors(e, i);
        const d = _vab.dot(_vcp),
            p = _vac.dot(_vcp);
        if (p >= 0 && d <= p) return t.copy(i);
        const m = d * l - o * p;
        if (m <= 0 && l >= 0 && p <= 0) return s = l / (l - p),
            t.copy(n).addScaledVector(_vac, s);
        const f = c * p - d * h;
        if (f <= 0 && h - c >= 0 && d - p >= 0) return _vbc.subVectors(i, r),
            s = (h - c) / (h - c + (d - p)),
            t.copy(r).addScaledVector(_vbc, s);
        const g = 1 / (f + m + u);
        return a = m * g,
            s = u * g,
            t.copy(n).addScaledVector(_vab, a).addScaledVector(_vac, s)
    }
    equals(e) {
        return e.a.equals(this.a) &&
            e.b.equals(this.b) &&
            e.c.equals(this.c)
    }
}
let materialId = 0;
function Material() {
    Object.defineProperty(this, 'id', {
        value: materialId++
    }),
        this.uuid = generateUUID(),
        this.name = '',
        this.type = 'Material',
        this.fog = !0,
        this.blending = 1,
        this.side = 0,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = 204,
        this.blendDst = 205,
        this.blendEquation = 100,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = 3,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = 519,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = 7680,
        this.stencilZFail = 7680,
        this.stencilZPass = 7680,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaTest = 0,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0
}
Material.prototype = Object.assign(
    Object.create(EventDispatcher.prototype),
    {
        constructor: Material,
        isMaterial: !0,
        onBuild: function () {
        },
        onBeforeCompile: function () {
        },
        customProgramCacheKey: function () {
            return this.onBeforeCompile.toString()
        },
        setValues: function (e) {
            if (void 0 !== e) for (const t in e) {
                const n = e[t];
                if (void 0 === n) {
                    console.warn('THREE.Material: \'' + t + '\' parameter is undefined.');
                    continue
                }
                if ('shading' === t) {
                    console.warn(
                        'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.'
                    ),
                        this.flatShading = 1 === n;
                    continue
                }
                const r = this[t];
                void 0 !== r ? r &&
                r.isColor ? r.set(n) : r &&
                r.isVector3 &&
                n &&
                n.isVector3 ? r.copy(n) : this[t] = n : console.warn(
                    'THREE.' + this.type + ': \'' + t + '\' is not a property of this material.'
                )
            }
        },
        toJSON: function (e) {
            const t = void 0 === e ||
                'string' == typeof e;
            t &&
            (e = {
                textures: {
                },
                images: {
                }
            });
            const n = {
                metadata: {
                    version: 4.5,
                    type: 'Material',
                    generator: 'Material.toJSON'
                }
            };
            function r(e) {
                const t = [];
                for (const n in e) {
                    const r = e[n];
                    delete r.metadata,
                        t.push(r)
                }
                return t
            }
            if (
                n.uuid = this.uuid,
                    n.type = this.type,
                '' !== this.name &&
                (n.name = this.name),
                this.color &&
                this.color.isColor &&
                (n.color = this.color.getHex()),
                void 0 !== this.roughness &&
                (n.roughness = this.roughness),
                void 0 !== this.metalness &&
                (n.metalness = this.metalness),
                this.sheen &&
                this.sheen.isColor &&
                (n.sheen = this.sheen.getHex()),
                this.emissive &&
                this.emissive.isColor &&
                (n.emissive = this.emissive.getHex()),
                this.emissiveIntensity &&
                1 !== this.emissiveIntensity &&
                (n.emissiveIntensity = this.emissiveIntensity),
                this.specular &&
                this.specular.isColor &&
                (n.specular = this.specular.getHex()),
                void 0 !== this.shininess &&
                (n.shininess = this.shininess),
                void 0 !== this.clearcoat &&
                (n.clearcoat = this.clearcoat),
                void 0 !== this.clearcoatRoughness &&
                (n.clearcoatRoughness = this.clearcoatRoughness),
                this.clearcoatMap &&
                this.clearcoatMap.isTexture &&
                (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
                this.clearcoatRoughnessMap &&
                this.clearcoatRoughnessMap.isTexture &&
                (
                    n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid
                ),
                this.clearcoatNormalMap &&
                this.clearcoatNormalMap.isTexture &&
                (
                    n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
                        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()
                ),
                this.map &&
                this.map.isTexture &&
                (n.map = this.map.toJSON(e).uuid),
                this.matcap &&
                this.matcap.isTexture &&
                (n.matcap = this.matcap.toJSON(e).uuid),
                this.alphaMap &&
                this.alphaMap.isTexture &&
                (n.alphaMap = this.alphaMap.toJSON(e).uuid),
                this.lightMap &&
                this.lightMap.isTexture &&
                (
                    n.lightMap = this.lightMap.toJSON(e).uuid,
                        n.lightMapIntensity = this.lightMapIntensity
                ),
                this.aoMap &&
                this.aoMap.isTexture &&
                (
                    n.aoMap = this.aoMap.toJSON(e).uuid,
                        n.aoMapIntensity = this.aoMapIntensity
                ),
                this.bumpMap &&
                this.bumpMap.isTexture &&
                (
                    n.bumpMap = this.bumpMap.toJSON(e).uuid,
                        n.bumpScale = this.bumpScale
                ),
                this.normalMap &&
                this.normalMap.isTexture &&
                (
                    n.normalMap = this.normalMap.toJSON(e).uuid,
                        n.normalMapType = this.normalMapType,
                        n.normalScale = this.normalScale.toArray()
                ),
                this.displacementMap &&
                this.displacementMap.isTexture &&
                (
                    n.displacementMap = this.displacementMap.toJSON(e).uuid,
                        n.displacementScale = this.displacementScale,
                        n.displacementBias = this.displacementBias
                ),
                this.roughnessMap &&
                this.roughnessMap.isTexture &&
                (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
                this.metalnessMap &&
                this.metalnessMap.isTexture &&
                (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
                this.emissiveMap &&
                this.emissiveMap.isTexture &&
                (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
                this.specularMap &&
                this.specularMap.isTexture &&
                (n.specularMap = this.specularMap.toJSON(e).uuid),
                this.envMap &&
                this.envMap.isTexture &&
                (
                    n.envMap = this.envMap.toJSON(e).uuid,
                    void 0 !== this.combine &&
                    (n.combine = this.combine)
                ),
                void 0 !== this.envMapIntensity &&
                (n.envMapIntensity = this.envMapIntensity),
                void 0 !== this.reflectivity &&
                (n.reflectivity = this.reflectivity),
                void 0 !== this.refractionRatio &&
                (n.refractionRatio = this.refractionRatio),
                this.gradientMap &&
                this.gradientMap.isTexture &&
                (n.gradientMap = this.gradientMap.toJSON(e).uuid),
                void 0 !== this.size &&
                (n.size = this.size),
                null !== this.shadowSide &&
                (n.shadowSide = this.shadowSide),
                void 0 !== this.sizeAttenuation &&
                (n.sizeAttenuation = this.sizeAttenuation),
                1 !== this.blending &&
                (n.blending = this.blending),
                0 !== this.side &&
                (n.side = this.side),
                this.vertexColors &&
                (n.vertexColors = !0),
                this.opacity < 1 &&
                (n.opacity = this.opacity),
                !0 === this.transparent &&
                (n.transparent = this.transparent),
                    n.depthFunc = this.depthFunc,
                    n.depthTest = this.depthTest,
                    n.depthWrite = this.depthWrite,
                    n.colorWrite = this.colorWrite,
                    n.stencilWrite = this.stencilWrite,
                    n.stencilWriteMask = this.stencilWriteMask,
                    n.stencilFunc = this.stencilFunc,
                    n.stencilRef = this.stencilRef,
                    n.stencilFuncMask = this.stencilFuncMask,
                    n.stencilFail = this.stencilFail,
                    n.stencilZFail = this.stencilZFail,
                    n.stencilZPass = this.stencilZPass,
                this.rotation &&
                0 !== this.rotation &&
                (n.rotation = this.rotation),
                !0 === this.polygonOffset &&
                (n.polygonOffset = !0),
                0 !== this.polygonOffsetFactor &&
                (n.polygonOffsetFactor = this.polygonOffsetFactor),
                0 !== this.polygonOffsetUnits &&
                (n.polygonOffsetUnits = this.polygonOffsetUnits),
                this.linewidth &&
                1 !== this.linewidth &&
                (n.linewidth = this.linewidth),
                void 0 !== this.dashSize &&
                (n.dashSize = this.dashSize),
                void 0 !== this.gapSize &&
                (n.gapSize = this.gapSize),
                void 0 !== this.scale &&
                (n.scale = this.scale),
                !0 === this.dithering &&
                (n.dithering = !0),
                this.alphaTest > 0 &&
                (n.alphaTest = this.alphaTest),
                !0 === this.alphaToCoverage &&
                (n.alphaToCoverage = this.alphaToCoverage),
                !0 === this.premultipliedAlpha &&
                (n.premultipliedAlpha = this.premultipliedAlpha),
                !0 === this.wireframe &&
                (n.wireframe = this.wireframe),
                this.wireframeLinewidth > 1 &&
                (n.wireframeLinewidth = this.wireframeLinewidth),
                'round' !== this.wireframeLinecap &&
                (n.wireframeLinecap = this.wireframeLinecap),
                'round' !== this.wireframeLinejoin &&
                (n.wireframeLinejoin = this.wireframeLinejoin),
                !0 === this.morphTargets &&
                (n.morphTargets = !0),
                !0 === this.morphNormals &&
                (n.morphNormals = !0),
                !0 === this.skinning &&
                (n.skinning = !0),
                !0 === this.flatShading &&
                (n.flatShading = this.flatShading),
                !1 === this.visible &&
                (n.visible = !1),
                !1 === this.toneMapped &&
                (n.toneMapped = !1),
                '{}' !== JSON.stringify(this.userData) &&
                (n.userData = this.userData),
                    t
            ) {
                const t = r(e.textures),
                    i = r(e.images);
                t.length > 0 &&
                (n.textures = t),
                i.length > 0 &&
                (n.images = i)
            }
            return n
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (e) {
            this.name = e.name,
                this.fog = e.fog,
                this.blending = e.blending,
                this.side = e.side,
                this.vertexColors = e.vertexColors,
                this.opacity = e.opacity,
                this.transparent = e.transparent,
                this.blendSrc = e.blendSrc,
                this.blendDst = e.blendDst,
                this.blendEquation = e.blendEquation,
                this.blendSrcAlpha = e.blendSrcAlpha,
                this.blendDstAlpha = e.blendDstAlpha,
                this.blendEquationAlpha = e.blendEquationAlpha,
                this.depthFunc = e.depthFunc,
                this.depthTest = e.depthTest,
                this.depthWrite = e.depthWrite,
                this.stencilWriteMask = e.stencilWriteMask,
                this.stencilFunc = e.stencilFunc,
                this.stencilRef = e.stencilRef,
                this.stencilFuncMask = e.stencilFuncMask,
                this.stencilFail = e.stencilFail,
                this.stencilZFail = e.stencilZFail,
                this.stencilZPass = e.stencilZPass,
                this.stencilWrite = e.stencilWrite;
            const t = e.clippingPlanes;
            let n = null;
            if (null !== t) {
                const e = t.length;
                n = new Array(e);
                for (let r = 0; r !== e; ++r) n[r] = t[r].clone()
            }
            return this.clippingPlanes = n,
                this.clipIntersection = e.clipIntersection,
                this.clipShadows = e.clipShadows,
                this.shadowSide = e.shadowSide,
                this.colorWrite = e.colorWrite,
                this.precision = e.precision,
                this.polygonOffset = e.polygonOffset,
                this.polygonOffsetFactor = e.polygonOffsetFactor,
                this.polygonOffsetUnits = e.polygonOffsetUnits,
                this.dithering = e.dithering,
                this.alphaTest = e.alphaTest,
                this.alphaToCoverage = e.alphaToCoverage,
                this.premultipliedAlpha = e.premultipliedAlpha,
                this.visible = e.visible,
                this.toneMapped = e.toneMapped,
                this.userData = JSON.parse(JSON.stringify(e.userData)),
                this
        },
        dispose: function () {
            this.dispatchEvent({
                type: 'dispose'
            })
        }
    }
),
    Object.defineProperty(
        Material.prototype,
        'needsUpdate',
        {
            set: function (e) {
                !0 === e &&
                this.version++
            }
        }
    );
const _colorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    },
    _hslA = {
        h: 0,
        s: 0,
        l: 0
    },
    _hslB = {
        h: 0,
        s: 0,
        l: 0
    };
function hue2rgb(e, t, n) {
    return n < 0 &&
    (n += 1),
    n > 1 &&
    (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
}
function SRGBToLinear(e) {
    return e < 0.04045 ? 0.0773993808 * e : Math.pow(0.9478672986 * e + 0.0521327014, 2.4)
}
function LinearToSRGB(e) {
    return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055
}
class Color {
    constructor(e, t, n) {
        return void 0 === t &&
        void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    }
    set(e) {
        return e &&
        e.isColor ? this.copy(e) : 'number' == typeof e ? this.setHex(e) : 'string' == typeof e &&
            this.setStyle(e),
            this
    }
    setScalar(e) {
        return this.r = e,
            this.g = e,
            this.b = e,
            this
    }
    setHex(e) {
        return e = Math.floor(e),
            this.r = (e >> 16 & 255) / 255,
            this.g = (e >> 8 & 255) / 255,
            this.b = (255 & e) / 255,
            this
    }
    setRGB(e, t, n) {
        return this.r = e,
            this.g = t,
            this.b = n,
            this
    }
    setHSL(e, t, n) {
        if (
            e = euclideanModulo(e, 1),
                t = clamp$1(t, 0, 1),
                n = clamp$1(n, 0, 1),
            0 === t
        ) this.r = this.g = this.b = n;
        else {
            const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
                i = 2 * n - r;
            this.r = hue2rgb(i, r, e + 1 / 3),
                this.g = hue2rgb(i, r, e),
                this.b = hue2rgb(i, r, e - 1 / 3)
        }
        return this
    }
    setStyle(e) {
        function t(t) {
            void 0 !== t &&
            parseFloat(t) < 1 &&
            console.warn('THREE.Color: Alpha component of ' + e + ' will be ignored.')
        }
        let n;
        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let e;
            const r = n[1],
                i = n[2];
            switch (r) {
                case 'rgb':
                case 'rgba':
                    if (
                        e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)
                    ) return this.r = Math.min(255, parseInt(e[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(e[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(e[3], 10)) / 255,
                        t(e[4]),
                        this;
                    if (
                        e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)
                    ) return this.r = Math.min(100, parseInt(e[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(e[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(e[3], 10)) / 100,
                        t(e[4]),
                        this;
                    break;
                case 'hsl':
                case 'hsla':
                    if (
                        e = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)
                    ) {
                        const n = parseFloat(e[1]) / 360,
                            r = parseInt(e[2], 10) / 100,
                            i = parseInt(e[3], 10) / 100;
                        return t(e[4]),
                            this.setHSL(n, r, i)
                    }
            }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const e = n[1],
                t = e.length;
            if (3 === t) return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255,
                this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255,
                this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255,
                this;
            if (6 === t) return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255,
                this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255,
                this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255,
                this
        }
        return e &&
        e.length > 0 ? this.setColorName(e) : this
    }
    setColorName(e) {
        const t = _colorKeywords[e.toLowerCase()];
        return void 0 !== t ? this.setHex(t) : console.warn('THREE.Color: Unknown color ' + e),
            this
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b)
    }
    copy(e) {
        return this.r = e.r,
            this.g = e.g,
            this.b = e.b,
            this
    }
    copyGammaToLinear(e, t = 2) {
        return this.r = Math.pow(e.r, t),
            this.g = Math.pow(e.g, t),
            this.b = Math.pow(e.b, t),
            this
    }
    copyLinearToGamma(e, t = 2) {
        const n = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, n),
            this.g = Math.pow(e.g, n),
            this.b = Math.pow(e.b, n),
            this
    }
    convertGammaToLinear(e) {
        return this.copyGammaToLinear(this, e),
            this
    }
    convertLinearToGamma(e) {
        return this.copyLinearToGamma(this, e),
            this
    }
    copySRGBToLinear(e) {
        return this.r = SRGBToLinear(e.r),
            this.g = SRGBToLinear(e.g),
            this.b = SRGBToLinear(e.b),
            this
    }
    copyLinearToSRGB(e) {
        return this.r = LinearToSRGB(e.r),
            this.g = LinearToSRGB(e.g),
            this.b = LinearToSRGB(e.b),
            this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
            this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
            this
    }
    getHex() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }
    getHexString() {
        return ('000000' + this.getHex().toString(16)).slice( - 6)
    }
    getHSL(e) {
        void 0 === e &&
        (
            console.warn('THREE.Color: .getHSL() target is now required'),
                e = {
                    h: 0,
                    s: 0,
                    l: 0
                }
        );
        const t = this.r,
            n = this.g,
            r = this.b,
            i = Math.max(t, n, r),
            a = Math.min(t, n, r);
        let s,
            o;
        const l = (a + i) / 2;
        if (a === i) s = 0,
            o = 0;
        else {
            const e = i - a;
            switch (o = l <= 0.5 ? e / (i + a) : e / (2 - i - a), i) {
                case t:
                    s = (n - r) / e + (n < r ? 6 : 0);
                    break;
                case n:
                    s = (r - t) / e + 2;
                    break;
                case r:
                    s = (t - n) / e + 4
            }
            s /= 6
        }
        return e.h = s,
            e.s = o,
            e.l = l,
            e
    }
    getStyle() {
        return 'rgb(' + (255 * this.r | 0) + ',' + (255 * this.g | 0) + ',' + (255 * this.b | 0) + ')'
    }
    offsetHSL(e, t, n) {
        return this.getHSL(_hslA),
            _hslA.h += e,
            _hslA.s += t,
            _hslA.l += n,
            this.setHSL(_hslA.h, _hslA.s, _hslA.l),
            this
    }
    add(e) {
        return this.r += e.r,
            this.g += e.g,
            this.b += e.b,
            this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
            this.g = e.g + t.g,
            this.b = e.b + t.b,
            this
    }
    addScalar(e) {
        return this.r += e,
            this.g += e,
            this.b += e,
            this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
            this.g = Math.max(0, this.g - e.g),
            this.b = Math.max(0, this.b - e.b),
            this
    }
    multiply(e) {
        return this.r *= e.r,
            this.g *= e.g,
            this.b *= e.b,
            this
    }
    multiplyScalar(e) {
        return this.r *= e,
            this.g *= e,
            this.b *= e,
            this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
            this.g += (e.g - this.g) * t,
            this.b += (e.b - this.b) * t,
            this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
            this.g = e.g + (t.g - e.g) * n,
            this.b = e.b + (t.b - e.b) * n,
            this
    }
    lerpHSL(e, t) {
        this.getHSL(_hslA),
            e.getHSL(_hslB);
        const n = lerp$1(_hslA.h, _hslB.h, t),
            r = lerp$1(_hslA.s, _hslB.s, t),
            i = lerp$1(_hslA.l, _hslB.l, t);
        return this.setHSL(n, r, i),
            this
    }
    equals(e) {
        return e.r === this.r &&
            e.g === this.g &&
            e.b === this.b
    }
    fromArray(e, t = 0) {
        return this.r = e[t],
            this.g = e[t + 1],
            this.b = e[t + 2],
            this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.r,
            e[t + 1] = this.g,
            e[t + 2] = this.b,
            e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
            this.g = e.getY(t),
            this.b = e.getZ(t),
        !0 === e.normalized &&
        (this.r /= 255, this.g /= 255, this.b /= 255),
            this
    }
    toJSON() {
        return this.getHex()
    }
}
Color.NAMES = _colorKeywords,
    Color.prototype.isColor = !0,
    Color.prototype.r = 1,
    Color.prototype.g = 1,
    Color.prototype.b = 1;
class MeshBasicMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'MeshBasicMaterial',
            this.color = new Color(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = 0.98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = 'round',
            this.wireframeLinejoin = 'round',
            this.skinning = !1,
            this.morphTargets = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.specularMap = e.specularMap,
            this.alphaMap = e.alphaMap,
            this.envMap = e.envMap,
            this.combine = e.combine,
            this.reflectivity = e.reflectivity,
            this.refractionRatio = e.refractionRatio,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this
    }
}
MeshBasicMaterial.prototype.isMeshBasicMaterial = !0;
const _vector$9 = new Vector3,
    _vector2 = new Vector2;
class BufferAttribute {
    constructor(e, t, n) {
        if (Array.isArray(e)) throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
        this.name = '',
            this.array = e,
            this.itemSize = t,
            this.count = void 0 !== e ? e.length / t : 0,
            this.normalized = !0 === n,
            this.usage = 35044,
            this.updateRange = {
                offset: 0,
                count: - 1
            },
            this.version = 0,
            this.onUploadCallback = function () {
            }
    }
    set needsUpdate(e) {
        !0 === e &&
        this.version++
    }
    setUsage(e) {
        return this.usage = e,
            this
    }
    copy(e) {
        return this.name = e.name,
            this.array = new e.array.constructor(e.array),
            this.itemSize = e.itemSize,
            this.count = e.count,
            this.normalized = e.normalized,
            this.usage = e.usage,
            this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
            n *= t.itemSize;
        for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
            this
    }
    copyColorsArray(e) {
        const t = this.array;
        let n = 0;
        for (let r = 0, i = e.length; r < i; r++) {
            let i = e[r];
            void 0 === i &&
            (
                console.warn(
                    'THREE.BufferAttribute.copyColorsArray(): color is undefined',
                    r
                ),
                    i = new Color
            ),
                t[n++] = i.r,
                t[n++] = i.g,
                t[n++] = i.b
        }
        return this
    }
    copyVector2sArray(e) {
        const t = this.array;
        let n = 0;
        for (let r = 0, i = e.length; r < i; r++) {
            let i = e[r];
            void 0 === i &&
            (
                console.warn(
                    'THREE.BufferAttribute.copyVector2sArray(): vector is undefined',
                    r
                ),
                    i = new Vector2
            ),
                t[n++] = i.x,
                t[n++] = i.y
        }
        return this
    }
    copyVector3sArray(e) {
        const t = this.array;
        let n = 0;
        for (let r = 0, i = e.length; r < i; r++) {
            let i = e[r];
            void 0 === i &&
            (
                console.warn(
                    'THREE.BufferAttribute.copyVector3sArray(): vector is undefined',
                    r
                ),
                    i = new Vector3
            ),
                t[n++] = i.x,
                t[n++] = i.y,
                t[n++] = i.z
        }
        return this
    }
    copyVector4sArray(e) {
        const t = this.array;
        let n = 0;
        for (let r = 0, i = e.length; r < i; r++) {
            let i = e[r];
            void 0 === i &&
            (
                console.warn(
                    'THREE.BufferAttribute.copyVector4sArray(): vector is undefined',
                    r
                ),
                    i = new Vector4
            ),
                t[n++] = i.x,
                t[n++] = i.y,
                t[n++] = i.z,
                t[n++] = i.w
        }
        return this
    }
    applyMatrix3(e) {
        if (2 === this.itemSize) for (let t = 0, n = this.count; t < n; t++) _vector2.fromBufferAttribute(this, t),
            _vector2.applyMatrix3(e),
            this.setXY(t, _vector2.x, _vector2.y);
        else if (3 === this.itemSize) for (let t = 0, n = this.count; t < n; t++) _vector$9.fromBufferAttribute(this, t),
            _vector$9.applyMatrix3(e),
            this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++) _vector$9.x = this.getX(t),
            _vector$9.y = this.getY(t),
            _vector$9.z = this.getZ(t),
            _vector$9.applyMatrix4(e),
            this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++) _vector$9.x = this.getX(t),
            _vector$9.y = this.getY(t),
            _vector$9.z = this.getZ(t),
            _vector$9.applyNormalMatrix(e),
            this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++) _vector$9.x = this.getX(t),
            _vector$9.y = this.getY(t),
            _vector$9.z = this.getZ(t),
            _vector$9.transformDirection(e),
            this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
        return this
    }
    set(e, t = 0) {
        return this.array.set(e, t),
            this
    }
    getX(e) {
        return this.array[e * this.itemSize]
    }
    setX(e, t) {
        return this.array[e * this.itemSize] = t,
            this
    }
    getY(e) {
        return this.array[e * this.itemSize + 1]
    }
    setY(e, t) {
        return this.array[e * this.itemSize + 1] = t,
            this
    }
    getZ(e) {
        return this.array[e * this.itemSize + 2]
    }
    setZ(e, t) {
        return this.array[e * this.itemSize + 2] = t,
            this
    }
    getW(e) {
        return this.array[e * this.itemSize + 3]
    }
    setW(e, t) {
        return this.array[e * this.itemSize + 3] = t,
            this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = n,
            this
    }
    setXYZ(e, t, n, r) {
        return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = n,
            this.array[e + 2] = r,
            this
    }
    setXYZW(e, t, n, r, i) {
        return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = n,
            this.array[e + 2] = r,
            this.array[e + 3] = i,
            this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
            this
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return '' !== this.name &&
        (e.name = this.name),
        35044 !== this.usage &&
        (e.usage = this.usage),
        0 === this.updateRange.offset &&
        - 1 === this.updateRange.count ||
        (e.updateRange = this.updateRange),
            e
    }
}
BufferAttribute.prototype.isBufferAttribute = !0;
class Uint16BufferAttribute extends BufferAttribute {
    constructor(e, t, n) {
        super (new Uint16Array(e), t, n)
    }
}
class Uint32BufferAttribute extends BufferAttribute {
    constructor(e, t, n) {
        super (new Uint32Array(e), t, n)
    }
}
class Float16BufferAttribute extends BufferAttribute {
    constructor(e, t, n) {
        super (new Uint16Array(e), t, n)
    }
}
Float16BufferAttribute.prototype.isFloat16BufferAttribute = !0;
class Float32BufferAttribute extends BufferAttribute {
    constructor(e, t, n) {
        super (new Float32Array(e), t, n)
    }
}
function arrayMax(e) {
    if (0 === e.length) return - 1 / 0;
    let t = e[0];
    for (let n = 1, r = e.length; n < r; ++n) e[n] > t &&
    (t = e[n]);
    return t
}
let _id = 0;
const _m1 = new Matrix4,
    _obj = new Object3D,
    _offset = new Vector3,
    _box$1 = new Box3,
    _boxMorphTargets = new Box3,
    _vector$8 = new Vector3;
class BufferGeometry extends EventDispatcher {
    constructor() {
        super (),
            Object.defineProperty(this, 'id', {
                value: _id++
            }),
            this.uuid = generateUUID(),
            this.name = '',
            this.type = 'BufferGeometry',
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.morphTargetsRelative = !1,
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.drawRange = {
                start: 0,
                count: 1 / 0
            },
            this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (
            arrayMax(e) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute
        ) (e, 1) : this.index = e,
            this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
            this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
            this
    }
    hasAttribute(e) {
        return void 0 !== this.attributes[e]
    }
    addGroup(e, t, n = 0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
            this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        void 0 !== t &&
        (t.applyMatrix4(e), t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (void 0 !== n) {
            const t = (new Matrix3).getNormalMatrix(e);
            n.applyNormalMatrix(t),
                n.needsUpdate = !0
        }
        const r = this.attributes.tangent;
        return void 0 !== r &&
        (r.transformDirection(e), r.needsUpdate = !0),
        null !== this.boundingBox &&
        this.computeBoundingBox(),
        null !== this.boundingSphere &&
        this.computeBoundingSphere(),
            this
    }
    rotateX(e) {
        return _m1.makeRotationX(e),
            this.applyMatrix4(_m1),
            this
    }
    rotateY(e) {
        return _m1.makeRotationY(e),
            this.applyMatrix4(_m1),
            this
    }
    rotateZ(e) {
        return _m1.makeRotationZ(e),
            this.applyMatrix4(_m1),
            this
    }
    translate(e, t, n) {
        return _m1.makeTranslation(e, t, n),
            this.applyMatrix4(_m1),
            this
    }
    scale(e, t, n) {
        return _m1.makeScale(e, t, n),
            this.applyMatrix4(_m1),
            this
    }
    lookAt(e) {
        return _obj.lookAt(e),
            _obj.updateMatrix(),
            this.applyMatrix4(_obj.matrix),
            this
    }
    center() {
        return this.computeBoundingBox(),
            this.boundingBox.getCenter(_offset).negate(),
            this.translate(_offset.x, _offset.y, _offset.z),
            this
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, r = e.length; n < r; n++) {
            const r = e[n];
            t.push(r.x, r.y, r.z || 0)
        }
        return this.setAttribute('position', new Float32BufferAttribute(t, 3)),
            this
    }
    computeBoundingBox() {
        null === this.boundingBox &&
        (this.boundingBox = new Box3);
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) return console.error(
            'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
            this
        ),
            void this.boundingBox.set(new Vector3( - 1 / 0, - 1 / 0, - 1 / 0), new Vector3(1 / 0, 1 / 0, 1 / 0));
        if (void 0 !== e) {
            if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                _box$1.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (
                        _vector$8.addVectors(this.boundingBox.min, _box$1.min),
                            this.boundingBox.expandByPoint(_vector$8),
                            _vector$8.addVectors(this.boundingBox.max, _box$1.max),
                            this.boundingBox.expandByPoint(_vector$8)
                    ) : (
                        this.boundingBox.expandByPoint(_box$1.min),
                            this.boundingBox.expandByPoint(_box$1.max)
                    )
            }
        } else this.boundingBox.makeEmpty();
        (
            isNaN(this.boundingBox.min.x) ||
            isNaN(this.boundingBox.min.y) ||
            isNaN(this.boundingBox.min.z)
        ) &&
        console.error(
            'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
            this
        )
    }
    computeBoundingSphere() {
        null === this.boundingSphere &&
        (this.boundingSphere = new Sphere);
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) return console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
            this
        ),
            void this.boundingSphere.set(new Vector3, 1 / 0);
        if (e) {
            const n = this.boundingSphere.center;
            if (_box$1.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                _boxMorphTargets.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (
                        _vector$8.addVectors(_box$1.min, _boxMorphTargets.min),
                            _box$1.expandByPoint(_vector$8),
                            _vector$8.addVectors(_box$1.max, _boxMorphTargets.max),
                            _box$1.expandByPoint(_vector$8)
                    ) : (
                        _box$1.expandByPoint(_boxMorphTargets.min),
                            _box$1.expandByPoint(_boxMorphTargets.max)
                    )
            }
            _box$1.getCenter(n);
            let r = 0;
            for (let t = 0, i = e.count; t < i; t++) _vector$8.fromBufferAttribute(e, t),
                r = Math.max(r, n.distanceToSquared(_vector$8));
            if (t) for (let i = 0, a = t.length; i < a; i++) {
                const a = t[i],
                    s = this.morphTargetsRelative;
                for (let t = 0, i = a.count; t < i; t++) _vector$8.fromBufferAttribute(a, t),
                s &&
                (_offset.fromBufferAttribute(e, t), _vector$8.add(_offset)),
                    r = Math.max(r, n.distanceToSquared(_vector$8))
            }
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) &&
            console.error(
                'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                this
            )
        }
    }
    computeFaceNormals() {
    }
    computeTangents() {
        const e = this.index,
            t = this.attributes;
        if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) return void console.error(
            'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)'
        );
        const n = e.array,
            r = t.position.array,
            i = t.normal.array,
            a = t.uv.array,
            s = r.length / 3;
        void 0 === t.tangent &&
        this.setAttribute('tangent', new BufferAttribute(new Float32Array(4 * s), 4));
        const o = t.tangent.array,
            l = [],
            c = [];
        for (let e = 0; e < s; e++) l[e] = new Vector3,
            c[e] = new Vector3;
        const h = new Vector3,
            u = new Vector3,
            d = new Vector3,
            p = new Vector2,
            m = new Vector2,
            f = new Vector2,
            g = new Vector3,
            v = new Vector3;
        function _(e, t, n) {
            h.fromArray(r, 3 * e),
                u.fromArray(r, 3 * t),
                d.fromArray(r, 3 * n),
                p.fromArray(a, 2 * e),
                m.fromArray(a, 2 * t),
                f.fromArray(a, 2 * n),
                u.sub(h),
                d.sub(h),
                m.sub(p),
                f.sub(p);
            const i = 1 / (m.x * f.y - f.x * m.y);
            isFinite(i) &&
            (
                g.copy(u).multiplyScalar(f.y).addScaledVector(d, - m.y).multiplyScalar(i),
                    v.copy(d).multiplyScalar(m.x).addScaledVector(u, - f.x).multiplyScalar(i),
                    l[e].add(g),
                    l[t].add(g),
                    l[n].add(g),
                    c[e].add(v),
                    c[t].add(v),
                    c[n].add(v)
            )
        }
        let x = this.groups;
        0 === x.length &&
        (x = [
            {
                start: 0,
                count: n.length
            }
        ]);
        for (let e = 0, t = x.length; e < t; ++e) {
            const t = x[e],
                r = t.start;
            for (let e = r, i = r + t.count; e < i; e += 3) _(n[e + 0], n[e + 1], n[e + 2])
        }
        const y = new Vector3,
            b = new Vector3,
            M = new Vector3,
            w = new Vector3;
        function S(e) {
            M.fromArray(i, 3 * e),
                w.copy(M);
            const t = l[e];
            y.copy(t),
                y.sub(M.multiplyScalar(M.dot(t))).normalize(),
                b.crossVectors(w, t);
            const n = b.dot(c[e]) < 0 ? - 1 : 1;
            o[4 * e] = y.x,
                o[4 * e + 1] = y.y,
                o[4 * e + 2] = y.z,
                o[4 * e + 3] = n
        }
        for (let e = 0, t = x.length; e < t; ++e) {
            const t = x[e],
                r = t.start;
            for (let e = r, i = r + t.count; e < i; e += 3) S(n[e + 0]),
                S(n[e + 1]),
                S(n[e + 2])
        }
    }
    computeVertexNormals() {
        const e = this.index,
            t = this.getAttribute('position');
        if (void 0 !== t) {
            let n = this.getAttribute('normal');
            if (void 0 === n) n = new BufferAttribute(new Float32Array(3 * t.count), 3),
                this.setAttribute('normal', n);
            else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
            const r = new Vector3,
                i = new Vector3,
                a = new Vector3,
                s = new Vector3,
                o = new Vector3,
                l = new Vector3,
                c = new Vector3,
                h = new Vector3;
            if (e) for (let u = 0, d = e.count; u < d; u += 3) {
                const d = e.getX(u + 0),
                    p = e.getX(u + 1),
                    m = e.getX(u + 2);
                r.fromBufferAttribute(t, d),
                    i.fromBufferAttribute(t, p),
                    a.fromBufferAttribute(t, m),
                    c.subVectors(a, i),
                    h.subVectors(r, i),
                    c.cross(h),
                    s.fromBufferAttribute(n, d),
                    o.fromBufferAttribute(n, p),
                    l.fromBufferAttribute(n, m),
                    s.add(c),
                    o.add(c),
                    l.add(c),
                    n.setXYZ(d, s.x, s.y, s.z),
                    n.setXYZ(p, o.x, o.y, o.z),
                    n.setXYZ(m, l.x, l.y, l.z)
            } else for (let e = 0, s = t.count; e < s; e += 3) r.fromBufferAttribute(t, e + 0),
                i.fromBufferAttribute(t, e + 1),
                a.fromBufferAttribute(t, e + 2),
                c.subVectors(a, i),
                h.subVectors(r, i),
                c.cross(h),
                n.setXYZ(e + 0, c.x, c.y, c.z),
                n.setXYZ(e + 1, c.x, c.y, c.z),
                n.setXYZ(e + 2, c.x, c.y, c.z);
            this.normalizeNormals(),
                n.needsUpdate = !0
        }
    }
    merge(e, t) {
        if (!e || !e.isBufferGeometry) return void console.error(
            'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.',
            e
        );
        void 0 === t &&
        (
            t = 0,
                console.warn(
                    'THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'
                )
        );
        const n = this.attributes;
        for (const r in n) {
            if (void 0 === e.attributes[r]) continue;
            const i = n[r].array,
                a = e.attributes[r],
                s = a.array,
                o = a.itemSize * t,
                l = Math.min(s.length, i.length - o);
            for (let e = 0, t = o; e < l; e++, t++) i[t] = s[e]
        }
        return this
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++) _vector$8.fromBufferAttribute(e, t),
            _vector$8.normalize(),
            e.setXYZ(t, _vector$8.x, _vector$8.y, _vector$8.z)
    }
    toNonIndexed() {
        function e(e, t) {
            const n = e.array,
                r = e.itemSize,
                i = e.normalized,
                a = new n.constructor(t.length * r);
            let s = 0,
                o = 0;
            for (let e = 0, i = t.length; e < i; e++) {
                s = t[e] * r;
                for (let e = 0; e < r; e++) a[o++] = n[s++]
            }
            return new BufferAttribute(a, r, i)
        }
        if (null === this.index) return console.warn(
            'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
        ),
            this;
        const t = new BufferGeometry,
            n = this.index.array,
            r = this.attributes;
        for (const i in r) {
            const a = e(r[i], n);
            t.setAttribute(i, a)
        }
        const i = this.morphAttributes;
        for (const r in i) {
            const a = [],
                s = i[r];
            for (let t = 0, r = s.length; t < r; t++) {
                const r = e(s[t], n);
                a.push(r)
            }
            t.morphAttributes[r] = a
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let e = 0, n = a.length; e < n; e++) {
            const n = a[e];
            t.addGroup(n.start, n.count, n.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: 'BufferGeometry',
                generator: 'BufferGeometry.toJSON'
            }
        };
        if (
            e.uuid = this.uuid,
                e.type = this.type,
            '' !== this.name &&
            (e.name = this.name),
            Object.keys(this.userData).length > 0 &&
            (e.userData = this.userData),
            void 0 !== this.parameters
        ) {
            const t = this.parameters;
            for (const n in t) void 0 !== t[n] &&
            (e[n] = t[n]);
            return e
        }
        e.data = {
            attributes: {
            }
        };
        const t = this.index;
        null !== t &&
        (
            e.data.index = {
                type: t.array.constructor.name,
                array: Array.prototype.slice.call(t.array)
            }
        );
        const n = this.attributes;
        for (const t in n) {
            const r = n[t];
            e.data.attributes[t] = r.toJSON(e.data)
        }
        const r = {};
        let i = !1;
        for (const t in this.morphAttributes) {
            const n = this.morphAttributes[t],
                a = [];
            for (let t = 0, r = n.length; t < r; t++) {
                const r = n[t];
                a.push(r.toJSON(e.data))
            }
            a.length > 0 &&
            (r[t] = a, i = !0)
        }
        i &&
        (
            e.data.morphAttributes = r,
                e.data.morphTargetsRelative = this.morphTargetsRelative
        );
        const a = this.groups;
        a.length > 0 &&
        (e.data.groups = JSON.parse(JSON.stringify(a)));
        const s = this.boundingSphere;
        return null !== s &&
        (
            e.data.boundingSphere = {
                center: s.center.toArray(),
                radius: s.radius
            }
        ),
            e
    }
    clone() {
        return (new BufferGeometry).copy(this)
    }
    copy(e) {
        this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        null !== n &&
        this.setIndex(n.clone(t));
        const r = e.attributes;
        for (const e in r) {
            const n = r[e];
            this.setAttribute(e, n.clone(t))
        }
        const i = e.morphAttributes;
        for (const e in i) {
            const n = [],
                r = i[e];
            for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
            this.morphAttributes[e] = n
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const a = e.groups;
        for (let e = 0, t = a.length; e < t; e++) {
            const t = a[e];
            this.addGroup(t.start, t.count, t.materialIndex)
        }
        const s = e.boundingBox;
        null !== s &&
        (this.boundingBox = s.clone());
        const o = e.boundingSphere;
        return null !== o &&
        (this.boundingSphere = o.clone()),
            this.drawRange.start = e.drawRange.start,
            this.drawRange.count = e.drawRange.count,
            this.userData = e.userData,
            this
    }
    dispose() {
        this.dispatchEvent({
            type: 'dispose'
        })
    }
}
BufferGeometry.prototype.isBufferGeometry = !0;
const _inverseMatrix$2 = new Matrix4,
    _ray$2 = new Ray,
    _sphere$3 = new Sphere,
    _vA$1 = new Vector3,
    _vB$1 = new Vector3,
    _vC$1 = new Vector3,
    _tempA = new Vector3,
    _tempB = new Vector3,
    _tempC = new Vector3,
    _morphA = new Vector3,
    _morphB = new Vector3,
    _morphC = new Vector3,
    _uvA$1 = new Vector2,
    _uvB$1 = new Vector2,
    _uvC$1 = new Vector2,
    _intersectionPoint = new Vector3,
    _intersectionPointWorld = new Vector3;
class Mesh extends Object3D {
    constructor(e = new BufferGeometry, t = new MeshBasicMaterial) {
        super (),
            this.type = 'Mesh',
            this.geometry = e,
            this.material = t,
            this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e),
        void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        void 0 !== e.morphTargetDictionary &&
        (
            this.morphTargetDictionary = Object.assign({
            }, e.morphTargetDictionary)
        ),
            this.material = e.material,
            this.geometry = e.geometry,
            this
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const e = t[n[0]];
                if (void 0 !== e) {
                    this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t].name ||
                            String(t);
                        this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = t
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            void 0 !== t &&
            t.length > 0 &&
            console.error(
                'THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
            )
        }
    }
    raycast(e, t) {
        const n = this.geometry,
            r = this.material,
            i = this.matrixWorld;
        if (void 0 === r) return;
        if (
            null === n.boundingSphere &&
            n.computeBoundingSphere(),
                _sphere$3.copy(n.boundingSphere),
                _sphere$3.applyMatrix4(i),
            !1 === e.ray.intersectsSphere(_sphere$3)
        ) return;
        if (
            _inverseMatrix$2.copy(i).invert(),
                _ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),
            null !== n.boundingBox &&
            !1 === _ray$2.intersectsBox(n.boundingBox)
        ) return;
        let a;
        if (n.isBufferGeometry) {
            const i = n.index,
                s = n.attributes.position,
                o = n.morphAttributes.position,
                l = n.morphTargetsRelative,
                c = n.attributes.uv,
                h = n.attributes.uv2,
                u = n.groups,
                d = n.drawRange;
            if (null !== i) if (Array.isArray(r)) for (let n = 0, p = u.length; n < p; n++) {
                const p = u[n],
                    m = r[p.materialIndex];
                for (
                    let n = Math.max(p.start, d.start),
                        r = Math.min(p.start + p.count, d.start + d.count);
                    n < r;
                    n += 3
                ) {
                    const r = i.getX(n),
                        u = i.getX(n + 1),
                        d = i.getX(n + 2);
                    a = checkBufferGeometryIntersection(this, m, e, _ray$2, s, o, l, c, h, r, u, d),
                    a &&
                    (
                        a.faceIndex = Math.floor(n / 3),
                            a.face.materialIndex = p.materialIndex,
                            t.push(a)
                    )
                }
            } else {
                for (
                    let n = Math.max(0, d.start),
                        u = Math.min(i.count, d.start + d.count);
                    n < u;
                    n += 3
                ) {
                    const u = i.getX(n),
                        d = i.getX(n + 1),
                        p = i.getX(n + 2);
                    a = checkBufferGeometryIntersection(this, r, e, _ray$2, s, o, l, c, h, u, d, p),
                    a &&
                    (a.faceIndex = Math.floor(n / 3), t.push(a))
                }
            } else if (void 0 !== s) if (Array.isArray(r)) for (let n = 0, i = u.length; n < i; n++) {
                const i = u[n],
                    p = r[i.materialIndex];
                for (
                    let n = Math.max(i.start, d.start),
                        r = Math.min(i.start + i.count, d.start + d.count);
                    n < r;
                    n += 3
                ) {
                    a = checkBufferGeometryIntersection(this, p, e, _ray$2, s, o, l, c, h, n, n + 1, n + 2),
                    a &&
                    (
                        a.faceIndex = Math.floor(n / 3),
                            a.face.materialIndex = i.materialIndex,
                            t.push(a)
                    )
                }
            } else {
                for (
                    let n = Math.max(0, d.start),
                        i = Math.min(s.count, d.start + d.count);
                    n < i;
                    n += 3
                ) {
                    a = checkBufferGeometryIntersection(this, r, e, _ray$2, s, o, l, c, h, n, n + 1, n + 2),
                    a &&
                    (a.faceIndex = Math.floor(n / 3), t.push(a))
                }
            }
        } else n.isGeometry &&
        console.error(
            'THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
        )
    }
}
function checkIntersection(e, t, n, r, i, a, s, o) {
    let l;
    if (
        l = 1 === t.side ? r.intersectTriangle(s, a, i, !0, o) : r.intersectTriangle(i, a, s, 2 !== t.side, o),
        null === l
    ) return null;
    _intersectionPointWorld.copy(o),
        _intersectionPointWorld.applyMatrix4(e.matrixWorld);
    const c = n.ray.origin.distanceTo(_intersectionPointWorld);
    return c < n.near ||
    c > n.far ? null : {
        distance: c,
        point: _intersectionPointWorld.clone(),
        object: e
    }
}
function checkBufferGeometryIntersection(e, t, n, r, i, a, s, o, l, c, h, u) {
    _vA$1.fromBufferAttribute(i, c),
        _vB$1.fromBufferAttribute(i, h),
        _vC$1.fromBufferAttribute(i, u);
    const d = e.morphTargetInfluences;
    if (t.morphTargets && a && d) {
        _morphA.set(0, 0, 0),
            _morphB.set(0, 0, 0),
            _morphC.set(0, 0, 0);
        for (let e = 0, t = a.length; e < t; e++) {
            const t = d[e],
                n = a[e];
            0 !== t &&
            (
                _tempA.fromBufferAttribute(n, c),
                    _tempB.fromBufferAttribute(n, h),
                    _tempC.fromBufferAttribute(n, u),
                    s ? (
                        _morphA.addScaledVector(_tempA, t),
                            _morphB.addScaledVector(_tempB, t),
                            _morphC.addScaledVector(_tempC, t)
                    ) : (
                        _morphA.addScaledVector(_tempA.sub(_vA$1), t),
                            _morphB.addScaledVector(_tempB.sub(_vB$1), t),
                            _morphC.addScaledVector(_tempC.sub(_vC$1), t)
                    )
            )
        }
        _vA$1.add(_morphA),
            _vB$1.add(_morphB),
            _vC$1.add(_morphC)
    }
    e.isSkinnedMesh &&
    t.skinning &&
    (
        e.boneTransform(c, _vA$1),
            e.boneTransform(h, _vB$1),
            e.boneTransform(u, _vC$1)
    );
    const p = checkIntersection(e, t, n, r, _vA$1, _vB$1, _vC$1, _intersectionPoint);
    if (p) {
        o &&
        (
            _uvA$1.fromBufferAttribute(o, c),
                _uvB$1.fromBufferAttribute(o, h),
                _uvC$1.fromBufferAttribute(o, u),
                p.uv = Triangle.getUV(
                    _intersectionPoint,
                    _vA$1,
                    _vB$1,
                    _vC$1,
                    _uvA$1,
                    _uvB$1,
                    _uvC$1,
                    new Vector2
                )
        ),
        l &&
        (
            _uvA$1.fromBufferAttribute(l, c),
                _uvB$1.fromBufferAttribute(l, h),
                _uvC$1.fromBufferAttribute(l, u),
                p.uv2 = Triangle.getUV(
                    _intersectionPoint,
                    _vA$1,
                    _vB$1,
                    _vC$1,
                    _uvA$1,
                    _uvB$1,
                    _uvC$1,
                    new Vector2
                )
        );
        const e = {
            a: c,
            b: h,
            c: u,
            normal: new Vector3,
            materialIndex: 0
        };
        Triangle.getNormal(_vA$1, _vB$1, _vC$1, e.normal),
            p.face = e
    }
    return p
}
Mesh.prototype.isMesh = !0;
class BoxGeometry extends BufferGeometry {
    constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
        super (),
            this.type = 'BoxGeometry',
            this.parameters = {
                width: e,
                height: t,
                depth: n,
                widthSegments: r,
                heightSegments: i,
                depthSegments: a
            };
        const s = this;
        r = Math.floor(r),
            i = Math.floor(i),
            a = Math.floor(a);
        const o = [],
            l = [],
            c = [],
            h = [];
        let u = 0,
            d = 0;
        function p(e, t, n, r, i, a, p, m, f, g, v) {
            const _ = a / f,
                x = p / g,
                y = a / 2,
                b = p / 2,
                M = m / 2,
                w = f + 1,
                S = g + 1;
            let T = 0,
                E = 0;
            const L = new Vector3;
            for (let a = 0; a < S; a++) {
                const s = a * x - b;
                for (let o = 0; o < w; o++) {
                    const u = o * _ - y;
                    L[e] = u * r,
                        L[t] = s * i,
                        L[n] = M,
                        l.push(L.x, L.y, L.z),
                        L[e] = 0,
                        L[t] = 0,
                        L[n] = m > 0 ? 1 : - 1,
                        c.push(L.x, L.y, L.z),
                        h.push(o / f),
                        h.push(1 - a / g),
                        T += 1
                }
            }
            for (let e = 0; e < g; e++) for (let t = 0; t < f; t++) {
                const n = u + t + w * e,
                    r = u + t + w * (e + 1),
                    i = u + (t + 1) + w * (e + 1),
                    a = u + (t + 1) + w * e;
                o.push(n, r, a),
                    o.push(r, i, a),
                    E += 6
            }
            s.addGroup(d, E, v),
                d += E,
                u += T
        }
        p('z', 'y', 'x', - 1, - 1, n, t, e, a, i, 0),
            p('z', 'y', 'x', 1, - 1, n, t, - e, a, i, 1),
            p('x', 'z', 'y', 1, 1, e, n, t, r, a, 2),
            p('x', 'z', 'y', 1, - 1, e, n, - t, r, a, 3),
            p('x', 'y', 'z', 1, - 1, e, t, n, r, i, 4),
            p('x', 'y', 'z', - 1, - 1, e, t, - n, r, i, 5),
            this.setIndex(o),
            this.setAttribute('position', new Float32BufferAttribute(l, 3)),
            this.setAttribute('normal', new Float32BufferAttribute(c, 3)),
            this.setAttribute('uv', new Float32BufferAttribute(h, 2))
    }
}
function cloneUniforms(e) {
    const t = {};
    for (const n in e) {
        t[n] = {};
        for (const r in e[n]) {
            const i = e[n][r];
            i &&
            (
                i.isColor ||
                i.isMatrix3 ||
                i.isMatrix4 ||
                i.isVector2 ||
                i.isVector3 ||
                i.isVector4 ||
                i.isTexture ||
                i.isQuaternion
            ) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
        }
    }
    return t
}
function mergeUniforms(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = cloneUniforms(e[n]);
        for (const e in r) t[e] = r[e]
    }
    return t
}
const UniformsUtils = {
    clone: cloneUniforms,
    merge: mergeUniforms
};
var default_vertex = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}',
    default_fragment = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}';
class ShaderMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'ShaderMaterial',
            this.defines = {},
            this.uniforms = {},
            this.vertexShader = default_vertex,
            this.fragmentShader = default_fragment,
            this.linewidth = 1,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.lights = !1,
            this.clipping = !1,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            },
            this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv2: [
                    0,
                    0
                ]
            },
            this.index0AttributeName = void 0,
            this.uniformsNeedUpdate = !1,
            this.glslVersion = null,
        void 0 !== e &&
        (
            void 0 !== e.attributes &&
            console.error(
                'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'
            ),
                this.setValues(e)
        )
    }
    copy(e) {
        return super.copy(e),
            this.fragmentShader = e.fragmentShader,
            this.vertexShader = e.vertexShader,
            this.uniforms = cloneUniforms(e.uniforms),
            this.defines = Object.assign({
            }, e.defines),
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.lights = e.lights,
            this.clipping = e.clipping,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this.extensions = Object.assign({
            }, e.extensions),
            this.glslVersion = e.glslVersion,
            this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
            t.uniforms = {};
        for (const n in this.uniforms) {
            const r = this.uniforms[n].value;
            r &&
            r.isTexture ? t.uniforms[n] = {
                    type: 't',
                    value: r.toJSON(e).uuid
                }
                : r &&
                r.isColor ? t.uniforms[n] = {
                        type: 'c',
                        value: r.getHex()
                    }
                    : r &&
                    r.isVector2 ? t.uniforms[n] = {
                            type: 'v2',
                            value: r.toArray()
                        }
                        : r &&
                        r.isVector3 ? t.uniforms[n] = {
                                type: 'v3',
                                value: r.toArray()
                            }
                            : r &&
                            r.isVector4 ? t.uniforms[n] = {
                                    type: 'v4',
                                    value: r.toArray()
                                }
                                : r &&
                                r.isMatrix3 ? t.uniforms[n] = {
                                        type: 'm3',
                                        value: r.toArray()
                                    }
                                    : r &&
                                    r.isMatrix4 ? t.uniforms[n] = {
                                            type: 'm4',
                                            value: r.toArray()
                                        }
                                        : t.uniforms[n] = {
                                            value: r
                                        }
        }
        Object.keys(this.defines).length > 0 &&
        (t.defines = this.defines),
            t.vertexShader = this.vertexShader,
            t.fragmentShader = this.fragmentShader;
        const n = {};
        for (const e in this.extensions) !0 === this.extensions[e] &&
        (n[e] = !0);
        return Object.keys(n).length > 0 &&
        (t.extensions = n),
            t
    }
}
ShaderMaterial.prototype.isShaderMaterial = !0;
class Camera extends Object3D {
    constructor() {
        super (),
            this.type = 'Camera',
            this.matrixWorldInverse = new Matrix4,
            this.projectionMatrix = new Matrix4,
            this.projectionMatrixInverse = new Matrix4
    }
    copy(e, t) {
        return super.copy(e, t),
            this.matrixWorldInverse.copy(e.matrixWorldInverse),
            this.projectionMatrix.copy(e.projectionMatrix),
            this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
            this
    }
    getWorldDirection(e) {
        void 0 === e &&
        (
            console.warn('THREE.Camera: .getWorldDirection() target is now required'),
                e = new Vector3
        ),
            this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set( - t[8], - t[9], - t[10]).normalize()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
Camera.prototype.isCamera = !0;
class PerspectiveCamera extends Camera {
    constructor(e = 50, t = 1, n = 0.1, r = 2000) {
        super (),
            this.type = 'PerspectiveCamera',
            this.fov = e,
            this.zoom = 1,
            this.near = n,
            this.far = r,
            this.focus = 10,
            this.aspect = t,
            this.view = null,
            this.filmGauge = 35,
            this.filmOffset = 0,
            this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
            this.fov = e.fov,
            this.zoom = e.zoom,
            this.near = e.near,
            this.far = e.far,
            this.focus = e.focus,
            this.aspect = e.aspect,
            this.view = null === e.view ? null : Object.assign({
            }, e.view),
            this.filmGauge = e.filmGauge,
            this.filmOffset = e.filmOffset,
            this
    }
    setFocalLength(e) {
        const t = 0.5 * this.getFilmHeight() / e;
        this.fov = 2 * RAD2DEG * Math.atan(t),
            this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(0.5 * DEG2RAD * this.fov);
        return 0.5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return 2 * RAD2DEG * Math.atan(Math.tan(0.5 * DEG2RAD * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(e, t, n, r, i, a) {
        this.aspect = e / t,
        null === this.view &&
        (
            this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }
        ),
            this.view.enabled = !0,
            this.view.fullWidth = e,
            this.view.fullHeight = t,
            this.view.offsetX = n,
            this.view.offsetY = r,
            this.view.width = i,
            this.view.height = a,
            this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view &&
        (this.view.enabled = !1),
            this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(0.5 * DEG2RAD * this.fov) / this.zoom,
            n = 2 * t,
            r = this.aspect * n,
            i = - 0.5 * r;
        const a = this.view;
        if (null !== this.view && this.view.enabled) {
            const e = a.fullWidth,
                s = a.fullHeight;
            i += a.offsetX * r / e,
                t -= a.offsetY * n / s,
                r *= a.width / e,
                n *= a.height / s
        }
        const s = this.filmOffset;
        0 !== s &&
        (i += e * s / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
            t.object.zoom = this.zoom,
            t.object.near = this.near,
            t.object.far = this.far,
            t.object.focus = this.focus,
            t.object.aspect = this.aspect,
        null !== this.view &&
        (t.object.view = Object.assign({
        }, this.view)),
            t.object.filmGauge = this.filmGauge,
            t.object.filmOffset = this.filmOffset,
            t
    }
}
PerspectiveCamera.prototype.isPerspectiveCamera = !0;
const fov = 90,
    aspect = 1;
class CubeCamera extends Object3D {
    constructor(e, t, n) {
        if (
            super (),
                this.type = 'CubeCamera',
            !0 !== n.isWebGLCubeRenderTarget
        ) return void console.error(
            'THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.'
        );
        this.renderTarget = n;
        const r = new PerspectiveCamera(90, 1, e, t);
        r.layers = this.layers,
            r.up.set(0, - 1, 0),
            r.lookAt(new Vector3(1, 0, 0)),
            this.add(r);
        const i = new PerspectiveCamera(90, 1, e, t);
        i.layers = this.layers,
            i.up.set(0, - 1, 0),
            i.lookAt(new Vector3( - 1, 0, 0)),
            this.add(i);
        const a = new PerspectiveCamera(90, 1, e, t);
        a.layers = this.layers,
            a.up.set(0, 0, 1),
            a.lookAt(new Vector3(0, 1, 0)),
            this.add(a);
        const s = new PerspectiveCamera(90, 1, e, t);
        s.layers = this.layers,
            s.up.set(0, 0, - 1),
            s.lookAt(new Vector3(0, - 1, 0)),
            this.add(s);
        const o = new PerspectiveCamera(90, 1, e, t);
        o.layers = this.layers,
            o.up.set(0, - 1, 0),
            o.lookAt(new Vector3(0, 0, 1)),
            this.add(o);
        const l = new PerspectiveCamera(90, 1, e, t);
        l.layers = this.layers,
            l.up.set(0, - 1, 0),
            l.lookAt(new Vector3(0, 0, - 1)),
            this.add(l)
    }
    update(e, t) {
        null === this.parent &&
        this.updateMatrixWorld();
        const n = this.renderTarget,
            [
                r,
                i,
                a,
                s,
                o,
                l
            ] = this.children,
            c = e.xr.enabled,
            h = e.getRenderTarget();
        e.xr.enabled = !1;
        const u = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
            e.setRenderTarget(n, 0),
            e.render(t, r),
            e.setRenderTarget(n, 1),
            e.render(t, i),
            e.setRenderTarget(n, 2),
            e.render(t, a),
            e.setRenderTarget(n, 3),
            e.render(t, s),
            e.setRenderTarget(n, 4),
            e.render(t, o),
            n.texture.generateMipmaps = u,
            e.setRenderTarget(n, 5),
            e.render(t, l),
            e.setRenderTarget(h),
            e.xr.enabled = c
    }
}
class CubeTexture extends Texture {
    constructor(e, t, n, r, i, a, s, o, l, c) {
        super (
            e = void 0 !== e ? e : [],
            t = void 0 !== t ? t : 301,
            n,
            r,
            i,
            a,
            s = void 0 !== s ? s : 1022,
            o,
            l,
            c
        ),
            this._needsFlipEnvMap = !0,
            this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
CubeTexture.prototype.isCubeTexture = !0;
class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(e, t, n) {
        Number.isInteger(t) &&
        (
            console.warn(
                'THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )'
            ),
                t = n
        ),
            super (e, e, t),
            t = t ||
                {
                },
            this.texture = new CubeTexture(
                void 0,
                t.mapping,
                t.wrapS,
                t.wrapT,
                t.magFilter,
                t.minFilter,
                t.format,
                t.type,
                t.anisotropy,
                t.encoding
            ),
            this.texture.generateMipmaps = void 0 !== t.generateMipmaps &&
                t.generateMipmaps,
            this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : 1006,
            this.texture._needsFlipEnvMap = !1
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
            this.texture.format = 1023,
            this.texture.encoding = t.encoding,
            this.texture.generateMipmaps = t.generateMipmaps,
            this.texture.minFilter = t.minFilter,
            this.texture.magFilter = t.magFilter;
        const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: '\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t',
                fragmentShader: '\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t'
            },
            r = new BoxGeometry(5, 5, 5),
            i = new ShaderMaterial({
                name: 'CubemapFromEquirect',
                uniforms: cloneUniforms(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: 1,
                blending: 0
            });
        i.uniforms.tEquirect.value = t;
        const a = new Mesh(r, i),
            s = t.minFilter;
        1008 === t.minFilter &&
        (t.minFilter = 1006);
        return new CubeCamera(1, 10, this).update(e, a),
            t.minFilter = s,
            a.geometry.dispose(),
            a.material.dispose(),
            this
    }
    clear(e, t, n, r) {
        const i = e.getRenderTarget();
        for (let i = 0; i < 6; i++) e.setRenderTarget(this, i),
            e.clear(t, n, r);
        e.setRenderTarget(i)
    }
}
WebGLCubeRenderTarget.prototype.isWebGLCubeRenderTarget = !0;
class DataTexture extends Texture {
    constructor(e, t, n, r, i, a, s, o, l, c, h, u) {
        super (null, a, s, o, l, c, r, i, h, u),
            this.image = {
                data: e ||
                    null,
                width: t ||
                    1,
                height: n ||
                    1
            },
            this.magFilter = void 0 !== l ? l : 1003,
            this.minFilter = void 0 !== c ? c : 1003,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1,
            this.needsUpdate = !0
    }
}
DataTexture.prototype.isDataTexture = !0;
const _sphere$2 = new Sphere,
    _vector$7 = new Vector3;
class Frustum {
    constructor(
        e = new Plane,
        t = new Plane,
        n = new Plane,
        r = new Plane,
        i = new Plane,
        a = new Plane
    ) {
        this.planes = [
            e,
            t,
            n,
            r,
            i,
            a
        ]
    }
    set(e, t, n, r, i, a) {
        const s = this.planes;
        return s[0].copy(e),
            s[1].copy(t),
            s[2].copy(n),
            s[3].copy(r),
            s[4].copy(i),
            s[5].copy(a),
            this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e) {
        const t = this.planes,
            n = e.elements,
            r = n[0],
            i = n[1],
            a = n[2],
            s = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            h = n[7],
            u = n[8],
            d = n[9],
            p = n[10],
            m = n[11],
            f = n[12],
            g = n[13],
            v = n[14],
            _ = n[15];
        return t[0].setComponents(s - r, h - o, m - u, _ - f).normalize(),
            t[1].setComponents(s + r, h + o, m + u, _ + f).normalize(),
            t[2].setComponents(s + i, h + l, m + d, _ + g).normalize(),
            t[3].setComponents(s - i, h - l, m - d, _ - g).normalize(),
            t[4].setComponents(s - a, h - c, m - p, _ - v).normalize(),
            t[5].setComponents(s + a, h + c, m + p, _ + v).normalize(),
            this
    }
    intersectsObject(e) {
        const t = e.geometry;
        return null === t.boundingSphere &&
        t.computeBoundingSphere(),
            _sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
            this.intersectsSphere(_sphere$2)
    }
    intersectsSprite(e) {
        return _sphere$2.center.set(0, 0, 0),
            _sphere$2.radius = 0.7071067811865476,
            _sphere$2.applyMatrix4(e.matrixWorld),
            this.intersectsSphere(_sphere$2)
    }
    intersectsSphere(e) {
        const t = this.planes,
            n = e.center,
            r = - e.radius;
        for (let e = 0; e < 6; e++) {
            if (t[e].distanceToPoint(n) < r) return !1
        }
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const r = t[n];
            if (
                _vector$7.x = r.normal.x > 0 ? e.max.x : e.min.x,
                    _vector$7.y = r.normal.y > 0 ? e.max.y : e.min.y,
                    _vector$7.z = r.normal.z > 0 ? e.max.z : e.min.z,
                r.distanceToPoint(_vector$7) < 0
            ) return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
        return !0
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
function WebGLAnimation() {
    let e = null,
        t = !1,
        n = null,
        r = null;
    function i(t, a) {
        n(t, a),
            r = e.requestAnimationFrame(i)
    }
    return {
        start: function () {
            !0 !== t &&
            null !== n &&
            (r = e.requestAnimationFrame(i), t = !0)
        },
        stop: function () {
            e.cancelAnimationFrame(r),
                t = !1
        },
        setAnimationLoop: function (e) {
            n = e
        },
        setContext: function (t) {
            e = t
        }
    }
}
function WebGLAttributes(e, t) {
    const n = t.isWebGL2,
        r = new WeakMap;
    return {
        get: function (e) {
            return e.isInterleavedBufferAttribute &&
            (e = e.data),
                r.get(e)
        },
        remove: function (t) {
            t.isInterleavedBufferAttribute &&
            (t = t.data);
            const n = r.get(t);
            n &&
            (e.deleteBuffer(n.buffer), r.delete(t))
        },
        update: function (t, i) {
            if (t.isGLBufferAttribute) {
                const e = r.get(t);
                return void (
                    (!e || e.version < t.version) &&
                    r.set(
                        t,
                        {
                            buffer: t.buffer,
                            type: t.type,
                            bytesPerElement: t.elementSize,
                            version: t.version
                        }
                    )
                )
            }
            t.isInterleavedBufferAttribute &&
            (t = t.data);
            const a = r.get(t);
            void 0 === a ? r.set(
                t,
                function (t, r) {
                    const i = t.array,
                        a = t.usage,
                        s = e.createBuffer();
                    e.bindBuffer(r, s),
                        e.bufferData(r, i, a),
                        t.onUploadCallback();
                    let o = 5126;
                    return i instanceof Float32Array ? o = 5126 : i instanceof Float64Array ? console.warn(
                        'THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.'
                    ) : i instanceof Uint16Array ? t.isFloat16BufferAttribute ? n ? o = 5131 : console.warn(
                        'THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.'
                    ) : o = 5123 : i instanceof Int16Array ? o = 5122 : i instanceof Uint32Array ? o = 5125 : i instanceof Int32Array ? o = 5124 : i instanceof Int8Array ? o = 5120 : i instanceof Uint8Array &&
                        (o = 5121),
                        {
                            buffer: s,
                            type: o,
                            bytesPerElement: i.BYTES_PER_ELEMENT,
                            version: t.version
                        }
                }(t, i)
            ) : a.version < t.version &&
                (
                    !function (t, r, i) {
                        const a = r.array,
                            s = r.updateRange;
                        e.bindBuffer(i, t),
                            - 1 === s.count ? e.bufferSubData(i, 0, a) : (
                                n ? e.bufferSubData(i, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : e.bufferSubData(
                                    i,
                                    s.offset * a.BYTES_PER_ELEMENT,
                                    a.subarray(s.offset, s.offset + s.count)
                                ),
                                    s.count = - 1
                            )
                    }(a.buffer, t, i),
                        a.version = t.version
                )
        }
    }
}
class PlaneGeometry extends BufferGeometry {
    constructor(e = 1, t = 1, n = 1, r = 1) {
        super (),
            this.type = 'PlaneGeometry',
            this.parameters = {
                width: e,
                height: t,
                widthSegments: n,
                heightSegments: r
            };
        const i = e / 2,
            a = t / 2,
            s = Math.floor(n),
            o = Math.floor(r),
            l = s + 1,
            c = o + 1,
            h = e / s,
            u = t / o,
            d = [],
            p = [],
            m = [],
            f = [];
        for (let e = 0; e < c; e++) {
            const t = e * u - a;
            for (let n = 0; n < l; n++) {
                const r = n * h - i;
                p.push(r, - t, 0),
                    m.push(0, 0, 1),
                    f.push(n / s),
                    f.push(1 - e / o)
            }
        }
        for (let e = 0; e < o; e++) for (let t = 0; t < s; t++) {
            const n = t + l * e,
                r = t + l * (e + 1),
                i = t + 1 + l * (e + 1),
                a = t + 1 + l * e;
            d.push(n, r, a),
                d.push(r, i, a)
        }
        this.setIndex(d),
            this.setAttribute('position', new Float32BufferAttribute(p, 3)),
            this.setAttribute('normal', new Float32BufferAttribute(m, 3)),
            this.setAttribute('uv', new Float32BufferAttribute(f, 2))
    }
}
var alphamap_fragment = '#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif',
    alphamap_pars_fragment = '#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
    alphatest_fragment = '#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif',
    aomap_fragment = '#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif',
    aomap_pars_fragment = '#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif',
    begin_vertex = 'vec3 transformed = vec3( position );',
    beginnormal_vertex = 'vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif',
    bsdfs = 'vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif',
    bumpmap_pars_fragment = '#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif',
    clipping_planes_fragment = '#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif',
    clipping_planes_pars_fragment = '#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif',
    clipping_planes_pars_vertex = '#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif',
    clipping_planes_vertex = '#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif',
    color_fragment = '#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif',
    color_pars_fragment = '#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif',
    color_pars_vertex = '#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif',
    color_vertex = '#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif',
    common = '#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}',
    cube_uv_reflection_fragment = '#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif',
    defaultnormal_vertex = 'vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif',
    displacementmap_pars_vertex = '#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif',
    displacementmap_vertex = '#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif',
    emissivemap_fragment = '#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif',
    emissivemap_pars_fragment = '#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif',
    encodings_fragment = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
    encodings_pars_fragment = '\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}',
    envmap_fragment = '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif',
    envmap_common_pars_fragment = '#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif',
    envmap_pars_fragment = '#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif',
    envmap_pars_vertex = '#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif',
    envmap_vertex = '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif',
    fog_vertex = '#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif',
    fog_pars_vertex = '#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif',
    fog_fragment = '#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif',
    fog_pars_fragment = '#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif',
    gradientmap_pars_fragment = '#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}',
    lightmap_fragment = '#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif',
    lightmap_pars_fragment = '#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif',
    lights_lambert_vertex = 'vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif',
    lights_pars_begin = 'uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif',
    envmap_physical_pars_fragment = '#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif',
    lights_toon_fragment = 'ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;',
    lights_toon_pars_fragment = 'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)',
    lights_phong_fragment = 'BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;',
    lights_phong_pars_fragment = 'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)',
    lights_physical_fragment = 'PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif',
    lights_physical_pars_fragment = 'struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}',
    lights_fragment_begin = '\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif',
    lights_fragment_maps = '#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif',
    lights_fragment_end = '#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif',
    logdepthbuf_fragment = '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif',
    logdepthbuf_pars_fragment = '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif',
    logdepthbuf_pars_vertex = '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif',
    logdepthbuf_vertex = '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif',
    map_fragment = '#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif',
    map_pars_fragment = '#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif',
    map_particle_fragment = '#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif',
    map_particle_pars_fragment = '#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
    metalnessmap_fragment = 'float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif',
    metalnessmap_pars_fragment = '#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif',
    morphnormal_vertex = '#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif',
    morphtarget_pars_vertex = '#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif',
    morphtarget_vertex = '#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif',
    normal_fragment_begin = 'float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;',
    normal_fragment_maps = '#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif',
    normalmap_pars_fragment = '#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif',
    clearcoat_normal_fragment_begin = '#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif',
    clearcoat_normal_fragment_maps = '#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif',
    clearcoat_pars_fragment = '#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif',
    packing = 'vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}',
    premultiplied_alpha_fragment = '#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif',
    project_vertex = 'vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;',
    dithering_fragment = '#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif',
    dithering_pars_fragment = '#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif',
    roughnessmap_fragment = 'float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif',
    roughnessmap_pars_fragment = '#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif',
    shadowmap_pars_fragment = '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif',
    shadowmap_pars_vertex = '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif',
    shadowmap_vertex = '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif',
    shadowmask_pars_fragment = 'float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}',
    skinbase_vertex = '#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif',
    skinning_pars_vertex = '#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif',
    skinning_vertex = '#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif',
    skinnormal_vertex = '#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif',
    specularmap_fragment = 'float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif',
    specularmap_pars_fragment = '#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif',
    tonemapping_fragment = '#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif',
    tonemapping_pars_fragment = '#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }',
    transmissionmap_fragment = '#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif',
    transmissionmap_pars_fragment = '#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif',
    uv_pars_fragment = '#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif',
    uv_pars_vertex = '#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif',
    uv_vertex = '#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif',
    uv2_pars_fragment = '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif',
    uv2_pars_vertex = '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif',
    uv2_vertex = '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif',
    worldpos_vertex = '#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif',
    background_frag = 'uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
    background_vert = 'varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}',
    cube_frag = '#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
    cube_vert = 'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}',
    depth_frag = '#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}',
    depth_vert = '#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}',
    distanceRGBA_frag = '#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}',
    distanceRGBA_vert = '#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}',
    equirect_frag = 'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
    equirect_vert = 'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
    linedashed_frag = 'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
    linedashed_vert = 'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
    meshbasic_frag = 'uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshbasic_vert = '#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}',
    meshlambert_frag = 'uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshlambert_vert = '#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    meshmatcap_frag = '#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshmatcap_vert = '#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}',
    meshtoon_frag = '#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshtoon_vert = '#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    meshphong_frag = '#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshphong_vert = '#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    meshphysical_frag = '#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshphysical_vert = '#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    normal_frag = '#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}',
    normal_vert = '#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}',
    points_frag = 'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
    points_vert = 'uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}',
    shadow_frag = 'uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
    shadow_vert = '#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    sprite_frag = 'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
    sprite_vert = 'uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}';
const ShaderChunk = {
        alphamap_fragment: alphamap_fragment,
        alphamap_pars_fragment: alphamap_pars_fragment,
        alphatest_fragment: alphatest_fragment,
        aomap_fragment: aomap_fragment,
        aomap_pars_fragment: aomap_pars_fragment,
        begin_vertex: begin_vertex,
        beginnormal_vertex: beginnormal_vertex,
        bsdfs: bsdfs,
        bumpmap_pars_fragment: bumpmap_pars_fragment,
        clipping_planes_fragment: clipping_planes_fragment,
        clipping_planes_pars_fragment: clipping_planes_pars_fragment,
        clipping_planes_pars_vertex: clipping_planes_pars_vertex,
        clipping_planes_vertex: clipping_planes_vertex,
        color_fragment: color_fragment,
        color_pars_fragment: color_pars_fragment,
        color_pars_vertex: color_pars_vertex,
        color_vertex: color_vertex,
        common: common,
        cube_uv_reflection_fragment: cube_uv_reflection_fragment,
        defaultnormal_vertex: defaultnormal_vertex,
        displacementmap_pars_vertex: displacementmap_pars_vertex,
        displacementmap_vertex: displacementmap_vertex,
        emissivemap_fragment: emissivemap_fragment,
        emissivemap_pars_fragment: emissivemap_pars_fragment,
        encodings_fragment: encodings_fragment,
        encodings_pars_fragment: encodings_pars_fragment,
        envmap_fragment: envmap_fragment,
        envmap_common_pars_fragment: envmap_common_pars_fragment,
        envmap_pars_fragment: envmap_pars_fragment,
        envmap_pars_vertex: envmap_pars_vertex,
        envmap_physical_pars_fragment: envmap_physical_pars_fragment,
        envmap_vertex: envmap_vertex,
        fog_vertex: fog_vertex,
        fog_pars_vertex: fog_pars_vertex,
        fog_fragment: fog_fragment,
        fog_pars_fragment: fog_pars_fragment,
        gradientmap_pars_fragment: gradientmap_pars_fragment,
        lightmap_fragment: lightmap_fragment,
        lightmap_pars_fragment: lightmap_pars_fragment,
        lights_lambert_vertex: lights_lambert_vertex,
        lights_pars_begin: lights_pars_begin,
        lights_toon_fragment: lights_toon_fragment,
        lights_toon_pars_fragment: lights_toon_pars_fragment,
        lights_phong_fragment: lights_phong_fragment,
        lights_phong_pars_fragment: lights_phong_pars_fragment,
        lights_physical_fragment: lights_physical_fragment,
        lights_physical_pars_fragment: lights_physical_pars_fragment,
        lights_fragment_begin: lights_fragment_begin,
        lights_fragment_maps: lights_fragment_maps,
        lights_fragment_end: lights_fragment_end,
        logdepthbuf_fragment: logdepthbuf_fragment,
        logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
        logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
        logdepthbuf_vertex: logdepthbuf_vertex,
        map_fragment: map_fragment,
        map_pars_fragment: map_pars_fragment,
        map_particle_fragment: map_particle_fragment,
        map_particle_pars_fragment: map_particle_pars_fragment,
        metalnessmap_fragment: metalnessmap_fragment,
        metalnessmap_pars_fragment: metalnessmap_pars_fragment,
        morphnormal_vertex: morphnormal_vertex,
        morphtarget_pars_vertex: morphtarget_pars_vertex,
        morphtarget_vertex: morphtarget_vertex,
        normal_fragment_begin: normal_fragment_begin,
        normal_fragment_maps: normal_fragment_maps,
        normalmap_pars_fragment: normalmap_pars_fragment,
        clearcoat_normal_fragment_begin: clearcoat_normal_fragment_begin,
        clearcoat_normal_fragment_maps: clearcoat_normal_fragment_maps,
        clearcoat_pars_fragment: clearcoat_pars_fragment,
        packing: packing,
        premultiplied_alpha_fragment: premultiplied_alpha_fragment,
        project_vertex: project_vertex,
        dithering_fragment: dithering_fragment,
        dithering_pars_fragment: dithering_pars_fragment,
        roughnessmap_fragment: roughnessmap_fragment,
        roughnessmap_pars_fragment: roughnessmap_pars_fragment,
        shadowmap_pars_fragment: shadowmap_pars_fragment,
        shadowmap_pars_vertex: shadowmap_pars_vertex,
        shadowmap_vertex: shadowmap_vertex,
        shadowmask_pars_fragment: shadowmask_pars_fragment,
        skinbase_vertex: skinbase_vertex,
        skinning_pars_vertex: skinning_pars_vertex,
        skinning_vertex: skinning_vertex,
        skinnormal_vertex: skinnormal_vertex,
        specularmap_fragment: specularmap_fragment,
        specularmap_pars_fragment: specularmap_pars_fragment,
        tonemapping_fragment: tonemapping_fragment,
        tonemapping_pars_fragment: tonemapping_pars_fragment,
        transmissionmap_fragment: transmissionmap_fragment,
        transmissionmap_pars_fragment: transmissionmap_pars_fragment,
        uv_pars_fragment: uv_pars_fragment,
        uv_pars_vertex: uv_pars_vertex,
        uv_vertex: uv_vertex,
        uv2_pars_fragment: uv2_pars_fragment,
        uv2_pars_vertex: uv2_pars_vertex,
        uv2_vertex: uv2_vertex,
        worldpos_vertex: worldpos_vertex,
        background_frag: background_frag,
        background_vert: background_vert,
        cube_frag: cube_frag,
        cube_vert: cube_vert,
        depth_frag: depth_frag,
        depth_vert: depth_vert,
        distanceRGBA_frag: distanceRGBA_frag,
        distanceRGBA_vert: distanceRGBA_vert,
        equirect_frag: equirect_frag,
        equirect_vert: equirect_vert,
        linedashed_frag: linedashed_frag,
        linedashed_vert: linedashed_vert,
        meshbasic_frag: meshbasic_frag,
        meshbasic_vert: meshbasic_vert,
        meshlambert_frag: meshlambert_frag,
        meshlambert_vert: meshlambert_vert,
        meshmatcap_frag: meshmatcap_frag,
        meshmatcap_vert: meshmatcap_vert,
        meshtoon_frag: meshtoon_frag,
        meshtoon_vert: meshtoon_vert,
        meshphong_frag: meshphong_frag,
        meshphong_vert: meshphong_vert,
        meshphysical_frag: meshphysical_frag,
        meshphysical_vert: meshphysical_vert,
        normal_frag: normal_frag,
        normal_vert: normal_vert,
        points_frag: points_frag,
        points_vert: points_vert,
        shadow_frag: shadow_frag,
        shadow_vert: shadow_vert,
        sprite_frag: sprite_frag,
        sprite_vert: sprite_vert
    },
    UniformsLib = {
        common: {
            diffuse: {
                value: new Color(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Matrix3
            },
            uv2Transform: {
                value: new Matrix3
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: - 1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: 0.98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new Vector2(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 0.00025
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2000
            },
            fogColor: {
                value: new Color(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {
                    },
                    color: {
                    }
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {
                    },
                    shadowNormalBias: {
                    },
                    shadowRadius: {
                    },
                    shadowMapSize: {
                    }
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {
                    },
                    position: {
                    },
                    direction: {
                    },
                    distance: {
                    },
                    coneCos: {
                    },
                    penumbraCos: {
                    },
                    decay: {
                    }
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {
                    },
                    shadowNormalBias: {
                    },
                    shadowRadius: {
                    },
                    shadowMapSize: {
                    }
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {
                    },
                    position: {
                    },
                    decay: {
                    },
                    distance: {
                    }
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {
                    },
                    shadowNormalBias: {
                    },
                    shadowRadius: {
                    },
                    shadowMapSize: {
                    },
                    shadowCameraNear: {
                    },
                    shadowCameraFar: {
                    }
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {
                    },
                    skyColor: {
                    },
                    groundColor: {
                    }
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {
                    },
                    position: {
                    },
                    width: {
                    },
                    height: {
                    }
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Color(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new Matrix3
            }
        },
        sprite: {
            diffuse: {
                value: new Color(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new Vector2(0.5, 0.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new Matrix3
            }
        }
    },
    ShaderLib = {
        basic: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.specularmap,
                    UniformsLib.envmap,
                    UniformsLib.aomap,
                    UniformsLib.lightmap,
                    UniformsLib.fog]
            ),
            vertexShader: ShaderChunk.meshbasic_vert,
            fragmentShader: ShaderChunk.meshbasic_frag
        },
        lambert: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.specularmap,
                    UniformsLib.envmap,
                    UniformsLib.aomap,
                    UniformsLib.lightmap,
                    UniformsLib.emissivemap,
                    UniformsLib.fog,
                    UniformsLib.lights,
                    {
                        emissive: {
                            value: new Color(0)
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.meshlambert_vert,
            fragmentShader: ShaderChunk.meshlambert_frag
        },
        phong: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.specularmap,
                    UniformsLib.envmap,
                    UniformsLib.aomap,
                    UniformsLib.lightmap,
                    UniformsLib.emissivemap,
                    UniformsLib.bumpmap,
                    UniformsLib.normalmap,
                    UniformsLib.displacementmap,
                    UniformsLib.fog,
                    UniformsLib.lights,
                    {
                        emissive: {
                            value: new Color(0)
                        },
                        specular: {
                            value: new Color(1118481)
                        },
                        shininess: {
                            value: 30
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.meshphong_vert,
            fragmentShader: ShaderChunk.meshphong_frag
        },
        standard: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.envmap,
                    UniformsLib.aomap,
                    UniformsLib.lightmap,
                    UniformsLib.emissivemap,
                    UniformsLib.bumpmap,
                    UniformsLib.normalmap,
                    UniformsLib.displacementmap,
                    UniformsLib.roughnessmap,
                    UniformsLib.metalnessmap,
                    UniformsLib.fog,
                    UniformsLib.lights,
                    {
                        emissive: {
                            value: new Color(0)
                        },
                        roughness: {
                            value: 1
                        },
                        metalness: {
                            value: 0
                        },
                        envMapIntensity: {
                            value: 1
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.meshphysical_vert,
            fragmentShader: ShaderChunk.meshphysical_frag
        },
        toon: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.aomap,
                    UniformsLib.lightmap,
                    UniformsLib.emissivemap,
                    UniformsLib.bumpmap,
                    UniformsLib.normalmap,
                    UniformsLib.displacementmap,
                    UniformsLib.gradientmap,
                    UniformsLib.fog,
                    UniformsLib.lights,
                    {
                        emissive: {
                            value: new Color(0)
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.meshtoon_vert,
            fragmentShader: ShaderChunk.meshtoon_frag
        },
        matcap: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.bumpmap,
                    UniformsLib.normalmap,
                    UniformsLib.displacementmap,
                    UniformsLib.fog,
                    {
                        matcap: {
                            value: null
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.meshmatcap_vert,
            fragmentShader: ShaderChunk.meshmatcap_frag
        },
        points: {
            uniforms: mergeUniforms([UniformsLib.points,
                UniformsLib.fog]),
            vertexShader: ShaderChunk.points_vert,
            fragmentShader: ShaderChunk.points_frag
        },
        dashed: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.fog,
                    {
                        scale: {
                            value: 1
                        },
                        dashSize: {
                            value: 1
                        },
                        totalSize: {
                            value: 2
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.linedashed_vert,
            fragmentShader: ShaderChunk.linedashed_frag
        },
        depth: {
            uniforms: mergeUniforms([UniformsLib.common,
                UniformsLib.displacementmap]),
            vertexShader: ShaderChunk.depth_vert,
            fragmentShader: ShaderChunk.depth_frag
        },
        normal: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.bumpmap,
                    UniformsLib.normalmap,
                    UniformsLib.displacementmap,
                    {
                        opacity: {
                            value: 1
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.normal_vert,
            fragmentShader: ShaderChunk.normal_frag
        },
        sprite: {
            uniforms: mergeUniforms([UniformsLib.sprite,
                UniformsLib.fog]),
            vertexShader: ShaderChunk.sprite_vert,
            fragmentShader: ShaderChunk.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Matrix3
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: ShaderChunk.background_vert,
            fragmentShader: ShaderChunk.background_frag
        },
        cube: {
            uniforms: mergeUniforms([UniformsLib.envmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: ShaderChunk.cube_vert,
            fragmentShader: ShaderChunk.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: ShaderChunk.equirect_vert,
            fragmentShader: ShaderChunk.equirect_frag
        },
        distanceRGBA: {
            uniforms: mergeUniforms(
                [UniformsLib.common,
                    UniformsLib.displacementmap,
                    {
                        referencePosition: {
                            value: new Vector3
                        },
                        nearDistance: {
                            value: 1
                        },
                        farDistance: {
                            value: 1000
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.distanceRGBA_vert,
            fragmentShader: ShaderChunk.distanceRGBA_frag
        },
        shadow: {
            uniforms: mergeUniforms(
                [UniformsLib.lights,
                    UniformsLib.fog,
                    {
                        color: {
                            value: new Color(0)
                        },
                        opacity: {
                            value: 1
                        }
                    }
                ]
            ),
            vertexShader: ShaderChunk.shadow_vert,
            fragmentShader: ShaderChunk.shadow_frag
        }
    };
function WebGLBackground(e, t, n, r, i) {
    const a = new Color(0);
    let s,
        o,
        l = 0,
        c = null,
        h = 0,
        u = null;
    function d(e, t) {
        n.buffers.color.setClear(e.r, e.g, e.b, t, i)
    }
    return {
        getClearColor: function () {
            return a
        },
        setClearColor: function (e, t = 1) {
            a.set(e),
                l = t,
                d(a, l)
        },
        getClearAlpha: function () {
            return l
        },
        setClearAlpha: function (e) {
            l = e,
                d(a, l)
        },
        render: function (n, i, p, m) {
            let f = !0 === i.isScene ? i.background : null;
            f &&
            f.isTexture &&
            (f = t.get(f));
            const g = e.xr,
                v = g.getSession &&
                    g.getSession();
            v &&
            'additive' === v.environmentBlendMode &&
            (f = null),
                null === f ? d(a, l) : f &&
                    f.isColor &&
                    (d(f, 1), m = !0),
            (e.autoClear || m) &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
                f &&
                (f.isCubeTexture || 306 === f.mapping) ? (
                    void 0 === o &&
                    (
                        o = new Mesh(
                            new BoxGeometry(1, 1, 1),
                            new ShaderMaterial({
                                name: 'BackgroundCubeMaterial',
                                uniforms: cloneUniforms(ShaderLib.cube.uniforms),
                                vertexShader: ShaderLib.cube.vertexShader,
                                fragmentShader: ShaderLib.cube.fragmentShader,
                                side: 1,
                                depthTest: !1,
                                depthWrite: !1,
                                fog: !1
                            })
                        ),
                            o.geometry.deleteAttribute('normal'),
                            o.geometry.deleteAttribute('uv'),
                            o.onBeforeRender = function (e, t, n) {
                                this.matrixWorld.copyPosition(n.matrixWorld)
                            },
                            Object.defineProperty(
                                o.material,
                                'envMap',
                                {
                                    get: function () {
                                        return this.uniforms.envMap.value
                                    }
                                }
                            ),
                            r.update(o)
                    ),
                        o.material.uniforms.envMap.value = f,
                        o.material.uniforms.flipEnvMap.value = f.isCubeTexture &&
                        f._needsFlipEnvMap ? - 1 : 1,
                    c === f &&
                    h === f.version &&
                    u === e.toneMapping ||
                    (o.material.needsUpdate = !0, c = f, h = f.version, u = e.toneMapping),
                        n.unshift(o, o.geometry, o.material, 0, 0, null)
                ) : f &&
                    f.isTexture &&
                    (
                        void 0 === s &&
                        (
                            s = new Mesh(
                                new PlaneGeometry(2, 2),
                                new ShaderMaterial({
                                    name: 'BackgroundMaterial',
                                    uniforms: cloneUniforms(ShaderLib.background.uniforms),
                                    vertexShader: ShaderLib.background.vertexShader,
                                    fragmentShader: ShaderLib.background.fragmentShader,
                                    side: 0,
                                    depthTest: !1,
                                    depthWrite: !1,
                                    fog: !1
                                })
                            ),
                                s.geometry.deleteAttribute('normal'),
                                Object.defineProperty(
                                    s.material,
                                    'map',
                                    {
                                        get: function () {
                                            return this.uniforms.t2D.value
                                        }
                                    }
                                ),
                                r.update(s)
                        ),
                            s.material.uniforms.t2D.value = f,
                        !0 === f.matrixAutoUpdate &&
                        f.updateMatrix(),
                            s.material.uniforms.uvTransform.value.copy(f.matrix),
                        c === f &&
                        h === f.version &&
                        u === e.toneMapping ||
                        (s.material.needsUpdate = !0, c = f, h = f.version, u = e.toneMapping),
                            n.unshift(s, s.geometry, s.material, 0, 0, null)
                    )
        }
    }
}
function WebGLBindingStates(e, t, n, r) {
    const i = e.getParameter(34921),
        a = r.isWebGL2 ? null : t.get('OES_vertex_array_object'),
        s = r.isWebGL2 ||
            null !== a,
        o = {},
        l = d(null);
    let c = l;
    function h(t) {
        return r.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)
    }
    function u(t) {
        return r.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)
    }
    function d(e) {
        const t = [],
            n = [],
            r = [];
        for (let e = 0; e < i; e++) t[e] = 0,
            n[e] = 0,
            r[e] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: t,
            enabledAttributes: n,
            attributeDivisors: r,
            object: e,
            attributes: {
            },
            index: null
        }
    }
    function p() {
        const e = c.newAttributes;
        for (let t = 0, n = e.length; t < n; t++) e[t] = 0
    }
    function m(e) {
        f(e, 0)
    }
    function f(n, i) {
        const a = c.newAttributes,
            s = c.enabledAttributes,
            o = c.attributeDivisors;
        if (
            a[n] = 1,
            0 === s[n] &&
            (e.enableVertexAttribArray(n), s[n] = 1),
            o[n] !== i
        ) {
            (r.isWebGL2 ? e : t.get('ANGLE_instanced_arrays')) [r.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](n, i),
                o[n] = i
        }
    }
    function g() {
        const t = c.newAttributes,
            n = c.enabledAttributes;
        for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] &&
        (e.disableVertexAttribArray(r), n[r] = 0)
    }
    function v(t, n, i, a, s, o) {
        !0 !== r.isWebGL2 ||
        5124 !== i &&
        5125 !== i ? e.vertexAttribPointer(t, n, i, a, s, o) : e.vertexAttribIPointer(t, n, i, s, o)
    }
    function _() {
        x(),
        c !== l &&
        (c = l, h(c.object))
    }
    function x() {
        l.geometry = null,
            l.program = null,
            l.wireframe = !1
    }
    return {
        setup: function (i, l, u, _, x) {
            let y = !1;
            if (s) {
                const t = function (t, n, i) {
                    const s = !0 === i.wireframe;
                    let l = o[t.id];
                    void 0 === l &&
                    (l = {}, o[t.id] = l);
                    let c = l[n.id];
                    void 0 === c &&
                    (c = {}, l[n.id] = c);
                    let h = c[s];
                    void 0 === h &&
                    (
                        h = d(r.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()),
                            c[s] = h
                    );
                    return h
                }(_, u, l);
                c !== t &&
                (c = t, h(c.object)),
                    y = function (e, t) {
                        const n = c.attributes,
                            r = e.attributes;
                        let i = 0;
                        for (const e in r) {
                            const t = n[e],
                                a = r[e];
                            if (void 0 === t) return !0;
                            if (t.attribute !== a) return !0;
                            if (t.data !== a.data) return !0;
                            i++
                        }
                        return c.attributesNum !== i ||
                            c.index !== t
                    }(_, x),
                y &&
                function (e, t) {
                    const n = {},
                        r = e.attributes;
                    let i = 0;
                    for (const e in r) {
                        const t = r[e],
                            a = {};
                        a.attribute = t,
                        t.data &&
                        (a.data = t.data),
                            n[e] = a,
                            i++
                    }
                    c.attributes = n,
                        c.attributesNum = i,
                        c.index = t
                }(_, x)
            } else {
                const e = !0 === l.wireframe;
                c.geometry === _.id &&
                c.program === u.id &&
                c.wireframe === e ||
                (c.geometry = _.id, c.program = u.id, c.wireframe = e, y = !0)
            }
            !0 === i.isInstancedMesh &&
            (y = !0),
            null !== x &&
            n.update(x, 34963),
            y &&
            (
                !function (i, a, s, o) {
                    if (
                        !1 === r.isWebGL2 &&
                        (i.isInstancedMesh || o.isInstancedBufferGeometry) &&
                        null === t.get('ANGLE_instanced_arrays')
                    ) return;
                    p();
                    const l = o.attributes,
                        c = s.getAttributes(),
                        h = a.defaultAttributeValues;
                    for (const t in c) {
                        const r = c[t];
                        if (r >= 0) {
                            const a = l[t];
                            if (void 0 !== a) {
                                const t = a.normalized,
                                    i = a.itemSize,
                                    s = n.get(a);
                                if (void 0 === s) continue;
                                const l = s.buffer,
                                    c = s.type,
                                    h = s.bytesPerElement;
                                if (a.isInterleavedBufferAttribute) {
                                    const n = a.data,
                                        s = n.stride,
                                        u = a.offset;
                                    n &&
                                    n.isInstancedInterleavedBuffer ? (
                                        f(r, n.meshPerAttribute),
                                        void 0 === o._maxInstanceCount &&
                                        (o._maxInstanceCount = n.meshPerAttribute * n.count)
                                    ) : m(r),
                                        e.bindBuffer(34962, l),
                                        v(r, i, c, t, s * h, u * h)
                                } else a.isInstancedBufferAttribute ? (
                                    f(r, a.meshPerAttribute),
                                    void 0 === o._maxInstanceCount &&
                                    (o._maxInstanceCount = a.meshPerAttribute * a.count)
                                ) : m(r),
                                    e.bindBuffer(34962, l),
                                    v(r, i, c, t, 0, 0)
                            } else if ('instanceMatrix' === t) {
                                const t = n.get(i.instanceMatrix);
                                if (void 0 === t) continue;
                                const a = t.buffer,
                                    s = t.type;
                                f(r + 0, 1),
                                    f(r + 1, 1),
                                    f(r + 2, 1),
                                    f(r + 3, 1),
                                    e.bindBuffer(34962, a),
                                    e.vertexAttribPointer(r + 0, 4, s, !1, 64, 0),
                                    e.vertexAttribPointer(r + 1, 4, s, !1, 64, 16),
                                    e.vertexAttribPointer(r + 2, 4, s, !1, 64, 32),
                                    e.vertexAttribPointer(r + 3, 4, s, !1, 64, 48)
                            } else if ('instanceColor' === t) {
                                const t = n.get(i.instanceColor);
                                if (void 0 === t) continue;
                                const a = t.buffer,
                                    s = t.type;
                                f(r, 1),
                                    e.bindBuffer(34962, a),
                                    e.vertexAttribPointer(r, 3, s, !1, 12, 0)
                            } else if (void 0 !== h) {
                                const n = h[t];
                                if (void 0 !== n) switch (n.length) {
                                    case 2:
                                        e.vertexAttrib2fv(r, n);
                                        break;
                                    case 3:
                                        e.vertexAttrib3fv(r, n);
                                        break;
                                    case 4:
                                        e.vertexAttrib4fv(r, n);
                                        break;
                                    default:
                                        e.vertexAttrib1fv(r, n)
                                }
                            }
                        }
                    }
                    g()
                }(i, l, u, _),
                null !== x &&
                e.bindBuffer(34963, n.get(x).buffer)
            )
        },
        reset: _,
        resetDefaultState: x,
        dispose: function () {
            _();
            for (const e in o) {
                const t = o[e];
                for (const e in t) {
                    const n = t[e];
                    for (const e in n) u(n[e].object),
                        delete n[e];
                    delete t[e]
                }
                delete o[e]
            }
        },
        releaseStatesOfGeometry: function (e) {
            if (void 0 === o[e.id]) return;
            const t = o[e.id];
            for (const e in t) {
                const n = t[e];
                for (const e in n) u(n[e].object),
                    delete n[e];
                delete t[e]
            }
            delete o[e.id]
        },
        releaseStatesOfProgram: function (e) {
            for (const t in o) {
                const n = o[t];
                if (void 0 === n[e.id]) continue;
                const r = n[e.id];
                for (const e in r) u(r[e].object),
                    delete r[e];
                delete n[e.id]
            }
        },
        initAttributes: p,
        enableAttribute: m,
        disableUnusedAttributes: g
    }
}
function WebGLBufferRenderer(e, t, n, r) {
    const i = r.isWebGL2;
    let a;
    this.setMode = function (e) {
        a = e
    },
        this.render = function (t, r) {
            e.drawArrays(a, t, r),
                n.update(r, a, 1)
        },
        this.renderInstances = function (r, s, o) {
            if (0 === o) return;
            let l,
                c;
            if (i) l = e,
                c = 'drawArraysInstanced';
            else if (
                l = t.get('ANGLE_instanced_arrays'),
                    c = 'drawArraysInstancedANGLE',
                null === l
            ) return void console.error(
                    'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
                );
            l[c](a, r, s, o),
                n.update(s, a, o)
        }
}
function WebGLCapabilities(e, t, n) {
    let r;
    function i(t) {
        if ('highp' === t) {
            if (
                e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
                e.getShaderPrecisionFormat(35632, 36338).precision > 0
            ) return 'highp';
            t = 'mediump'
        }
        return 'mediump' === t &&
        e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? 'mediump' : 'lowp'
    }
    const a = 'undefined' != typeof WebGL2RenderingContext &&
        e instanceof WebGL2RenderingContext ||
        'undefined' != typeof WebGL2ComputeRenderingContext &&
        e instanceof WebGL2ComputeRenderingContext;
    let s = void 0 !== n.precision ? n.precision : 'highp';
    const o = i(s);
    o !== s &&
    (
        console.warn('THREE.WebGLRenderer:', s, 'not supported, using', o, 'instead.'),
            s = o
    );
    const l = !0 === n.logarithmicDepthBuffer,
        c = e.getParameter(34930),
        h = e.getParameter(35660),
        u = e.getParameter(3379),
        d = e.getParameter(34076),
        p = e.getParameter(34921),
        m = e.getParameter(36347),
        f = e.getParameter(36348),
        g = e.getParameter(36349),
        v = h > 0,
        _ = a ||
            t.has('OES_texture_float');
    return {
        isWebGL2: a,
        getMaxAnisotropy: function () {
            if (void 0 !== r) return r;
            if (!0 === t.has('EXT_texture_filter_anisotropic')) {
                const n = t.get('EXT_texture_filter_anisotropic');
                r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else r = 0;
            return r
        },
        getMaxPrecision: i,
        precision: s,
        logarithmicDepthBuffer: l,
        maxTextures: c,
        maxVertexTextures: h,
        maxTextureSize: u,
        maxCubemapSize: d,
        maxAttributes: p,
        maxVertexUniforms: m,
        maxVaryings: f,
        maxFragmentUniforms: g,
        vertexTextures: v,
        floatFragmentTextures: _,
        floatVertexTextures: v &&
            _,
        maxSamples: a ? e.getParameter(36183) : 0
    }
}
function WebGLClipping(e) {
    const t = this;
    let n = null,
        r = 0,
        i = !1,
        a = !1;
    const s = new Plane,
        o = new Matrix3,
        l = {
            value: null,
            needsUpdate: !1
        };
    function c() {
        l.value !== n &&
        (l.value = n, l.needsUpdate = r > 0),
            t.numPlanes = r,
            t.numIntersection = 0
    }
    function h(e, n, r, i) {
        const a = null !== e ? e.length : 0;
        let c = null;
        if (0 !== a) {
            if (c = l.value, !0 !== i || null === c) {
                const t = r + 4 * a,
                    i = n.matrixWorldInverse;
                o.getNormalMatrix(i),
                (null === c || c.length < t) &&
                (c = new Float32Array(t));
                for (let t = 0, n = r; t !== a; ++t, n += 4) s.copy(e[t]).applyMatrix4(i, o),
                    s.normal.toArray(c, n),
                    c[n + 3] = s.constant
            }
            l.value = c,
                l.needsUpdate = !0
        }
        return t.numPlanes = a,
            t.numIntersection = 0,
            c
    }
    this.uniform = l,
        this.numPlanes = 0,
        this.numIntersection = 0,
        this.init = function (e, t, a) {
            const s = 0 !== e.length ||
                t ||
                0 !== r ||
                i;
            return i = t,
                n = h(e, a, 0),
                r = e.length,
                s
        },
        this.beginShadows = function () {
            a = !0,
                h(null)
        },
        this.endShadows = function () {
            a = !1,
                c()
        },
        this.setState = function (t, s, o) {
            const u = t.clippingPlanes,
                d = t.clipIntersection,
                p = t.clipShadows,
                m = e.get(t);
            if (!i || null === u || 0 === u.length || a && !p) a ? h(null) : c();
            else {
                const e = a ? 0 : r,
                    t = 4 * e;
                let i = m.clippingState ||
                    null;
                l.value = i,
                    i = h(u, s, t, o);
                for (let e = 0; e !== t; ++e) i[e] = n[e];
                m.clippingState = i,
                    this.numIntersection = d ? this.numPlanes : 0,
                    this.numPlanes += e
            }
        }
}
function WebGLCubeMaps(e) {
    let t = new WeakMap;
    function n(e, t) {
        return 303 === t ? e.mapping = 301 : 304 === t &&
            (e.mapping = 302),
            e
    }
    function r(e) {
        const n = e.target;
        n.removeEventListener('dispose', r);
        const i = t.get(n);
        void 0 !== i &&
        (t.delete(n), i.dispose())
    }
    return {
        get: function (i) {
            if (i && i.isTexture) {
                const a = i.mapping;
                if (303 === a || 304 === a) {
                    if (t.has(i)) {
                        return n(t.get(i).texture, i.mapping)
                    }
                    {
                        const a = i.image;
                        if (a && a.height > 0) {
                            const s = e.getRenderTarget(),
                                o = new WebGLCubeRenderTarget(a.height / 2);
                            return o.fromEquirectangularTexture(e, i),
                                t.set(i, o),
                                e.setRenderTarget(s),
                                i.addEventListener('dispose', r),
                                n(o.texture, i.mapping)
                        }
                        return null
                    }
                }
            }
            return i
        },
        dispose: function () {
            t = new WeakMap
        }
    }
}
function WebGLExtensions(e) {
    const t = {};
    function n(n) {
        if (void 0 !== t[n]) return t[n];
        let r;
        switch (n) {
            case 'WEBGL_depth_texture':
                r = e.getExtension('WEBGL_depth_texture') ||
                    e.getExtension('MOZ_WEBGL_depth_texture') ||
                    e.getExtension('WEBKIT_WEBGL_depth_texture');
                break;
            case 'EXT_texture_filter_anisotropic':
                r = e.getExtension('EXT_texture_filter_anisotropic') ||
                    e.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
                    e.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
                break;
            case 'WEBGL_compressed_texture_s3tc':
                r = e.getExtension('WEBGL_compressed_texture_s3tc') ||
                    e.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
                    e.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
                break;
            case 'WEBGL_compressed_texture_pvrtc':
                r = e.getExtension('WEBGL_compressed_texture_pvrtc') ||
                    e.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
                break;
            default:
                r = e.getExtension(n)
        }
        return t[n] = r,
            r
    }
    return {
        has: function (e) {
            return null !== n(e)
        },
        init: function (e) {
            e.isWebGL2 ? n('EXT_color_buffer_float') : (
                n('WEBGL_depth_texture'),
                    n('OES_texture_float'),
                    n('OES_texture_half_float'),
                    n('OES_texture_half_float_linear'),
                    n('OES_standard_derivatives'),
                    n('OES_element_index_uint'),
                    n('OES_vertex_array_object'),
                    n('ANGLE_instanced_arrays')
            ),
                n('OES_texture_float_linear'),
                n('EXT_color_buffer_half_float')
        },
        get: function (e) {
            const t = n(e);
            return null === t &&
            console.warn('THREE.WebGLRenderer: ' + e + ' extension not supported.'),
                t
        }
    }
}
function WebGLGeometries(e, t, n, r) {
    const i = {},
        a = new WeakMap;
    function s(e) {
        const o = e.target;
        null !== o.index &&
        t.remove(o.index);
        for (const e in o.attributes) t.remove(o.attributes[e]);
        o.removeEventListener('dispose', s),
            delete i[o.id];
        const l = a.get(o);
        l &&
        (t.remove(l), a.delete(o)),
            r.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry &&
        delete o._maxInstanceCount,
            n.memory.geometries--
    }
    function o(e) {
        const n = [],
            r = e.index,
            i = e.attributes.position;
        let s = 0;
        if (null !== r) {
            const e = r.array;
            s = r.version;
            for (let t = 0, r = e.length; t < r; t += 3) {
                const r = e[t + 0],
                    i = e[t + 1],
                    a = e[t + 2];
                n.push(r, i, i, a, a, r)
            }
        } else {
            const e = i.array;
            s = i.version;
            for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
                const e = t + 0,
                    r = t + 1,
                    i = t + 2;
                n.push(e, r, r, i, i, e)
            }
        }
        const o = new (
            arrayMax(n) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute
        ) (n, 1);
        o.version = s;
        const l = a.get(e);
        l &&
        t.remove(l),
            a.set(e, o)
    }
    return {
        get: function (e, t) {
            return !0 === i[t.id] ||
            (
                t.addEventListener('dispose', s),
                    i[t.id] = !0,
                    n.memory.geometries++
            ),
                t
        },
        update: function (e) {
            const n = e.attributes;
            for (const e in n) t.update(n[e], 34962);
            const r = e.morphAttributes;
            for (const e in r) {
                const n = r[e];
                for (let e = 0, r = n.length; e < r; e++) t.update(n[e], 34962)
            }
        },
        getWireframeAttribute: function (e) {
            const t = a.get(e);
            if (t) {
                const n = e.index;
                null !== n &&
                t.version < n.version &&
                o(e)
            } else o(e);
            return a.get(e)
        }
    }
}
function WebGLIndexedBufferRenderer(e, t, n, r) {
    const i = r.isWebGL2;
    let a,
        s,
        o;
    this.setMode = function (e) {
        a = e
    },
        this.setIndex = function (e) {
            s = e.type,
                o = e.bytesPerElement
        },
        this.render = function (t, r) {
            e.drawElements(a, r, s, t * o),
                n.update(r, a, 1)
        },
        this.renderInstances = function (r, l, c) {
            if (0 === c) return;
            let h,
                u;
            if (i) h = e,
                u = 'drawElementsInstanced';
            else if (
                h = t.get('ANGLE_instanced_arrays'),
                    u = 'drawElementsInstancedANGLE',
                null === h
            ) return void console.error(
                    'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
                );
            h[u](a, l, s, r * o, c),
                n.update(l, a, c)
        }
}
function WebGLInfo(e) {
    const t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    return {
        memory: {
            geometries: 0,
            textures: 0
        },
        render: t,
        programs: null,
        autoReset: !0,
        reset: function () {
            t.frame++,
                t.calls = 0,
                t.triangles = 0,
                t.points = 0,
                t.lines = 0
        },
        update: function (e, n, r) {
            switch (t.calls++, n) {
                case 4:
                    t.triangles += r * (e / 3);
                    break;
                case 1:
                    t.lines += r * (e / 2);
                    break;
                case 3:
                    t.lines += r * (e - 1);
                    break;
                case 2:
                    t.lines += r * e;
                    break;
                case 0:
                    t.points += r * e;
                    break;
                default:
                    console.error('THREE.WebGLInfo: Unknown draw mode:', n)
            }
        }
    }
}
function numericalSort(e, t) {
    return e[0] - t[0]
}
function absNumericalSort(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1])
}
function WebGLMorphtargets(e) {
    const t = {},
        n = new Float32Array(8),
        r = [];
    for (let e = 0; e < 8; e++) r[e] = [
        e,
        0
    ];
    return {
        update: function (i, a, s, o) {
            const l = i.morphTargetInfluences,
                c = void 0 === l ? 0 : l.length;
            let h = t[a.id];
            if (void 0 === h) {
                h = [];
                for (let e = 0; e < c; e++) h[e] = [
                    e,
                    0
                ];
                t[a.id] = h
            }
            for (let e = 0; e < c; e++) {
                const t = h[e];
                t[0] = e,
                    t[1] = l[e]
            }
            h.sort(absNumericalSort);
            for (let e = 0; e < 8; e++) e < c &&
            h[e][1] ? (r[e][0] = h[e][0], r[e][1] = h[e][1]) : (r[e][0] = Number.MAX_SAFE_INTEGER, r[e][1] = 0);
            r.sort(numericalSort);
            const u = s.morphTargets &&
                    a.morphAttributes.position,
                d = s.morphNormals &&
                    a.morphAttributes.normal;
            let p = 0;
            for (let e = 0; e < 8; e++) {
                const t = r[e],
                    i = t[0],
                    s = t[1];
                i !== Number.MAX_SAFE_INTEGER &&
                s ? (
                    u &&
                    a.getAttribute('morphTarget' + e) !== u[i] &&
                    a.setAttribute('morphTarget' + e, u[i]),
                    d &&
                    a.getAttribute('morphNormal' + e) !== d[i] &&
                    a.setAttribute('morphNormal' + e, d[i]),
                        n[e] = s,
                        p += s
                ) : (
                    u &&
                    !0 === a.hasAttribute('morphTarget' + e) &&
                    a.deleteAttribute('morphTarget' + e),
                    d &&
                    !0 === a.hasAttribute('morphNormal' + e) &&
                    a.deleteAttribute('morphNormal' + e),
                        n[e] = 0
                )
            }
            const m = a.morphTargetsRelative ? 1 : 1 - p;
            o.getUniforms().setValue(e, 'morphTargetBaseInfluence', m),
                o.getUniforms().setValue(e, 'morphTargetInfluences', n)
        }
    }
}
function WebGLObjects(e, t, n, r) {
    let i = new WeakMap;
    function a(e) {
        const t = e.target;
        t.removeEventListener('dispose', a),
            n.remove(t.instanceMatrix),
        null !== t.instanceColor &&
        n.remove(t.instanceColor)
    }
    return {
        update: function (e) {
            const s = r.render.frame,
                o = e.geometry,
                l = t.get(e, o);
            return i.get(l) !== s &&
            (t.update(l), i.set(l, s)),
            e.isInstancedMesh &&
            (
                !1 === e.hasEventListener('dispose', a) &&
                e.addEventListener('dispose', a),
                    n.update(e.instanceMatrix, 34962),
                null !== e.instanceColor &&
                n.update(e.instanceColor, 34962)
            ),
                l
        },
        dispose: function () {
            i = new WeakMap
        }
    }
}
ShaderLib.physical = {
    uniforms: mergeUniforms(
        [ShaderLib.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new Vector2(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                sheen: {
                    value: new Color(0)
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                }
            }
        ]
    ),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
};
class DataTexture2DArray extends Texture {
    constructor(e = null, t = 1, n = 1, r = 1) {
        super (null),
            this.image = {
                data: e,
                width: t,
                height: n,
                depth: r
            },
            this.magFilter = 1003,
            this.minFilter = 1003,
            this.wrapR = 1001,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1,
            this.needsUpdate = !0
    }
}
DataTexture2DArray.prototype.isDataTexture2DArray = !0;
class DataTexture3D extends Texture {
    constructor(e = null, t = 1, n = 1, r = 1) {
        super (null),
            this.image = {
                data: e,
                width: t,
                height: n,
                depth: r
            },
            this.magFilter = 1003,
            this.minFilter = 1003,
            this.wrapR = 1001,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1,
            this.needsUpdate = !0
    }
}
DataTexture3D.prototype.isDataTexture3D = !0;
const emptyTexture = new Texture,
    emptyTexture2dArray = new DataTexture2DArray,
    emptyTexture3d = new DataTexture3D,
    emptyCubeTexture = new CubeTexture,
    arrayCacheF32 = [],
    arrayCacheI32 = [],
    mat4array = new Float32Array(16),
    mat3array = new Float32Array(9),
    mat2array = new Float32Array(4);
function flatten(e, t, n) {
    const r = e[0];
    if (r <= 0 || r > 0) return e;
    const i = t * n;
    let a = arrayCacheF32[i];
    if (void 0 === a && (a = new Float32Array(i), arrayCacheF32[i] = a), 0 !== t) {
        r.toArray(a, 0);
        for (let r = 1, i = 0; r !== t; ++r) i += n,
            e[r].toArray(a, i)
    }
    return a
}
function arraysEqual(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
    return !0
}
function copyArray(e, t) {
    for (let n = 0, r = t.length; n < r; n++) e[n] = t[n]
}
function allocTexUnits(e, t) {
    let n = arrayCacheI32[t];
    void 0 === n &&
    (n = new Int32Array(t), arrayCacheI32[t] = n);
    for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
    return n
}
function setValueV1f(e, t) {
    const n = this.cache;
    n[0] !== t &&
    (e.uniform1f(this.addr, t), n[0] = t)
}
function setValueV2f(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x &&
    n[1] === t.y ||
    (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
    else {
        if (arraysEqual(n, t)) return;
        e.uniform2fv(this.addr, t),
            copyArray(n, t)
    }
}
function setValueV3f(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x &&
    n[1] === t.y &&
    n[2] === t.z ||
    (
        e.uniform3f(this.addr, t.x, t.y, t.z),
            n[0] = t.x,
            n[1] = t.y,
            n[2] = t.z
    );
    else if (void 0 !== t.r) n[0] === t.r &&
    n[1] === t.g &&
    n[2] === t.b ||
    (
        e.uniform3f(this.addr, t.r, t.g, t.b),
            n[0] = t.r,
            n[1] = t.g,
            n[2] = t.b
    );
    else {
        if (arraysEqual(n, t)) return;
        e.uniform3fv(this.addr, t),
            copyArray(n, t)
    }
}
function setValueV4f(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x &&
    n[1] === t.y &&
    n[2] === t.z &&
    n[3] === t.w ||
    (
        e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
            n[0] = t.x,
            n[1] = t.y,
            n[2] = t.z,
            n[3] = t.w
    );
    else {
        if (arraysEqual(n, t)) return;
        e.uniform4fv(this.addr, t),
            copyArray(n, t)
    }
}
function setValueM2(e, t) {
    const n = this.cache,
        r = t.elements;
    if (void 0 === r) {
        if (arraysEqual(n, t)) return;
        e.uniformMatrix2fv(this.addr, !1, t),
            copyArray(n, t)
    } else {
        if (arraysEqual(n, r)) return;
        mat2array.set(r),
            e.uniformMatrix2fv(this.addr, !1, mat2array),
            copyArray(n, r)
    }
}
function setValueM3(e, t) {
    const n = this.cache,
        r = t.elements;
    if (void 0 === r) {
        if (arraysEqual(n, t)) return;
        e.uniformMatrix3fv(this.addr, !1, t),
            copyArray(n, t)
    } else {
        if (arraysEqual(n, r)) return;
        mat3array.set(r),
            e.uniformMatrix3fv(this.addr, !1, mat3array),
            copyArray(n, r)
    }
}
function setValueM4(e, t) {
    const n = this.cache,
        r = t.elements;
    if (void 0 === r) {
        if (arraysEqual(n, t)) return;
        e.uniformMatrix4fv(this.addr, !1, t),
            copyArray(n, t)
    } else {
        if (arraysEqual(n, r)) return;
        mat4array.set(r),
            e.uniformMatrix4fv(this.addr, !1, mat4array),
            copyArray(n, r)
    }
}
function setValueV1i(e, t) {
    const n = this.cache;
    n[0] !== t &&
    (e.uniform1i(this.addr, t), n[0] = t)
}
function setValueV2i(e, t) {
    const n = this.cache;
    arraysEqual(n, t) ||
    (e.uniform2iv(this.addr, t), copyArray(n, t))
}
function setValueV3i(e, t) {
    const n = this.cache;
    arraysEqual(n, t) ||
    (e.uniform3iv(this.addr, t), copyArray(n, t))
}
function setValueV4i(e, t) {
    const n = this.cache;
    arraysEqual(n, t) ||
    (e.uniform4iv(this.addr, t), copyArray(n, t))
}
function setValueV1ui(e, t) {
    const n = this.cache;
    n[0] !== t &&
    (e.uniform1ui(this.addr, t), n[0] = t)
}
function setValueV2ui(e, t) {
    const n = this.cache;
    arraysEqual(n, t) ||
    (e.uniform2uiv(this.addr, t), copyArray(n, t))
}
function setValueV3ui(e, t) {
    const n = this.cache;
    arraysEqual(n, t) ||
    (e.uniform3uiv(this.addr, t), copyArray(n, t))
}
function setValueV4ui(e, t) {
    const n = this.cache;
    arraysEqual(n, t) ||
    (e.uniform4uiv(this.addr, t), copyArray(n, t))
}
function setValueT1(e, t, n) {
    const r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i &&
    (e.uniform1i(this.addr, i), r[0] = i),
        n.safeSetTexture2D(t || emptyTexture, i)
}
function setValueT3D1(e, t, n) {
    const r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i &&
    (e.uniform1i(this.addr, i), r[0] = i),
        n.setTexture3D(t || emptyTexture3d, i)
}
function setValueT6(e, t, n) {
    const r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i &&
    (e.uniform1i(this.addr, i), r[0] = i),
        n.safeSetTextureCube(t || emptyCubeTexture, i)
}
function setValueT2DArray1(e, t, n) {
    const r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i &&
    (e.uniform1i(this.addr, i), r[0] = i),
        n.setTexture2DArray(t || emptyTexture2dArray, i)
}
function getSingularSetter(e) {
    switch (e) {
        case 5126:
            return setValueV1f;
        case 35664:
            return setValueV2f;
        case 35665:
            return setValueV3f;
        case 35666:
            return setValueV4f;
        case 35674:
            return setValueM2;
        case 35675:
            return setValueM3;
        case 35676:
            return setValueM4;
        case 5124:
        case 35670:
            return setValueV1i;
        case 35667:
        case 35671:
            return setValueV2i;
        case 35668:
        case 35672:
            return setValueV3i;
        case 35669:
        case 35673:
            return setValueV4i;
        case 5125:
            return setValueV1ui;
        case 36294:
            return setValueV2ui;
        case 36295:
            return setValueV3ui;
        case 36296:
            return setValueV4ui;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return setValueT1;
        case 35679:
        case 36299:
        case 36307:
            return setValueT3D1;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return setValueT6;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return setValueT2DArray1
    }
}
function setValueV1fArray(e, t) {
    e.uniform1fv(this.addr, t)
}
function setValueV2fArray(e, t) {
    const n = flatten(t, this.size, 2);
    e.uniform2fv(this.addr, n)
}
function setValueV3fArray(e, t) {
    const n = flatten(t, this.size, 3);
    e.uniform3fv(this.addr, n)
}
function setValueV4fArray(e, t) {
    const n = flatten(t, this.size, 4);
    e.uniform4fv(this.addr, n)
}
function setValueM2Array(e, t) {
    const n = flatten(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n)
}
function setValueM3Array(e, t) {
    const n = flatten(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n)
}
function setValueM4Array(e, t) {
    const n = flatten(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n)
}
function setValueV1iArray(e, t) {
    e.uniform1iv(this.addr, t)
}
function setValueV2iArray(e, t) {
    e.uniform2iv(this.addr, t)
}
function setValueV3iArray(e, t) {
    e.uniform3iv(this.addr, t)
}
function setValueV4iArray(e, t) {
    e.uniform4iv(this.addr, t)
}
function setValueV1uiArray(e, t) {
    e.uniform1uiv(this.addr, t)
}
function setValueV2uiArray(e, t) {
    e.uniform2uiv(this.addr, t)
}
function setValueV3uiArray(e, t) {
    e.uniform3uiv(this.addr, t)
}
function setValueV4uiArray(e, t) {
    e.uniform4uiv(this.addr, t)
}
function setValueT1Array(e, t, n) {
    const r = t.length,
        i = allocTexUnits(n, r);
    e.uniform1iv(this.addr, i);
    for (let e = 0; e !== r; ++e) n.safeSetTexture2D(t[e] || emptyTexture, i[e])
}
function setValueT6Array(e, t, n) {
    const r = t.length,
        i = allocTexUnits(n, r);
    e.uniform1iv(this.addr, i);
    for (let e = 0; e !== r; ++e) n.safeSetTextureCube(t[e] || emptyCubeTexture, i[e])
}
function getPureArraySetter(e) {
    switch (e) {
        case 5126:
            return setValueV1fArray;
        case 35664:
            return setValueV2fArray;
        case 35665:
            return setValueV3fArray;
        case 35666:
            return setValueV4fArray;
        case 35674:
            return setValueM2Array;
        case 35675:
            return setValueM3Array;
        case 35676:
            return setValueM4Array;
        case 5124:
        case 35670:
            return setValueV1iArray;
        case 35667:
        case 35671:
            return setValueV2iArray;
        case 35668:
        case 35672:
            return setValueV3iArray;
        case 35669:
        case 35673:
            return setValueV4iArray;
        case 5125:
            return setValueV1uiArray;
        case 36294:
            return setValueV2uiArray;
        case 36295:
            return setValueV3uiArray;
        case 36296:
            return setValueV4uiArray;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return setValueT1Array;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return setValueT6Array
    }
}
function SingleUniform(e, t, n) {
    this.id = e,
        this.addr = n,
        this.cache = [],
        this.setValue = getSingularSetter(t.type)
}
function PureArrayUniform(e, t, n) {
    this.id = e,
        this.addr = n,
        this.cache = [],
        this.size = t.size,
        this.setValue = getPureArraySetter(t.type)
}
function StructuredUniform(e) {
    this.id = e,
        this.seq = [],
        this.map = {}
}
PureArrayUniform.prototype.updateCache = function (e) {
    const t = this.cache;
    e instanceof Float32Array &&
    t.length !== e.length &&
    (this.cache = new Float32Array(e.length)),
        copyArray(t, e)
},
    StructuredUniform.prototype.setValue = function (e, t, n) {
        const r = this.seq;
        for (let i = 0, a = r.length; i !== a; ++i) {
            const a = r[i];
            a.setValue(e, t[a.id], n)
        }
    };
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(e, t) {
    e.seq.push(t),
        e.map[t.id] = t
}
function parseUniform(e, t, n) {
    const r = e.name,
        i = r.length;
    for (RePathPart.lastIndex = 0; ; ) {
        const a = RePathPart.exec(r),
            s = RePathPart.lastIndex;
        let o = a[1];
        const l = ']' === a[2],
            c = a[3];
        if (l && (o |= 0), void 0 === c || '[' === c && s + 2 === i) {
            addUniform(
                n,
                void 0 === c ? new SingleUniform(o, e, t) : new PureArrayUniform(o, e, t)
            );
            break
        }
        {
            let e = n.map[o];
            void 0 === e &&
            (e = new StructuredUniform(o), addUniform(n, e)),
                n = e
        }
    }
}
function WebGLUniforms(e, t) {
    this.seq = [],
        this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let r = 0; r < n; ++r) {
        const n = e.getActiveUniform(t, r);
        parseUniform(n, e.getUniformLocation(t, n.name), this)
    }
}
function WebGLShader(e, t, n) {
    const r = e.createShader(t);
    return e.shaderSource(r, n),
        e.compileShader(r),
        r
}
WebGLUniforms.prototype.setValue = function (e, t, n, r) {
    const i = this.map[t];
    void 0 !== i &&
    i.setValue(e, n, r)
},
    WebGLUniforms.prototype.setOptional = function (e, t, n) {
        const r = t[n];
        void 0 !== r &&
        this.setValue(e, n, r)
    },
    WebGLUniforms.upload = function (e, t, n, r) {
        for (let i = 0, a = t.length; i !== a; ++i) {
            const a = t[i],
                s = n[a.id];
            !1 !== s.needsUpdate &&
            a.setValue(e, s.value, r)
        }
    },
    WebGLUniforms.seqWithValue = function (e, t) {
        const n = [];
        for (let r = 0, i = e.length; r !== i; ++r) {
            const i = e[r];
            i.id in t &&
            n.push(i)
        }
        return n
    };
let programIdCount = 0;
function addLineNumbers(e) {
    const t = e.split('\n');
    for (let e = 0; e < t.length; e++) t[e] = e + 1 + ': ' + t[e];
    return t.join('\n')
}
function getEncodingComponents(e) {
    switch (e) {
        case 3000:
            return ['Linear',
                '( value )'];
        case 3001:
            return ['sRGB',
                '( value )'];
        case 3002:
            return ['RGBE',
                '( value )'];
        case 3004:
            return ['RGBM',
                '( value, 7.0 )'];
        case 3005:
            return ['RGBM',
                '( value, 16.0 )'];
        case 3006:
            return ['RGBD',
                '( value, 256.0 )'];
        case 3007:
            return ['Gamma',
                '( value, float( GAMMA_FACTOR ) )'];
        case 3003:
            return ['LogLuv',
                '( value )'];
        default:
            return console.warn('THREE.WebGLProgram: Unsupported encoding:', e),
                [
                    'Linear',
                    '( value )'
                ]
    }
}
function getShaderErrors(e, t, n) {
    const r = e.getShaderParameter(t, 35713),
        i = e.getShaderInfoLog(t).trim();
    if (r && '' === i) return '';
    return 'THREE.WebGLShader: gl.getShaderInfoLog() ' + n + '\n' + i + addLineNumbers(e.getShaderSource(t))
}
function getTexelDecodingFunction(e, t) {
    const n = getEncodingComponents(t);
    return 'vec4 ' + e + '( vec4 value ) { return ' + n[0] + 'ToLinear' + n[1] + '; }'
}
function getTexelEncodingFunction(e, t) {
    const n = getEncodingComponents(t);
    return 'vec4 ' + e + '( vec4 value ) { return LinearTo' + n[0] + n[1] + '; }'
}
function getToneMappingFunction(e, t) {
    let n;
    switch (t) {
        case 1:
            n = 'Linear';
            break;
        case 2:
            n = 'Reinhard';
            break;
        case 3:
            n = 'OptimizedCineon';
            break;
        case 4:
            n = 'ACESFilmic';
            break;
        case 5:
            n = 'Custom';
            break;
        default:
            console.warn('THREE.WebGLProgram: Unsupported toneMapping:', t),
                n = 'Linear'
    }
    return 'vec3 ' + e + '( vec3 color ) { return ' + n + 'ToneMapping( color ); }'
}
function generateExtensions(e) {
    return [e.extensionDerivatives ||
    e.envMapCubeUV ||
    e.bumpMap ||
    e.tangentSpaceNormalMap ||
    e.clearcoatNormalMap ||
    e.flatShading ||
    'physical' === e.shaderID ? '#extension GL_OES_standard_derivatives : enable' : '',
        (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
        e.rendererExtensionFragDepth ? '#extension GL_EXT_frag_depth : enable' : '',
        e.extensionDrawBuffers &&
        e.rendererExtensionDrawBuffers ? '#extension GL_EXT_draw_buffers : require' : '',
        (e.extensionShaderTextureLOD || e.envMap) &&
        e.rendererExtensionShaderTextureLod ? '#extension GL_EXT_shader_texture_lod : enable' : ''].filter(filterEmptyLine).join('\n')
}
function generateDefines(e) {
    const t = [];
    for (const n in e) {
        const r = e[n];
        !1 !== r &&
        t.push('#define ' + n + ' ' + r)
    }
    return t.join('\n')
}
function fetchAttributeLocations(e, t) {
    const n = {},
        r = e.getProgramParameter(t, 35721);
    for (let i = 0; i < r; i++) {
        const r = e.getActiveAttrib(t, i).name;
        n[r] = e.getAttribLocation(t, r)
    }
    return n
}
function filterEmptyLine(e) {
    return '' !== e
}
function replaceLightNums(e, t) {
    return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function replaceClippingPlaneNums(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(
        /UNION_CLIPPING_PLANES/g,
        t.numClippingPlanes - t.numClipIntersection
    )
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(e) {
    return e.replace(includePattern, includeReplacer)
}
function includeReplacer(e, t) {
    const n = ShaderChunk[t];
    if (void 0 === n) throw new Error('Can not resolve #include <' + t + '>');
    return resolveIncludes(n)
}
const deprecatedUnrollLoopPattern = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(e) {
    return e.replace(unrollLoopPattern, loopReplacer).replace(deprecatedUnrollLoopPattern, deprecatedLoopReplacer)
}
function deprecatedLoopReplacer(e, t, n, r) {
    return console.warn(
        'WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.'
    ),
        loopReplacer(e, t, n, r)
}
function loopReplacer(e, t, n, r) {
    let i = '';
    for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, '[ ' + e + ' ]').replace(/UNROLLED_LOOP_INDEX/g, e);
    return i
}
function generatePrecision(e) {
    let t = 'precision ' + e.precision + ' float;\nprecision ' + e.precision + ' int;';
    return 'highp' === e.precision ? t += '\n#define HIGH_PRECISION' : 'mediump' === e.precision ? t += '\n#define MEDIUM_PRECISION' : 'lowp' === e.precision &&
        (t += '\n#define LOW_PRECISION'),
        t
}
function generateShadowMapTypeDefine(e) {
    let t = 'SHADOWMAP_TYPE_BASIC';
    return 1 === e.shadowMapType ? t = 'SHADOWMAP_TYPE_PCF' : 2 === e.shadowMapType ? t = 'SHADOWMAP_TYPE_PCF_SOFT' : 3 === e.shadowMapType &&
        (t = 'SHADOWMAP_TYPE_VSM'),
        t
}
function generateEnvMapTypeDefine(e) {
    let t = 'ENVMAP_TYPE_CUBE';
    if (e.envMap) switch (e.envMapMode) {
        case 301:
        case 302:
            t = 'ENVMAP_TYPE_CUBE';
            break;
        case 306:
        case 307:
            t = 'ENVMAP_TYPE_CUBE_UV'
    }
    return t
}
function generateEnvMapModeDefine(e) {
    let t = 'ENVMAP_MODE_REFLECTION';
    if (e.envMap) switch (e.envMapMode) {
        case 302:
        case 307:
            t = 'ENVMAP_MODE_REFRACTION'
    }
    return t
}
function generateEnvMapBlendingDefine(e) {
    let t = 'ENVMAP_BLENDING_NONE';
    if (e.envMap) switch (e.combine) {
        case 0:
            t = 'ENVMAP_BLENDING_MULTIPLY';
            break;
        case 1:
            t = 'ENVMAP_BLENDING_MIX';
            break;
        case 2:
            t = 'ENVMAP_BLENDING_ADD'
    }
    return t
}
function WebGLProgram(e, t, n, r) {
    const i = e.getContext(),
        a = n.defines;
    let s = n.vertexShader,
        o = n.fragmentShader;
    const l = generateShadowMapTypeDefine(n),
        c = generateEnvMapTypeDefine(n),
        h = generateEnvMapModeDefine(n),
        u = generateEnvMapBlendingDefine(n),
        d = e.gammaFactor > 0 ? e.gammaFactor : 1,
        p = n.isWebGL2 ? '' : generateExtensions(n),
        m = generateDefines(a),
        f = i.createProgram();
    let g,
        v,
        _ = n.glslVersion ? '#version ' + n.glslVersion + '\n' : '';
    n.isRawShaderMaterial ? (
        g = [
            m
        ].filter(filterEmptyLine).join('\n'),
        g.length > 0 &&
        (g += '\n'),
            v = [
                p,
                m
            ].filter(filterEmptyLine).join('\n'),
        v.length > 0 &&
        (v += '\n')
    ) : (
        g = [
            generatePrecision(n),
            '#define SHADER_NAME ' + n.shaderName,
            m,
            n.instancing ? '#define USE_INSTANCING' : '',
            n.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
            n.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
            '#define GAMMA_FACTOR ' + d,
            '#define MAX_BONES ' + n.maxBones,
            n.useFog &&
            n.fog ? '#define USE_FOG' : '',
            n.useFog &&
            n.fogExp2 ? '#define FOG_EXP2' : '',
            n.map ? '#define USE_MAP' : '',
            n.envMap ? '#define USE_ENVMAP' : '',
            n.envMap ? '#define ' + h : '',
            n.lightMap ? '#define USE_LIGHTMAP' : '',
            n.aoMap ? '#define USE_AOMAP' : '',
            n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
            n.bumpMap ? '#define USE_BUMPMAP' : '',
            n.normalMap ? '#define USE_NORMALMAP' : '',
            n.normalMap &&
            n.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
            n.normalMap &&
            n.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
            n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
            n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
            n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
            n.displacementMap &&
            n.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '',
            n.specularMap ? '#define USE_SPECULARMAP' : '',
            n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
            n.metalnessMap ? '#define USE_METALNESSMAP' : '',
            n.alphaMap ? '#define USE_ALPHAMAP' : '',
            n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
            n.vertexTangents ? '#define USE_TANGENT' : '',
            n.vertexColors ? '#define USE_COLOR' : '',
            n.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
            n.vertexUvs ? '#define USE_UV' : '',
            n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
            n.flatShading ? '#define FLAT_SHADED' : '',
            n.skinning ? '#define USE_SKINNING' : '',
            n.useVertexTexture ? '#define BONE_TEXTURE' : '',
            n.morphTargets ? '#define USE_MORPHTARGETS' : '',
            n.morphNormals &&
            !1 === n.flatShading ? '#define USE_MORPHNORMALS' : '',
            n.doubleSided ? '#define DOUBLE_SIDED' : '',
            n.flipSided ? '#define FLIP_SIDED' : '',
            n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
            n.shadowMapEnabled ? '#define ' + l : '',
            n.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
            n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
            n.logarithmicDepthBuffer &&
            n.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
            'uniform mat4 modelMatrix;',
            'uniform mat4 modelViewMatrix;',
            'uniform mat4 projectionMatrix;',
            'uniform mat4 viewMatrix;',
            'uniform mat3 normalMatrix;',
            'uniform vec3 cameraPosition;',
            'uniform bool isOrthographic;',
            '#ifdef USE_INSTANCING',
            '\tattribute mat4 instanceMatrix;',
            '#endif',
            '#ifdef USE_INSTANCING_COLOR',
            '\tattribute vec3 instanceColor;',
            '#endif',
            'attribute vec3 position;',
            'attribute vec3 normal;',
            'attribute vec2 uv;',
            '#ifdef USE_TANGENT',
            '\tattribute vec4 tangent;',
            '#endif',
            '#if defined( USE_COLOR_ALPHA )',
            '\tattribute vec4 color;',
            '#elif defined( USE_COLOR )',
            '\tattribute vec3 color;',
            '#endif',
            '#ifdef USE_MORPHTARGETS',
            '\tattribute vec3 morphTarget0;',
            '\tattribute vec3 morphTarget1;',
            '\tattribute vec3 morphTarget2;',
            '\tattribute vec3 morphTarget3;',
            '\t#ifdef USE_MORPHNORMALS',
            '\t\tattribute vec3 morphNormal0;',
            '\t\tattribute vec3 morphNormal1;',
            '\t\tattribute vec3 morphNormal2;',
            '\t\tattribute vec3 morphNormal3;',
            '\t#else',
            '\t\tattribute vec3 morphTarget4;',
            '\t\tattribute vec3 morphTarget5;',
            '\t\tattribute vec3 morphTarget6;',
            '\t\tattribute vec3 morphTarget7;',
            '\t#endif',
            '#endif',
            '#ifdef USE_SKINNING',
            '\tattribute vec4 skinIndex;',
            '\tattribute vec4 skinWeight;',
            '#endif',
            '\n'
        ].filter(filterEmptyLine).join('\n'),
            v = [
                p,
                generatePrecision(n),
                '#define SHADER_NAME ' + n.shaderName,
                m,
                n.alphaTest ? '#define ALPHATEST ' + n.alphaTest + (n.alphaTest % 1 ? '' : '.0') : '',
                '#define GAMMA_FACTOR ' + d,
                n.useFog &&
                n.fog ? '#define USE_FOG' : '',
                n.useFog &&
                n.fogExp2 ? '#define FOG_EXP2' : '',
                n.map ? '#define USE_MAP' : '',
                n.matcap ? '#define USE_MATCAP' : '',
                n.envMap ? '#define USE_ENVMAP' : '',
                n.envMap ? '#define ' + c : '',
                n.envMap ? '#define ' + h : '',
                n.envMap ? '#define ' + u : '',
                n.lightMap ? '#define USE_LIGHTMAP' : '',
                n.aoMap ? '#define USE_AOMAP' : '',
                n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
                n.bumpMap ? '#define USE_BUMPMAP' : '',
                n.normalMap ? '#define USE_NORMALMAP' : '',
                n.normalMap &&
                n.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
                n.normalMap &&
                n.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
                n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
                n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
                n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
                n.specularMap ? '#define USE_SPECULARMAP' : '',
                n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
                n.metalnessMap ? '#define USE_METALNESSMAP' : '',
                n.alphaMap ? '#define USE_ALPHAMAP' : '',
                n.sheen ? '#define USE_SHEEN' : '',
                n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
                n.vertexTangents ? '#define USE_TANGENT' : '',
                n.vertexColors ||
                n.instancingColor ? '#define USE_COLOR' : '',
                n.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
                n.vertexUvs ? '#define USE_UV' : '',
                n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
                n.gradientMap ? '#define USE_GRADIENTMAP' : '',
                n.flatShading ? '#define FLAT_SHADED' : '',
                n.doubleSided ? '#define DOUBLE_SIDED' : '',
                n.flipSided ? '#define FLIP_SIDED' : '',
                n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
                n.shadowMapEnabled ? '#define ' + l : '',
                n.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
                n.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',
                n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
                n.logarithmicDepthBuffer &&
                n.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
                (n.extensionShaderTextureLOD || n.envMap) &&
                n.rendererExtensionShaderTextureLod ? '#define TEXTURE_LOD_EXT' : '',
                'uniform mat4 viewMatrix;',
                'uniform vec3 cameraPosition;',
                'uniform bool isOrthographic;',
                0 !== n.toneMapping ? '#define TONE_MAPPING' : '',
                0 !== n.toneMapping ? ShaderChunk.tonemapping_pars_fragment : '',
                0 !== n.toneMapping ? getToneMappingFunction('toneMapping', n.toneMapping) : '',
                n.dithering ? '#define DITHERING' : '',
                ShaderChunk.encodings_pars_fragment,
                n.map ? getTexelDecodingFunction('mapTexelToLinear', n.mapEncoding) : '',
                n.matcap ? getTexelDecodingFunction('matcapTexelToLinear', n.matcapEncoding) : '',
                n.envMap ? getTexelDecodingFunction('envMapTexelToLinear', n.envMapEncoding) : '',
                n.emissiveMap ? getTexelDecodingFunction('emissiveMapTexelToLinear', n.emissiveMapEncoding) : '',
                n.lightMap ? getTexelDecodingFunction('lightMapTexelToLinear', n.lightMapEncoding) : '',
                getTexelEncodingFunction('linearToOutputTexel', n.outputEncoding),
                n.depthPacking ? '#define DEPTH_PACKING ' + n.depthPacking : '',
                '\n'
            ].filter(filterEmptyLine).join('\n')
    ),
        s = resolveIncludes(s),
        s = replaceLightNums(s, n),
        s = replaceClippingPlaneNums(s, n),
        o = resolveIncludes(o),
        o = replaceLightNums(o, n),
        o = replaceClippingPlaneNums(o, n),
        s = unrollLoops(s),
        o = unrollLoops(o),
    n.isWebGL2 &&
    !0 !== n.isRawShaderMaterial &&
    (
        _ = '#version 300 es\n',
            g = [
                '#define attribute in',
                '#define varying out',
                '#define texture2D texture'
            ].join('\n') + '\n' + g,
            v = [
                '#define varying in',
                n.glslVersion === GLSL3 ? '' : 'out highp vec4 pc_fragColor;',
                n.glslVersion === GLSL3 ? '' : '#define gl_FragColor pc_fragColor',
                '#define gl_FragDepthEXT gl_FragDepth',
                '#define texture2D texture',
                '#define textureCube texture',
                '#define texture2DProj textureProj',
                '#define texture2DLodEXT textureLod',
                '#define texture2DProjLodEXT textureProjLod',
                '#define textureCubeLodEXT textureLod',
                '#define texture2DGradEXT textureGrad',
                '#define texture2DProjGradEXT textureProjGrad',
                '#define textureCubeGradEXT textureGrad'
            ].join('\n') + '\n' + v
    );
    const x = _ + v + o,
        y = WebGLShader(i, 35633, _ + g + s),
        b = WebGLShader(i, 35632, x);
    if (
        i.attachShader(f, y),
            i.attachShader(f, b),
            void 0 !== n.index0AttributeName ? i.bindAttribLocation(f, 0, n.index0AttributeName) : !0 === n.morphTargets &&
                i.bindAttribLocation(f, 0, 'position'),
            i.linkProgram(f),
            e.debug.checkShaderErrors
    ) {
        const e = i.getProgramInfoLog(f).trim(),
            t = i.getShaderInfoLog(y).trim(),
            n = i.getShaderInfoLog(b).trim();
        let r = !0,
            a = !0;
        if (!1 === i.getProgramParameter(f, 35714)) {
            r = !1;
            const t = getShaderErrors(i, y, 'vertex'),
                n = getShaderErrors(i, b, 'fragment');
            console.error(
                'THREE.WebGLProgram: shader error: ',
                i.getError(),
                '35715',
                i.getProgramParameter(f, 35715),
                'gl.getProgramInfoLog',
                e,
                t,
                n
            )
        } else '' !== e ? console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()', e) : '' !== t &&
            '' !== n ||
            (a = !1);
        a &&
        (
            this.diagnostics = {
                runnable: r,
                programLog: e,
                vertexShader: {
                    log: t,
                    prefix: g
                },
                fragmentShader: {
                    log: n,
                    prefix: v
                }
            }
        )
    }
    let M,
        w;
    return i.deleteShader(y),
        i.deleteShader(b),
        this.getUniforms = function () {
            return void 0 === M &&
            (M = new WebGLUniforms(i, f)),
                M
        },
        this.getAttributes = function () {
            return void 0 === w &&
            (w = fetchAttributeLocations(i, f)),
                w
        },
        this.destroy = function () {
            r.releaseStatesOfProgram(this),
                i.deleteProgram(f),
                this.program = void 0
        },
        this.name = n.shaderName,
        this.id = programIdCount++,
        this.cacheKey = t,
        this.usedTimes = 1,
        this.program = f,
        this.vertexShader = y,
        this.fragmentShader = b,
        this
}
function WebGLPrograms(e, t, n, r, i, a) {
    const s = [],
        o = r.isWebGL2,
        l = r.logarithmicDepthBuffer,
        c = r.floatVertexTextures,
        h = r.maxVertexUniforms,
        u = r.vertexTextures;
    let d = r.precision;
    const p = {
            MeshDepthMaterial: 'depth',
            MeshDistanceMaterial: 'distanceRGBA',
            MeshNormalMaterial: 'normal',
            MeshBasicMaterial: 'basic',
            MeshLambertMaterial: 'lambert',
            MeshPhongMaterial: 'phong',
            MeshToonMaterial: 'toon',
            MeshStandardMaterial: 'physical',
            MeshPhysicalMaterial: 'physical',
            MeshMatcapMaterial: 'matcap',
            LineBasicMaterial: 'basic',
            LineDashedMaterial: 'dashed',
            PointsMaterial: 'points',
            ShadowMaterial: 'shadow',
            SpriteMaterial: 'sprite'
        },
        m = [
            'precision',
            'isWebGL2',
            'supportsVertexTextures',
            'outputEncoding',
            'instancing',
            'instancingColor',
            'map',
            'mapEncoding',
            'matcap',
            'matcapEncoding',
            'envMap',
            'envMapMode',
            'envMapEncoding',
            'envMapCubeUV',
            'lightMap',
            'lightMapEncoding',
            'aoMap',
            'emissiveMap',
            'emissiveMapEncoding',
            'bumpMap',
            'normalMap',
            'objectSpaceNormalMap',
            'tangentSpaceNormalMap',
            'clearcoatMap',
            'clearcoatRoughnessMap',
            'clearcoatNormalMap',
            'displacementMap',
            'specularMap',
            'roughnessMap',
            'metalnessMap',
            'gradientMap',
            'alphaMap',
            'combine',
            'vertexColors',
            'vertexAlphas',
            'vertexTangents',
            'vertexUvs',
            'uvsVertexOnly',
            'fog',
            'useFog',
            'fogExp2',
            'flatShading',
            'sizeAttenuation',
            'logarithmicDepthBuffer',
            'skinning',
            'maxBones',
            'useVertexTexture',
            'morphTargets',
            'morphNormals',
            'premultipliedAlpha',
            'numDirLights',
            'numPointLights',
            'numSpotLights',
            'numHemiLights',
            'numRectAreaLights',
            'numDirLightShadows',
            'numPointLightShadows',
            'numSpotLightShadows',
            'shadowMapEnabled',
            'shadowMapType',
            'toneMapping',
            'physicallyCorrectLights',
            'alphaTest',
            'doubleSided',
            'flipSided',
            'numClippingPlanes',
            'numClipIntersection',
            'depthPacking',
            'dithering',
            'sheen',
            'transmissionMap'
        ];
    function f(e) {
        let t;
        return e &&
        e.isTexture ? t = e.encoding : e &&
        e.isWebGLRenderTarget ? (
            console.warn(
                'THREE.WebGLPrograms.getTextureEncodingFromMap: don\'t use render targets as textures. Use their .texture property instead.'
            ),
                t = e.texture.encoding
        ) : t = 3000,
            t
    }
    return {
        getParameters: function (i, s, m, g, v) {
            const _ = g.fog,
                x = i.isMeshStandardMaterial ? g.environment : null,
                y = t.get(i.envMap || x),
                b = p[i.type],
                M = v.isSkinnedMesh ? function (e) {
                    const t = e.skeleton.bones;
                    if (c) return 1024;
                    {
                        const e = h,
                            n = Math.floor((e - 20) / 4),
                            r = Math.min(n, t.length);
                        return r < t.length ? (
                            console.warn(
                                'THREE.WebGLRenderer: Skeleton has ' + t.length + ' bones. This GPU supports ' + r + '.'
                            ),
                                0
                        ) : r
                    }
                }(v) : 0;
            let w,
                S;
            if (
                null !== i.precision &&
                (
                    d = r.getMaxPrecision(i.precision),
                    d !== i.precision &&
                    console.warn(
                        'THREE.WebGLProgram.getParameters:',
                        i.precision,
                        'not supported, using',
                        d,
                        'instead.'
                    )
                ),
                    b
            ) {
                const e = ShaderLib[b];
                w = e.vertexShader,
                    S = e.fragmentShader
            } else w = i.vertexShader,
                S = i.fragmentShader;
            const T = e.getRenderTarget();
            return {
                isWebGL2: o,
                shaderID: b,
                shaderName: i.type,
                vertexShader: w,
                fragmentShader: S,
                defines: i.defines,
                isRawShaderMaterial: !0 === i.isRawShaderMaterial,
                glslVersion: i.glslVersion,
                precision: d,
                instancing: !0 === v.isInstancedMesh,
                instancingColor: !0 === v.isInstancedMesh &&
                    null !== v.instanceColor,
                supportsVertexTextures: u,
                outputEncoding: null !== T ? f(T.texture) : e.outputEncoding,
                map: !!i.map,
                mapEncoding: f(i.map),
                matcap: !!i.matcap,
                matcapEncoding: f(i.matcap),
                envMap: !!y,
                envMapMode: y &&
                    y.mapping,
                envMapEncoding: f(y),
                envMapCubeUV: !!y &&
                    (306 === y.mapping || 307 === y.mapping),
                lightMap: !!i.lightMap,
                lightMapEncoding: f(i.lightMap),
                aoMap: !!i.aoMap,
                emissiveMap: !!i.emissiveMap,
                emissiveMapEncoding: f(i.emissiveMap),
                bumpMap: !!i.bumpMap,
                normalMap: !!i.normalMap,
                objectSpaceNormalMap: 1 === i.normalMapType,
                tangentSpaceNormalMap: 0 === i.normalMapType,
                clearcoatMap: !!i.clearcoatMap,
                clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
                clearcoatNormalMap: !!i.clearcoatNormalMap,
                displacementMap: !!i.displacementMap,
                roughnessMap: !!i.roughnessMap,
                metalnessMap: !!i.metalnessMap,
                specularMap: !!i.specularMap,
                alphaMap: !!i.alphaMap,
                gradientMap: !!i.gradientMap,
                sheen: !!i.sheen,
                transmissionMap: !!i.transmissionMap,
                combine: i.combine,
                vertexTangents: i.normalMap &&
                    i.vertexTangents,
                vertexColors: i.vertexColors,
                vertexAlphas: !0 === i.vertexColors &&
                    v.geometry &&
                    v.geometry.attributes.color &&
                    4 === v.geometry.attributes.color.itemSize,
                vertexUvs: !!(
                    i.map ||
                    i.bumpMap ||
                    i.normalMap ||
                    i.specularMap ||
                    i.alphaMap ||
                    i.emissiveMap ||
                    i.roughnessMap ||
                    i.metalnessMap ||
                    i.clearcoatMap ||
                    i.clearcoatRoughnessMap ||
                    i.clearcoatNormalMap ||
                    i.displacementMap ||
                    i.transmissionMap
                ),
                uvsVertexOnly: !(
                    i.map ||
                    i.bumpMap ||
                    i.normalMap ||
                    i.specularMap ||
                    i.alphaMap ||
                    i.emissiveMap ||
                    i.roughnessMap ||
                    i.metalnessMap ||
                    i.clearcoatNormalMap ||
                    i.transmissionMap ||
                    !i.displacementMap
                ),
                fog: !!_,
                useFog: i.fog,
                fogExp2: _ &&
                    _.isFogExp2,
                flatShading: !!i.flatShading,
                sizeAttenuation: i.sizeAttenuation,
                logarithmicDepthBuffer: l,
                skinning: i.skinning &&
                    M > 0,
                maxBones: M,
                useVertexTexture: c,
                morphTargets: i.morphTargets,
                morphNormals: i.morphNormals,
                numDirLights: s.directional.length,
                numPointLights: s.point.length,
                numSpotLights: s.spot.length,
                numRectAreaLights: s.rectArea.length,
                numHemiLights: s.hemi.length,
                numDirLightShadows: s.directionalShadowMap.length,
                numPointLightShadows: s.pointShadowMap.length,
                numSpotLightShadows: s.spotShadowMap.length,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: i.dithering,
                shadowMapEnabled: e.shadowMap.enabled &&
                    m.length > 0,
                shadowMapType: e.shadowMap.type,
                toneMapping: i.toneMapped ? e.toneMapping : 0,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: i.premultipliedAlpha,
                alphaTest: i.alphaTest,
                doubleSided: 2 === i.side,
                flipSided: 1 === i.side,
                depthPacking: void 0 !== i.depthPacking &&
                    i.depthPacking,
                index0AttributeName: i.index0AttributeName,
                extensionDerivatives: i.extensions &&
                    i.extensions.derivatives,
                extensionFragDepth: i.extensions &&
                    i.extensions.fragDepth,
                extensionDrawBuffers: i.extensions &&
                    i.extensions.drawBuffers,
                extensionShaderTextureLOD: i.extensions &&
                    i.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: o ||
                    n.has('EXT_frag_depth'),
                rendererExtensionDrawBuffers: o ||
                    n.has('WEBGL_draw_buffers'),
                rendererExtensionShaderTextureLod: o ||
                    n.has('EXT_shader_texture_lod'),
                customProgramCacheKey: i.customProgramCacheKey()
            }
        },
        getProgramCacheKey: function (t) {
            const n = [];
            if (
                t.shaderID ? n.push(t.shaderID) : (n.push(t.fragmentShader), n.push(t.vertexShader)),
                void 0 !== t.defines
            ) for (const e in t.defines) n.push(e),
                n.push(t.defines[e]);
            if (!1 === t.isRawShaderMaterial) {
                for (let e = 0; e < m.length; e++) n.push(t[m[e]]);
                n.push(e.outputEncoding),
                    n.push(e.gammaFactor)
            }
            return n.push(t.customProgramCacheKey),
                n.join()
        },
        getUniforms: function (e) {
            const t = p[e.type];
            let n;
            if (t) {
                const e = ShaderLib[t];
                n = UniformsUtils.clone(e.uniforms)
            } else n = e.uniforms;
            return n
        },
        acquireProgram: function (t, n) {
            let r;
            for (let e = 0, t = s.length; e < t; e++) {
                const t = s[e];
                if (t.cacheKey === n) {
                    r = t,
                        ++r.usedTimes;
                    break
                }
            }
            return void 0 === r &&
            (r = new WebGLProgram(e, n, t, i), s.push(r)),
                r
        },
        releaseProgram: function (e) {
            if (0 == --e.usedTimes) {
                const t = s.indexOf(e);
                s[t] = s[s.length - 1],
                    s.pop(),
                    e.destroy()
            }
        },
        programs: s
    }
}
function WebGLProperties() {
    let e = new WeakMap;
    return {
        get: function (t) {
            let n = e.get(t);
            return void 0 === n &&
            (n = {}, e.set(t, n)),
                n
        },
        remove: function (t) {
            e.delete(t)
        },
        update: function (t, n, r) {
            e.get(t) [n] = r
        },
        dispose: function () {
            e = new WeakMap
        }
    }
}
function painterSortStable(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
}
function reversePainterSortStable(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
}
function WebGLRenderList(e) {
    const t = [];
    let n = 0;
    const r = [],
        i = [],
        a = {
            id: - 1
        };
    function s(r, i, s, o, l, c) {
        let h = t[n];
        const u = e.get(s);
        return void 0 === h ? (
            h = {
                id: r.id,
                object: r,
                geometry: i,
                material: s,
                program: u.program ||
                    a,
                groupOrder: o,
                renderOrder: r.renderOrder,
                z: l,
                group: c
            },
                t[n] = h
        ) : (
            h.id = r.id,
                h.object = r,
                h.geometry = i,
                h.material = s,
                h.program = u.program ||
                    a,
                h.groupOrder = o,
                h.renderOrder = r.renderOrder,
                h.z = l,
                h.group = c
        ),
            n++,
            h
    }
    return {
        opaque: r,
        transparent: i,
        init: function () {
            n = 0,
                r.length = 0,
                i.length = 0
        },
        push: function (e, t, n, a, o, l) {
            const c = s(e, t, n, a, o, l);
            (!0 === n.transparent ? i : r).push(c)
        },
        unshift: function (e, t, n, a, o, l) {
            const c = s(e, t, n, a, o, l);
            (!0 === n.transparent ? i : r).unshift(c)
        },
        finish: function () {
            for (let e = n, r = t.length; e < r; e++) {
                const n = t[e];
                if (null === n.id) break;
                n.id = null,
                    n.object = null,
                    n.geometry = null,
                    n.material = null,
                    n.program = null,
                    n.group = null
            }
        },
        sort: function (e, t) {
            r.length > 1 &&
            r.sort(e || painterSortStable),
            i.length > 1 &&
            i.sort(t || reversePainterSortStable)
        }
    }
}
function WebGLRenderLists(e) {
    let t = new WeakMap;
    return {
        get: function (n, r) {
            let i;
            return !1 === t.has(n) ? (i = new WebGLRenderList(e), t.set(n, [
                i
            ])) : r >= t.get(n).length ? (i = new WebGLRenderList(e), t.get(n).push(i)) : i = t.get(n) [r],
                i
        },
        dispose: function () {
            t = new WeakMap
        }
    }
}
function UniformsCache() {
    const e = {};
    return {
        get: function (t) {
            if (void 0 !== e[t.id]) return e[t.id];
            let n;
            switch (t.type) {
                case 'DirectionalLight':
                    n = {
                        direction: new Vector3,
                        color: new Color
                    };
                    break;
                case 'SpotLight':
                    n = {
                        position: new Vector3,
                        direction: new Vector3,
                        color: new Color,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case 'PointLight':
                    n = {
                        position: new Vector3,
                        color: new Color,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case 'HemisphereLight':
                    n = {
                        direction: new Vector3,
                        skyColor: new Color,
                        groundColor: new Color
                    };
                    break;
                case 'RectAreaLight':
                    n = {
                        color: new Color,
                        position: new Vector3,
                        halfWidth: new Vector3,
                        halfHeight: new Vector3
                    }
            }
            return e[t.id] = n,
                n
        }
    }
}
function ShadowUniformsCache() {
    const e = {};
    return {
        get: function (t) {
            if (void 0 !== e[t.id]) return e[t.id];
            let n;
            switch (t.type) {
                case 'DirectionalLight':
                case 'SpotLight':
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Vector2
                    };
                    break;
                case 'PointLight':
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Vector2,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1000
                    }
            }
            return e[t.id] = n,
                n
        }
    }
}
let nextVersion = 0;
function shadowCastingLightsFirst(e, t) {
    return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0)
}
function WebGLLights(e, t) {
    const n = new UniformsCache,
        r = ShadowUniformsCache(),
        i = {
            version: 0,
            hash: {
                directionalLength: - 1,
                pointLength: - 1,
                spotLength: - 1,
                rectAreaLength: - 1,
                hemiLength: - 1,
                numDirectionalShadows: - 1,
                numPointShadows: - 1,
                numSpotShadows: - 1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
    for (let e = 0; e < 9; e++) i.probe.push(new Vector3);
    const a = new Vector3,
        s = new Matrix4,
        o = new Matrix4;
    return {
        setup: function (a) {
            let s = 0,
                o = 0,
                l = 0;
            for (let e = 0; e < 9; e++) i.probe[e].set(0, 0, 0);
            let c = 0,
                h = 0,
                u = 0,
                d = 0,
                p = 0,
                m = 0,
                f = 0,
                g = 0;
            a.sort(shadowCastingLightsFirst);
            for (let e = 0, t = a.length; e < t; e++) {
                const t = a[e],
                    v = t.color,
                    _ = t.intensity,
                    x = t.distance,
                    y = t.shadow &&
                    t.shadow.map ? t.shadow.map.texture : null;
                if (t.isAmbientLight) s += v.r * _,
                    o += v.g * _,
                    l += v.b * _;
                else if (t.isLightProbe) for (let e = 0; e < 9; e++) i.probe[e].addScaledVector(t.sh.coefficients[e], _);
                else if (t.isDirectionalLight) {
                    const e = n.get(t);
                    if (
                        e.color.copy(t.color).multiplyScalar(t.intensity),
                            t.castShadow
                    ) {
                        const e = t.shadow,
                            n = r.get(t);
                        n.shadowBias = e.bias,
                            n.shadowNormalBias = e.normalBias,
                            n.shadowRadius = e.radius,
                            n.shadowMapSize = e.mapSize,
                            i.directionalShadow[c] = n,
                            i.directionalShadowMap[c] = y,
                            i.directionalShadowMatrix[c] = t.shadow.matrix,
                            m++
                    }
                    i.directional[c] = e,
                        c++
                } else if (t.isSpotLight) {
                    const e = n.get(t);
                    if (
                        e.position.setFromMatrixPosition(t.matrixWorld),
                            e.color.copy(v).multiplyScalar(_),
                            e.distance = x,
                            e.coneCos = Math.cos(t.angle),
                            e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)),
                            e.decay = t.decay,
                            t.castShadow
                    ) {
                        const e = t.shadow,
                            n = r.get(t);
                        n.shadowBias = e.bias,
                            n.shadowNormalBias = e.normalBias,
                            n.shadowRadius = e.radius,
                            n.shadowMapSize = e.mapSize,
                            i.spotShadow[u] = n,
                            i.spotShadowMap[u] = y,
                            i.spotShadowMatrix[u] = t.shadow.matrix,
                            g++
                    }
                    i.spot[u] = e,
                        u++
                } else if (t.isRectAreaLight) {
                    const e = n.get(t);
                    e.color.copy(v).multiplyScalar(_),
                        e.halfWidth.set(0.5 * t.width, 0, 0),
                        e.halfHeight.set(0, 0.5 * t.height, 0),
                        i.rectArea[d] = e,
                        d++
                } else if (t.isPointLight) {
                    const e = n.get(t);
                    if (
                        e.color.copy(t.color).multiplyScalar(t.intensity),
                            e.distance = t.distance,
                            e.decay = t.decay,
                            t.castShadow
                    ) {
                        const e = t.shadow,
                            n = r.get(t);
                        n.shadowBias = e.bias,
                            n.shadowNormalBias = e.normalBias,
                            n.shadowRadius = e.radius,
                            n.shadowMapSize = e.mapSize,
                            n.shadowCameraNear = e.camera.near,
                            n.shadowCameraFar = e.camera.far,
                            i.pointShadow[h] = n,
                            i.pointShadowMap[h] = y,
                            i.pointShadowMatrix[h] = t.shadow.matrix,
                            f++
                    }
                    i.point[h] = e,
                        h++
                } else if (t.isHemisphereLight) {
                    const e = n.get(t);
                    e.skyColor.copy(t.color).multiplyScalar(_),
                        e.groundColor.copy(t.groundColor).multiplyScalar(_),
                        i.hemi[p] = e,
                        p++
                }
            }
            d > 0 &&
            (
                t.isWebGL2 ||
                !0 === e.has('OES_texture_float_linear') ? (
                    i.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1,
                        i.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2
                ) : !0 === e.has('OES_texture_half_float_linear') ? (
                    i.rectAreaLTC1 = UniformsLib.LTC_HALF_1,
                        i.rectAreaLTC2 = UniformsLib.LTC_HALF_2
                ) : console.error(
                    'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.'
                )
            ),
                i.ambient[0] = s,
                i.ambient[1] = o,
                i.ambient[2] = l;
            const v = i.hash;
            v.directionalLength === c &&
            v.pointLength === h &&
            v.spotLength === u &&
            v.rectAreaLength === d &&
            v.hemiLength === p &&
            v.numDirectionalShadows === m &&
            v.numPointShadows === f &&
            v.numSpotShadows === g ||
            (
                i.directional.length = c,
                    i.spot.length = u,
                    i.rectArea.length = d,
                    i.point.length = h,
                    i.hemi.length = p,
                    i.directionalShadow.length = m,
                    i.directionalShadowMap.length = m,
                    i.pointShadow.length = f,
                    i.pointShadowMap.length = f,
                    i.spotShadow.length = g,
                    i.spotShadowMap.length = g,
                    i.directionalShadowMatrix.length = m,
                    i.pointShadowMatrix.length = f,
                    i.spotShadowMatrix.length = g,
                    v.directionalLength = c,
                    v.pointLength = h,
                    v.spotLength = u,
                    v.rectAreaLength = d,
                    v.hemiLength = p,
                    v.numDirectionalShadows = m,
                    v.numPointShadows = f,
                    v.numSpotShadows = g,
                    i.version = nextVersion++
            )
        },
        setupView: function (e, t) {
            let n = 0,
                r = 0,
                l = 0,
                c = 0,
                h = 0;
            const u = t.matrixWorldInverse;
            for (let t = 0, d = e.length; t < d; t++) {
                const d = e[t];
                if (d.isDirectionalLight) {
                    const e = i.directional[n];
                    e.direction.setFromMatrixPosition(d.matrixWorld),
                        a.setFromMatrixPosition(d.target.matrixWorld),
                        e.direction.sub(a),
                        e.direction.transformDirection(u),
                        n++
                } else if (d.isSpotLight) {
                    const e = i.spot[l];
                    e.position.setFromMatrixPosition(d.matrixWorld),
                        e.position.applyMatrix4(u),
                        e.direction.setFromMatrixPosition(d.matrixWorld),
                        a.setFromMatrixPosition(d.target.matrixWorld),
                        e.direction.sub(a),
                        e.direction.transformDirection(u),
                        l++
                } else if (d.isRectAreaLight) {
                    const e = i.rectArea[c];
                    e.position.setFromMatrixPosition(d.matrixWorld),
                        e.position.applyMatrix4(u),
                        o.identity(),
                        s.copy(d.matrixWorld),
                        s.premultiply(u),
                        o.extractRotation(s),
                        e.halfWidth.set(0.5 * d.width, 0, 0),
                        e.halfHeight.set(0, 0.5 * d.height, 0),
                        e.halfWidth.applyMatrix4(o),
                        e.halfHeight.applyMatrix4(o),
                        c++
                } else if (d.isPointLight) {
                    const e = i.point[r];
                    e.position.setFromMatrixPosition(d.matrixWorld),
                        e.position.applyMatrix4(u),
                        r++
                } else if (d.isHemisphereLight) {
                    const e = i.hemi[h];
                    e.direction.setFromMatrixPosition(d.matrixWorld),
                        e.direction.transformDirection(u),
                        e.direction.normalize(),
                        h++
                }
            }
        },
        state: i
    }
}
function WebGLRenderState(e, t) {
    const n = new WebGLLights(e, t),
        r = [],
        i = [];
    return {
        init: function () {
            r.length = 0,
                i.length = 0
        },
        state: {
            lightsArray: r,
            shadowsArray: i,
            lights: n
        },
        setupLights: function () {
            n.setup(r)
        },
        setupLightsView: function (e) {
            n.setupView(r, e)
        },
        pushLight: function (e) {
            r.push(e)
        },
        pushShadow: function (e) {
            i.push(e)
        }
    }
}
function WebGLRenderStates(e, t) {
    let n = new WeakMap;
    return {
        get: function (r, i = 0) {
            let a;
            return !1 === n.has(r) ? (a = new WebGLRenderState(e, t), n.set(r, [
                a
            ])) : i >= n.get(r).length ? (a = new WebGLRenderState(e, t), n.get(r).push(a)) : a = n.get(r) [i],
                a
        },
        dispose: function () {
            n = new WeakMap
        }
    }
}
class MeshDepthMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'MeshDepthMaterial',
            this.depthPacking = 3200,
            this.skinning = !1,
            this.morphTargets = !1,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.depthPacking = e.depthPacking,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.map = e.map,
            this.alphaMap = e.alphaMap,
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this
    }
}
MeshDepthMaterial.prototype.isMeshDepthMaterial = !0;
class MeshDistanceMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'MeshDistanceMaterial',
            this.referencePosition = new Vector3,
            this.nearDistance = 1,
            this.farDistance = 1000,
            this.skinning = !1,
            this.morphTargets = !1,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.fog = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.referencePosition.copy(e.referencePosition),
            this.nearDistance = e.nearDistance,
            this.farDistance = e.farDistance,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.map = e.map,
            this.alphaMap = e.alphaMap,
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this
    }
}
MeshDistanceMaterial.prototype.isMeshDistanceMaterial = !0;
var vsm_frag = 'uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}',
    vsm_vert = 'void main() {\n\tgl_Position = vec4( position, 1.0 );\n}';
function WebGLShadowMap(e, t, n) {
    let r = new Frustum;
    const i = new Vector2,
        a = new Vector2,
        s = new Vector4,
        o = [],
        l = [],
        c = {},
        h = n.maxTextureSize,
        u = {
            0: 1,
            1: 0,
            2: 2
        },
        d = new ShaderMaterial({
            defines: {
                SAMPLE_RATE: 2 / 8,
                HALF_SAMPLE_RATE: 1 / 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new Vector2
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: vsm_vert,
            fragmentShader: vsm_frag
        }),
        p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const m = new BufferGeometry;
    m.setAttribute(
        'position',
        new BufferAttribute(new Float32Array([ - 1,
            - 1,
            0.5,
            3,
            - 1,
            0.5,
            - 1,
            3,
            0.5]), 3)
    );
    const f = new Mesh(m, d),
        g = this;
    function v(n, r) {
        const i = t.update(f);
        d.uniforms.shadow_pass.value = n.map.texture,
            d.uniforms.resolution.value = n.mapSize,
            d.uniforms.radius.value = n.radius,
            e.setRenderTarget(n.mapPass),
            e.clear(),
            e.renderBufferDirect(r, null, i, d, f, null),
            p.uniforms.shadow_pass.value = n.mapPass.texture,
            p.uniforms.resolution.value = n.mapSize,
            p.uniforms.radius.value = n.radius,
            e.setRenderTarget(n.map),
            e.clear(),
            e.renderBufferDirect(r, null, i, p, f, null)
    }
    function _(e, t, n) {
        const r = e << 0 | t << 1 | n << 2;
        let i = o[r];
        return void 0 === i &&
        (
            i = new MeshDepthMaterial({
                depthPacking: 3201,
                morphTargets: e,
                skinning: t
            }),
                o[r] = i
        ),
            i
    }
    function x(e, t, n) {
        const r = e << 0 | t << 1 | n << 2;
        let i = l[r];
        return void 0 === i &&
        (
            i = new MeshDistanceMaterial({
                morphTargets: e,
                skinning: t
            }),
                l[r] = i
        ),
            i
    }
    function y(t, n, r, i, a, s, o) {
        let l = null,
            h = _,
            d = t.customDepthMaterial;
        if (
            !0 === i.isPointLight &&
            (h = x, d = t.customDistanceMaterial),
            void 0 === d
        ) {
            let e = !1;
            !0 === r.morphTargets &&
            (
                e = n.morphAttributes &&
                    n.morphAttributes.position &&
                    n.morphAttributes.position.length > 0
            );
            let i = !1;
            !0 === t.isSkinnedMesh &&
            (
                !0 === r.skinning ? i = !0 : console.warn(
                    'THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:',
                    t
                )
            );
            l = h(e, i, !0 === t.isInstancedMesh)
        } else l = d;
        if (
            e.localClippingEnabled &&
            !0 === r.clipShadows &&
            0 !== r.clippingPlanes.length
        ) {
            const e = l.uuid,
                t = r.uuid;
            let n = c[e];
            void 0 === n &&
            (n = {}, c[e] = n);
            let i = n[t];
            void 0 === i &&
            (i = l.clone(), n[t] = i),
                l = i
        }
        return l.visible = r.visible,
            l.wireframe = r.wireframe,
            l.side = 3 === o ? null !== r.shadowSide ? r.shadowSide : r.side : null !== r.shadowSide ? r.shadowSide : u[r.side],
            l.clipShadows = r.clipShadows,
            l.clippingPlanes = r.clippingPlanes,
            l.clipIntersection = r.clipIntersection,
            l.wireframeLinewidth = r.wireframeLinewidth,
            l.linewidth = r.linewidth,
        !0 === i.isPointLight &&
        !0 === l.isMeshDistanceMaterial &&
        (
            l.referencePosition.setFromMatrixPosition(i.matrixWorld),
                l.nearDistance = a,
                l.farDistance = s
        ),
            l
    }
    function b(n, i, a, s, o) {
        if (!1 === n.visible) return;
        if (
            n.layers.test(i.layers) &&
            (n.isMesh || n.isLine || n.isPoints) &&
            (n.castShadow || n.receiveShadow && 3 === o) &&
            (!n.frustumCulled || r.intersectsObject(n))
        ) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            const r = t.update(n),
                i = n.material;
            if (Array.isArray(i)) {
                const t = r.groups;
                for (let l = 0, c = t.length; l < c; l++) {
                    const c = t[l],
                        h = i[c.materialIndex];
                    if (h && h.visible) {
                        const t = y(n, r, h, s, a.near, a.far, o);
                        e.renderBufferDirect(a, null, r, t, n, c)
                    }
                }
            } else if (i.visible) {
                const t = y(n, r, i, s, a.near, a.far, o);
                e.renderBufferDirect(a, null, r, t, n, null)
            }
        }
        const l = n.children;
        for (let e = 0, t = l.length; e < t; e++) b(l[e], i, a, s, o)
    }
    this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = 1,
        this.render = function (t, n, o) {
            if (!1 === g.enabled) return;
            if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
            if (0 === t.length) return;
            const l = e.getRenderTarget(),
                c = e.getActiveCubeFace(),
                u = e.getActiveMipmapLevel(),
                d = e.state;
            d.setBlending(0),
                d.buffers.color.setClear(1, 1, 1, 1),
                d.buffers.depth.setTest(!0),
                d.setScissorTest(!1);
            for (let l = 0, c = t.length; l < c; l++) {
                const c = t[l],
                    u = c.shadow;
                if (void 0 === u) {
                    console.warn('THREE.WebGLShadowMap:', c, 'has no shadow.');
                    continue
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                i.copy(u.mapSize);
                const p = u.getFrameExtents();
                if (
                    i.multiply(p),
                        a.copy(u.mapSize),
                    (i.x > h || i.y > h) &&
                    (
                        i.x > h &&
                        (a.x = Math.floor(h / p.x), i.x = a.x * p.x, u.mapSize.x = a.x),
                        i.y > h &&
                        (a.y = Math.floor(h / p.y), i.y = a.y * p.y, u.mapSize.y = a.y)
                    ),
                    null === u.map &&
                    !u.isPointLightShadow &&
                    3 === this.type
                ) {
                    const e = {
                        minFilter: 1006,
                        magFilter: 1006,
                        format: 1023
                    };
                    u.map = new WebGLRenderTarget(i.x, i.y, e),
                        u.map.texture.name = c.name + '.shadowMap',
                        u.mapPass = new WebGLRenderTarget(i.x, i.y, e),
                        u.camera.updateProjectionMatrix()
                }
                if (null === u.map) {
                    const e = {
                        minFilter: 1003,
                        magFilter: 1003,
                        format: 1023
                    };
                    u.map = new WebGLRenderTarget(i.x, i.y, e),
                        u.map.texture.name = c.name + '.shadowMap',
                        u.camera.updateProjectionMatrix()
                }
                e.setRenderTarget(u.map),
                    e.clear();
                const m = u.getViewportCount();
                for (let e = 0; e < m; e++) {
                    const t = u.getViewport(e);
                    s.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w),
                        d.viewport(s),
                        u.updateMatrices(c, e),
                        r = u.getFrustum(),
                        b(n, o, u.camera, c, this.type)
                }
                u.isPointLightShadow ||
                3 !== this.type ||
                v(u, o),
                    u.needsUpdate = !1
            }
            g.needsUpdate = !1,
                e.setRenderTarget(l, c, u)
        }
}
function WebGLState(e, t, n) {
    const r = n.isWebGL2;
    const i = new function () {
            let t = !1;
            const n = new Vector4;
            let r = null;
            const i = new Vector4(0, 0, 0, 0);
            return {
                setMask: function (n) {
                    r === n ||
                    t ||
                    (e.colorMask(n, n, n, n), r = n)
                },
                setLocked: function (e) {
                    t = e
                },
                setClear: function (t, r, a, s, o) {
                    !0 === o &&
                    (t *= s, r *= s, a *= s),
                        n.set(t, r, a, s),
                    !1 === i.equals(n) &&
                    (e.clearColor(t, r, a, s), i.copy(n))
                },
                reset: function () {
                    t = !1,
                        r = null,
                        i.set( - 1, 0, 0, 0)
                }
            }
        },
        a = new function () {
            let t = !1,
                n = null,
                r = null,
                i = null;
            return {
                setTest: function (e) {
                    e ? B(2929) : V(2929)
                },
                setMask: function (r) {
                    n === r ||
                    t ||
                    (e.depthMask(r), n = r)
                },
                setFunc: function (t) {
                    if (r !== t) {
                        if (t) switch (t) {
                            case 0:
                                e.depthFunc(512);
                                break;
                            case 1:
                                e.depthFunc(519);
                                break;
                            case 2:
                                e.depthFunc(513);
                                break;
                            case 3:
                            default:
                                e.depthFunc(515);
                                break;
                            case 4:
                                e.depthFunc(514);
                                break;
                            case 5:
                                e.depthFunc(518);
                                break;
                            case 6:
                                e.depthFunc(516);
                                break;
                            case 7:
                                e.depthFunc(517)
                        } else e.depthFunc(515);
                        r = t
                    }
                },
                setLocked: function (e) {
                    t = e
                },
                setClear: function (t) {
                    i !== t &&
                    (e.clearDepth(t), i = t)
                },
                reset: function () {
                    t = !1,
                        n = null,
                        r = null,
                        i = null
                }
            }
        },
        s = new function () {
            let t = !1,
                n = null,
                r = null,
                i = null,
                a = null,
                s = null,
                o = null,
                l = null,
                c = null;
            return {
                setTest: function (e) {
                    t ||
                    (e ? B(2960) : V(2960))
                },
                setMask: function (r) {
                    n === r ||
                    t ||
                    (e.stencilMask(r), n = r)
                },
                setFunc: function (t, n, s) {
                    r === t &&
                    i === n &&
                    a === s ||
                    (e.stencilFunc(t, n, s), r = t, i = n, a = s)
                },
                setOp: function (t, n, r) {
                    s === t &&
                    o === n &&
                    l === r ||
                    (e.stencilOp(t, n, r), s = t, o = n, l = r)
                },
                setLocked: function (e) {
                    t = e
                },
                setClear: function (t) {
                    c !== t &&
                    (e.clearStencil(t), c = t)
                },
                reset: function () {
                    t = !1,
                        n = null,
                        r = null,
                        i = null,
                        a = null,
                        s = null,
                        o = null,
                        l = null,
                        c = null
                }
            }
        };
    let o = {},
        l = null,
        c = {},
        h = null,
        u = !1,
        d = null,
        p = null,
        m = null,
        f = null,
        g = null,
        v = null,
        _ = null,
        x = !1,
        y = null,
        b = null,
        M = null,
        w = null,
        S = null;
    const T = e.getParameter(35661);
    let E = !1,
        L = 0;
    const A = e.getParameter(7938);
    - 1 !== A.indexOf('WebGL') ? (L = parseFloat(/^WebGL (\d)/.exec(A) [1]), E = L >= 1) : - 1 !== A.indexOf('OpenGL ES') &&
        (L = parseFloat(/^OpenGL ES (\d)/.exec(A) [1]), E = L >= 2);
    let R = null,
        C = {};
    const P = new Vector4(0, 0, e.canvas.width, e.canvas.height),
        I = new Vector4(0, 0, e.canvas.width, e.canvas.height);
    function N(t, n, r) {
        const i = new Uint8Array(4),
            a = e.createTexture();
        e.bindTexture(t, a),
            e.texParameteri(t, 10241, 9728),
            e.texParameteri(t, 10240, 9728);
        for (let t = 0; t < r; t++) e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, i);
        return a
    }
    const D = {};
    function B(t) {
        !0 !== o[t] &&
        (e.enable(t), o[t] = !0)
    }
    function V(t) {
        !1 !== o[t] &&
        (e.disable(t), o[t] = !1)
    }
    D[3553] = N(3553, 3553, 1),
        D[34067] = N(34067, 34069, 6),
        i.setClear(0, 0, 0, 1),
        a.setClear(1),
        s.setClear(0),
        B(2929),
        a.setFunc(3),
        G(!1),
        z(1),
        B(2884),
        F(0);
    const U = {
        100: 32774,
        101: 32778,
        102: 32779
    };
    if (r) U[103] = 32775,
        U[104] = 32776;
    else {
        const e = t.get('EXT_blend_minmax');
        null !== e &&
        (U[103] = e.MIN_EXT, U[104] = e.MAX_EXT)
    }
    const O = {
        200: 0,
        201: 1,
        202: 768,
        204: 770,
        210: 776,
        208: 774,
        206: 772,
        203: 769,
        205: 771,
        209: 775,
        207: 773
    };
    function F(t, n, r, i, a, s, o, l) {
        if (0 !== t) {
            if (!1 === u && (B(3042), u = !0), 5 === t) a = a ||
                n,
                s = s ||
                    r,
                o = o ||
                    i,
            n === p &&
            a === g ||
            (e.blendEquationSeparate(U[n], U[a]), p = n, g = a),
            r === m &&
            i === f &&
            s === v &&
            o === _ ||
            (e.blendFuncSeparate(O[r], O[i], O[s], O[o]), m = r, f = i, v = s, _ = o),
                d = t,
                x = null;
            else if (t !== d || l !== x) {
                if (100 === p && 100 === g || (e.blendEquation(32774), p = 100, g = 100), l) switch (t) {
                    case 1:
                        e.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case 2:
                        e.blendFunc(1, 1);
                        break;
                    case 3:
                        e.blendFuncSeparate(0, 0, 769, 771);
                        break;
                    case 4:
                        e.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error('THREE.WebGLState: Invalid blending: ', t)
                } else switch (t) {
                    case 1:
                        e.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case 2:
                        e.blendFunc(770, 1);
                        break;
                    case 3:
                        e.blendFunc(0, 769);
                        break;
                    case 4:
                        e.blendFunc(0, 768);
                        break;
                    default:
                        console.error('THREE.WebGLState: Invalid blending: ', t)
                }
                m = null,
                    f = null,
                    v = null,
                    _ = null,
                    d = t,
                    x = l
            }
        } else !0 === u &&
        (V(3042), u = !1)
    }
    function G(t) {
        y !== t &&
        (t ? e.frontFace(2304) : e.frontFace(2305), y = t)
    }
    function z(t) {
        0 !== t ? (
            B(2884),
            t !== b &&
            (
                1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032)
            )
        ) : V(2884),
            b = t
    }
    function H(t, n, r) {
        t ? (B(32823), w === n && S === r || (e.polygonOffset(n, r), w = n, S = r)) : V(32823)
    }
    function k(t) {
        void 0 === t &&
        (t = 33984 + T - 1),
        R !== t &&
        (e.activeTexture(t), R = t)
    }
    return {
        buffers: {
            color: i,
            depth: a,
            stencil: s
        },
        enable: B,
        disable: V,
        bindFramebuffer: function (t, n) {
            null === n &&
            null !== l &&
            (n = l),
            c[t] !== n &&
            (
                e.bindFramebuffer(t, n),
                    c[t] = n,
                r &&
                (36009 === t && (c[36160] = n), 36160 === t && (c[36009] = n))
            )
        },
        bindXRFramebuffer: function (t) {
            t !== l &&
            (e.bindFramebuffer(36160, t), l = t)
        },
        useProgram: function (t) {
            return h !== t &&
                (e.useProgram(t), h = t, !0)
        },
        setBlending: F,
        setMaterial: function (e, t) {
            2 === e.side ? V(2884) : B(2884);
            let n = 1 === e.side;
            t &&
            (n = !n),
                G(n),
                1 === e.blending &&
                !1 === e.transparent ? F(0) : F(
                    e.blending,
                    e.blendEquation,
                    e.blendSrc,
                    e.blendDst,
                    e.blendEquationAlpha,
                    e.blendSrcAlpha,
                    e.blendDstAlpha,
                    e.premultipliedAlpha
                ),
                a.setFunc(e.depthFunc),
                a.setTest(e.depthTest),
                a.setMask(e.depthWrite),
                i.setMask(e.colorWrite);
            const r = e.stencilWrite;
            s.setTest(r),
            r &&
            (
                s.setMask(e.stencilWriteMask),
                    s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
                    s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)
            ),
                H(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
                !0 === e.alphaToCoverage ? B(32926) : V(32926)
        },
        setFlipSided: G,
        setCullFace: z,
        setLineWidth: function (t) {
            t !== M &&
            (E && e.lineWidth(t), M = t)
        },
        setPolygonOffset: H,
        setScissorTest: function (e) {
            e ? B(3089) : V(3089)
        },
        activeTexture: k,
        bindTexture: function (t, n) {
            null === R &&
            k();
            let r = C[R];
            void 0 === r &&
            (r = {
                type: void 0,
                texture: void 0
            }, C[R] = r),
            r.type === t &&
            r.texture === n ||
            (e.bindTexture(t, n || D[t]), r.type = t, r.texture = n)
        },
        unbindTexture: function () {
            const t = C[R];
            void 0 !== t &&
            void 0 !== t.type &&
            (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
        },
        compressedTexImage2D: function () {
            try {
                e.compressedTexImage2D.apply(e, arguments)
            } catch (e) {
                console.error('THREE.WebGLState:', e)
            }
        },
        texImage2D: function () {
            try {
                e.texImage2D.apply(e, arguments)
            } catch (e) {
                console.error('THREE.WebGLState:', e)
            }
        },
        texImage3D: function () {
            try {
                e.texImage3D.apply(e, arguments)
            } catch (e) {
                console.error('THREE.WebGLState:', e)
            }
        },
        scissor: function (t) {
            !1 === P.equals(t) &&
            (e.scissor(t.x, t.y, t.z, t.w), P.copy(t))
        },
        viewport: function (t) {
            !1 === I.equals(t) &&
            (e.viewport(t.x, t.y, t.z, t.w), I.copy(t))
        },
        reset: function () {
            e.disable(3042),
                e.disable(2884),
                e.disable(2929),
                e.disable(32823),
                e.disable(3089),
                e.disable(2960),
                e.disable(32926),
                e.blendEquation(32774),
                e.blendFunc(1, 0),
                e.blendFuncSeparate(1, 0, 1, 0),
                e.colorMask(!0, !0, !0, !0),
                e.clearColor(0, 0, 0, 0),
                e.depthMask(!0),
                e.depthFunc(513),
                e.clearDepth(1),
                e.stencilMask(4294967295),
                e.stencilFunc(519, 0, 4294967295),
                e.stencilOp(7680, 7680, 7680),
                e.clearStencil(0),
                e.cullFace(1029),
                e.frontFace(2305),
                e.polygonOffset(0, 0),
                e.activeTexture(33984),
                e.bindFramebuffer(36160, null),
            !0 === r &&
            (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
                e.useProgram(null),
                e.lineWidth(1),
                e.scissor(0, 0, e.canvas.width, e.canvas.height),
                e.viewport(0, 0, e.canvas.width, e.canvas.height),
                o = {},
                R = null,
                C = {},
                l = null,
                c = {},
                h = null,
                u = !1,
                d = null,
                p = null,
                m = null,
                f = null,
                g = null,
                v = null,
                _ = null,
                x = !1,
                y = null,
                b = null,
                M = null,
                w = null,
                S = null,
                P.set(0, 0, e.canvas.width, e.canvas.height),
                I.set(0, 0, e.canvas.width, e.canvas.height),
                i.reset(),
                a.reset(),
                s.reset()
        }
    }
}
function WebGLTextures(e, t, n, r, i, a, s) {
    const o = i.isWebGL2,
        l = i.maxTextures,
        c = i.maxCubemapSize,
        h = i.maxTextureSize,
        u = i.maxSamples,
        d = new WeakMap;
    let p,
        m = !1;
    try {
        m = 'undefined' != typeof OffscreenCanvas &&
            null !== new OffscreenCanvas(1, 1).getContext('2d')
    } catch (e) {
    }
    function f(e, t) {
        return m ? new OffscreenCanvas(e, t) : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas')
    }
    function g(e, t, n, r) {
        let i = 1;
        if (
            (e.width > r || e.height > r) &&
            (i = r / Math.max(e.width, e.height)),
            i < 1 ||
            !0 === t
        ) {
            if (
                'undefined' != typeof HTMLImageElement &&
                e instanceof HTMLImageElement ||
                'undefined' != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement ||
                'undefined' != typeof ImageBitmap &&
                e instanceof ImageBitmap
            ) {
                const r = t ? floorPowerOfTwo : Math.floor,
                    a = r(i * e.width),
                    s = r(i * e.height);
                void 0 === p &&
                (p = f(a, s));
                const o = n ? f(a, s) : p;
                o.width = a,
                    o.height = s;
                return o.getContext('2d').drawImage(e, 0, 0, a, s),
                    console.warn(
                        'THREE.WebGLRenderer: Texture has been resized from (' + e.width + 'x' + e.height + ') to (' + a + 'x' + s + ').'
                    ),
                    o
            }
            return 'data' in e &&
            console.warn(
                'THREE.WebGLRenderer: Image in DataTexture is too big (' + e.width + 'x' + e.height + ').'
            ),
                e
        }
        return e
    }
    function v(e) {
        return isPowerOfTwo(e.width) &&
            isPowerOfTwo(e.height)
    }
    function _(e, t) {
        return e.generateMipmaps &&
            t &&
            1003 !== e.minFilter &&
            1006 !== e.minFilter
    }
    function x(t, n, i, a) {
        e.generateMipmap(t);
        r.get(n).__maxMipLevel = Math.log2(Math.max(i, a))
    }
    function y(n, r, i) {
        if (!1 === o) return r;
        if (null !== n) {
            if (void 0 !== e[n]) return e[n];
            console.warn(
                'THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format \'' + n + '\''
            )
        }
        let a = r;
        return 6403 === r &&
        (5126 === i && (a = 33326), 5131 === i && (a = 33325), 5121 === i && (a = 33321)),
        6407 === r &&
        (5126 === i && (a = 34837), 5131 === i && (a = 34843), 5121 === i && (a = 32849)),
        6408 === r &&
        (5126 === i && (a = 34836), 5131 === i && (a = 34842), 5121 === i && (a = 32856)),
        33325 !== a &&
        33326 !== a &&
        34842 !== a &&
        34836 !== a ||
        t.get('EXT_color_buffer_float'),
            a
    }
    function b(e) {
        return 1003 === e ||
        1004 === e ||
        1005 === e ? 9728 : 9729
    }
    function M(t) {
        const n = t.target;
        n.removeEventListener('dispose', M),
            function (t) {
                const n = r.get(t);
                if (void 0 === n.__webglInit) return;
                e.deleteTexture(n.__webglTexture),
                    r.remove(t)
            }(n),
        n.isVideoTexture &&
        d.delete(n),
            s.memory.textures--
    }
    function w(t) {
        const n = t.target;
        n.removeEventListener('dispose', w),
            function (t) {
                const n = t.texture,
                    i = r.get(t),
                    a = r.get(n);
                if (!t) return;
                void 0 !== a.__webglTexture &&
                e.deleteTexture(a.__webglTexture);
                t.depthTexture &&
                t.depthTexture.dispose();
                if (t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) e.deleteFramebuffer(i.__webglFramebuffer[t]),
                i.__webglDepthbuffer &&
                e.deleteRenderbuffer(i.__webglDepthbuffer[t]);
                else e.deleteFramebuffer(i.__webglFramebuffer),
                i.__webglDepthbuffer &&
                e.deleteRenderbuffer(i.__webglDepthbuffer),
                i.__webglMultisampledFramebuffer &&
                e.deleteFramebuffer(i.__webglMultisampledFramebuffer),
                i.__webglColorRenderbuffer &&
                e.deleteRenderbuffer(i.__webglColorRenderbuffer),
                i.__webglDepthRenderbuffer &&
                e.deleteRenderbuffer(i.__webglDepthRenderbuffer);
                r.remove(n),
                    r.remove(t)
            }(n),
            s.memory.textures--
    }
    let S = 0;
    function T(e, t) {
        const i = r.get(e);
        if (
            e.isVideoTexture &&
            function (e) {
                const t = s.render.frame;
                d.get(e) !== t &&
                (d.set(e, t), e.update())
            }(e),
            e.version > 0 &&
            i.__version !== e.version
        ) {
            const n = e.image;
            if (void 0 === n) console.warn(
                'THREE.WebGLRenderer: Texture marked for update but image is undefined'
            );
            else {
                if (!1 !== n.complete) return void P(i, e, t);
                console.warn(
                    'THREE.WebGLRenderer: Texture marked for update but image is incomplete'
                )
            }
        }
        n.activeTexture(33984 + t),
            n.bindTexture(3553, i.__webglTexture)
    }
    function E(t, i) {
        const s = r.get(t);
        t.version > 0 &&
        s.__version !== t.version ? function (t, r, i) {
            if (6 !== r.image.length) return;
            C(t, r),
                n.activeTexture(33984 + i),
                n.bindTexture(34067, t.__webglTexture),
                e.pixelStorei(37440, r.flipY),
                e.pixelStorei(37441, r.premultiplyAlpha),
                e.pixelStorei(3317, r.unpackAlignment),
                e.pixelStorei(37443, 0);
            const s = r &&
                    (r.isCompressedTexture || r.image[0].isCompressedTexture),
                l = r.image[0] &&
                    r.image[0].isDataTexture,
                h = [];
            for (let e = 0; e < 6; e++) h[e] = s ||
            l ? l ? r.image[e].image : r.image[e] : g(r.image[e], !1, !0, c);
            const u = h[0],
                d = v(u) ||
                    o,
                p = a.convert(r.format),
                m = a.convert(r.type),
                f = y(r.internalFormat, p, m);
            let b;
            if (R(34067, r, d), s) {
                for (let e = 0; e < 6; e++) {
                    b = h[e].mipmaps;
                    for (let t = 0; t < b.length; t++) {
                        const i = b[t];
                        1023 !== r.format &&
                        1022 !== r.format ? null !== p ? n.compressedTexImage2D(34069 + e, t, f, i.width, i.height, 0, i.data) : console.warn(
                            'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
                        ) : n.texImage2D(34069 + e, t, f, i.width, i.height, 0, p, m, i.data)
                    }
                }
                t.__maxMipLevel = b.length - 1
            } else {
                b = r.mipmaps;
                for (let e = 0; e < 6; e++) if (l) {
                    n.texImage2D(34069 + e, 0, f, h[e].width, h[e].height, 0, p, m, h[e].data);
                    for (let t = 0; t < b.length; t++) {
                        const r = b[t].image[e].image;
                        n.texImage2D(34069 + e, t + 1, f, r.width, r.height, 0, p, m, r.data)
                    }
                } else {
                    n.texImage2D(34069 + e, 0, f, p, m, h[e]);
                    for (let t = 0; t < b.length; t++) {
                        const r = b[t];
                        n.texImage2D(34069 + e, t + 1, f, p, m, r.image[e])
                    }
                }
                t.__maxMipLevel = b.length
            }
            _(r, d) &&
            x(34067, r, u.width, u.height);
            t.__version = r.version,
            r.onUpdate &&
            r.onUpdate(r)
        }(s, t, i) : (
            n.activeTexture(33984 + i),
                n.bindTexture(34067, s.__webglTexture)
        )
    }
    const L = {
            1000: 10497,
            1001: 33071,
            1002: 33648
        },
        A = {
            1003: 9728,
            1004: 9984,
            1005: 9986,
            1006: 9729,
            1007: 9985,
            1008: 9987
        };
    function R(n, a, s) {
        if (
            s ? (
                e.texParameteri(n, 10242, L[a.wrapS]),
                    e.texParameteri(n, 10243, L[a.wrapT]),
                32879 !== n &&
                35866 !== n ||
                e.texParameteri(n, 32882, L[a.wrapR]),
                    e.texParameteri(n, 10240, A[a.magFilter]),
                    e.texParameteri(n, 10241, A[a.minFilter])
            ) : (
                e.texParameteri(n, 10242, 33071),
                    e.texParameteri(n, 10243, 33071),
                32879 !== n &&
                35866 !== n ||
                e.texParameteri(n, 32882, 33071),
                1001 === a.wrapS &&
                1001 === a.wrapT ||
                console.warn(
                    'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
                ),
                    e.texParameteri(n, 10240, b(a.magFilter)),
                    e.texParameteri(n, 10241, b(a.minFilter)),
                1003 !== a.minFilter &&
                1006 !== a.minFilter &&
                console.warn(
                    'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
                )
            ),
            !0 === t.has('EXT_texture_filter_anisotropic')
        ) {
            const s = t.get('EXT_texture_filter_anisotropic');
            if (1015 === a.type && !1 === t.has('OES_texture_float_linear')) return;
            if (
                !1 === o &&
                1016 === a.type &&
                !1 === t.has('OES_texture_half_float_linear')
            ) return;
            (a.anisotropy > 1 || r.get(a).__currentAnisotropy) &&
            (
                e.texParameterf(
                    n,
                    s.TEXTURE_MAX_ANISOTROPY_EXT,
                    Math.min(a.anisotropy, i.getMaxAnisotropy())
                ),
                    r.get(a).__currentAnisotropy = a.anisotropy
            )
        }
    }
    function C(t, n) {
        void 0 === t.__webglInit &&
        (
            t.__webglInit = !0,
                n.addEventListener('dispose', M),
                t.__webglTexture = e.createTexture(),
                s.memory.textures++
        )
    }
    function P(t, r, i) {
        let s = 3553;
        r.isDataTexture2DArray &&
        (s = 35866),
        r.isDataTexture3D &&
        (s = 32879),
            C(t, r),
            n.activeTexture(33984 + i),
            n.bindTexture(s, t.__webglTexture),
            e.pixelStorei(37440, r.flipY),
            e.pixelStorei(37441, r.premultiplyAlpha),
            e.pixelStorei(3317, r.unpackAlignment),
            e.pixelStorei(37443, 0);
        const l = function (e) {
                    return !o &&
                        (
                            1001 !== e.wrapS ||
                            1001 !== e.wrapT ||
                            1003 !== e.minFilter &&
                            1006 !== e.minFilter
                        )
                }(r) &&
                !1 === v(r.image),
            c = g(r.image, l, !1, h),
            u = v(c) ||
                o,
            d = a.convert(r.format);
        let p,
            m = a.convert(r.type),
            f = y(r.internalFormat, d, m);
        R(s, r, u);
        const b = r.mipmaps;
        if (r.isDepthTexture) f = 6402,
            o ? f = 1015 === r.type ? 36012 : 1014 === r.type ? 33190 : 1020 === r.type ? 35056 : 33189 : 1015 === r.type &&
                console.error(
                    'WebGLRenderer: Floating point depth texture requires WebGL2.'
                ),
        1026 === r.format &&
        6402 === f &&
        1012 !== r.type &&
        1014 !== r.type &&
        (
            console.warn(
                'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
            ),
                r.type = 1012,
                m = a.convert(r.type)
        ),
        1027 === r.format &&
        6402 === f &&
        (
            f = 34041,
            1020 !== r.type &&
            (
                console.warn(
                    'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
                ),
                    r.type = 1020,
                    m = a.convert(r.type)
            )
        ),
            n.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, null);
        else if (r.isDataTexture) if (b.length > 0 && u) {
            for (let e = 0, t = b.length; e < t; e++) p = b[e],
                n.texImage2D(3553, e, f, p.width, p.height, 0, d, m, p.data);
            r.generateMipmaps = !1,
                t.__maxMipLevel = b.length - 1
        } else n.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, c.data),
            t.__maxMipLevel = 0;
        else if (r.isCompressedTexture) {
            for (let e = 0, t = b.length; e < t; e++) p = b[e],
                1023 !== r.format &&
                1022 !== r.format ? null !== d ? n.compressedTexImage2D(3553, e, f, p.width, p.height, 0, p.data) : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                ) : n.texImage2D(3553, e, f, p.width, p.height, 0, d, m, p.data);
            t.__maxMipLevel = b.length - 1
        } else if (r.isDataTexture2DArray) n.texImage3D(35866, 0, f, c.width, c.height, c.depth, 0, d, m, c.data),
            t.__maxMipLevel = 0;
        else if (r.isDataTexture3D) n.texImage3D(32879, 0, f, c.width, c.height, c.depth, 0, d, m, c.data),
            t.__maxMipLevel = 0;
        else if (b.length > 0 && u) {
            for (let e = 0, t = b.length; e < t; e++) p = b[e],
                n.texImage2D(3553, e, f, d, m, p);
            r.generateMipmaps = !1,
                t.__maxMipLevel = b.length - 1
        } else n.texImage2D(3553, 0, f, d, m, c),
            t.__maxMipLevel = 0;
        _(r, u) &&
        x(s, r, c.width, c.height),
            t.__version = r.version,
        r.onUpdate &&
        r.onUpdate(r)
    }
    function I(t, i, s, o) {
        const l = i.texture,
            c = a.convert(l.format),
            h = a.convert(l.type),
            u = y(l.internalFormat, c, h);
        32879 === o ||
        35866 === o ? n.texImage3D(o, 0, u, i.width, i.height, i.depth, 0, c, h, null) : n.texImage2D(o, 0, u, i.width, i.height, 0, c, h, null),
            n.bindFramebuffer(36160, t),
            e.framebufferTexture2D(36160, s, o, r.get(l).__webglTexture, 0),
            n.bindFramebuffer(36160, null)
    }
    function N(t, n, r) {
        if (e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer) {
            let i = 33189;
            if (r) {
                const t = n.depthTexture;
                t &&
                t.isDepthTexture &&
                (1015 === t.type ? i = 36012 : 1014 === t.type && (i = 33190));
                const r = B(n);
                e.renderbufferStorageMultisample(36161, r, i, n.width, n.height)
            } else e.renderbufferStorage(36161, i, n.width, n.height);
            e.framebufferRenderbuffer(36160, 36096, 36161, t)
        } else if (n.depthBuffer && n.stencilBuffer) {
            if (r) {
                const t = B(n);
                e.renderbufferStorageMultisample(36161, t, 35056, n.width, n.height)
            } else e.renderbufferStorage(36161, 34041, n.width, n.height);
            e.framebufferRenderbuffer(36160, 33306, 36161, t)
        } else {
            const t = n.texture,
                i = a.convert(t.format),
                s = a.convert(t.type),
                o = y(t.internalFormat, i, s);
            if (r) {
                const t = B(n);
                e.renderbufferStorageMultisample(36161, t, o, n.width, n.height)
            } else e.renderbufferStorage(36161, o, n.width, n.height)
        }
        e.bindRenderbuffer(36161, null)
    }
    function D(t) {
        const i = r.get(t),
            a = !0 === t.isWebGLCubeRenderTarget;
        if (t.depthTexture) {
            if (a) throw new Error('target.depthTexture not supported in Cube render targets');
            !function (t, i) {
                if (i && i.isWebGLCubeRenderTarget) throw new Error('Depth Texture with cube render targets is not supported');
                if (
                    n.bindFramebuffer(36160, t),
                    !i.depthTexture ||
                    !i.depthTexture.isDepthTexture
                ) throw new Error(
                    'renderTarget.depthTexture must be an instance of THREE.DepthTexture'
                );
                r.get(i.depthTexture).__webglTexture &&
                i.depthTexture.image.width === i.width &&
                i.depthTexture.image.height === i.height ||
                (
                    i.depthTexture.image.width = i.width,
                        i.depthTexture.image.height = i.height,
                        i.depthTexture.needsUpdate = !0
                ),
                    T(i.depthTexture, 0);
                const a = r.get(i.depthTexture).__webglTexture;
                if (1026 === i.depthTexture.format) e.framebufferTexture2D(36160, 36096, 3553, a, 0);
                else {
                    if (1027 !== i.depthTexture.format) throw new Error('Unknown depthTexture format');
                    e.framebufferTexture2D(36160, 33306, 3553, a, 0)
                }
            }(i.__webglFramebuffer, t)
        } else if (a) {
            i.__webglDepthbuffer = [];
            for (let r = 0; r < 6; r++) n.bindFramebuffer(36160, i.__webglFramebuffer[r]),
                i.__webglDepthbuffer[r] = e.createRenderbuffer(),
                N(i.__webglDepthbuffer[r], t, !1)
        } else n.bindFramebuffer(36160, i.__webglFramebuffer),
            i.__webglDepthbuffer = e.createRenderbuffer(),
            N(i.__webglDepthbuffer, t, !1);
        n.bindFramebuffer(36160, null)
    }
    function B(e) {
        return o &&
        e.isWebGLMultisampleRenderTarget ? Math.min(u, e.samples) : 0
    }
    let V = !1,
        U = !1;
    this.allocateTextureUnit = function () {
        const e = S;
        return e >= l &&
        console.warn(
            'THREE.WebGLTextures: Trying to use ' + e + ' texture units while this GPU supports only ' + l
        ),
            S += 1,
            e
    },
        this.resetTextureUnits = function () {
            S = 0
        },
        this.setTexture2D = T,
        this.setTexture2DArray = function (e, t) {
            const i = r.get(e);
            e.version > 0 &&
            i.__version !== e.version ? P(i, e, t) : (
                n.activeTexture(33984 + t),
                    n.bindTexture(35866, i.__webglTexture)
            )
        },
        this.setTexture3D = function (e, t) {
            const i = r.get(e);
            e.version > 0 &&
            i.__version !== e.version ? P(i, e, t) : (
                n.activeTexture(33984 + t),
                    n.bindTexture(32879, i.__webglTexture)
            )
        },
        this.setTextureCube = E,
        this.setupRenderTarget = function (t) {
            const i = t.texture,
                l = r.get(t),
                c = r.get(i);
            t.addEventListener('dispose', w),
                c.__webglTexture = e.createTexture(),
                c.__version = i.version,
                s.memory.textures++;
            const h = !0 === t.isWebGLCubeRenderTarget,
                u = !0 === t.isWebGLMultisampleRenderTarget,
                d = i.isDataTexture3D ||
                    i.isDataTexture2DArray,
                p = v(t) ||
                    o;
            if (
                !o ||
                1022 !== i.format ||
                1015 !== i.type &&
                1016 !== i.type ||
                (
                    i.format = 1023,
                        console.warn(
                            'THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.'
                        )
                ),
                    h
            ) {
                l.__webglFramebuffer = [];
                for (let t = 0; t < 6; t++) l.__webglFramebuffer[t] = e.createFramebuffer()
            } else if (l.__webglFramebuffer = e.createFramebuffer(), u) if (o) {
                l.__webglMultisampledFramebuffer = e.createFramebuffer(),
                    l.__webglColorRenderbuffer = e.createRenderbuffer(),
                    e.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
                const r = a.convert(i.format),
                    s = a.convert(i.type),
                    o = y(i.internalFormat, r, s),
                    c = B(t);
                e.renderbufferStorageMultisample(36161, c, o, t.width, t.height),
                    n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer),
                    e.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer),
                    e.bindRenderbuffer(36161, null),
                t.depthBuffer &&
                (
                    l.__webglDepthRenderbuffer = e.createRenderbuffer(),
                        N(l.__webglDepthRenderbuffer, t, !0)
                ),
                    n.bindFramebuffer(36160, null)
            } else console.warn(
                'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.'
            );
            if (h) {
                n.bindTexture(34067, c.__webglTexture),
                    R(34067, i, p);
                for (let e = 0; e < 6; e++) I(l.__webglFramebuffer[e], t, 36064, 34069 + e);
                _(i, p) &&
                x(34067, i, t.width, t.height),
                    n.bindTexture(34067, null)
            } else {
                let e = 3553;
                if (d) if (o) {
                    e = i.isDataTexture3D ? 32879 : 35866
                } else console.warn(
                    'THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.'
                );
                n.bindTexture(e, c.__webglTexture),
                    R(e, i, p),
                    I(l.__webglFramebuffer, t, 36064, e),
                _(i, p) &&
                x(3553, i, t.width, t.height),
                    n.bindTexture(3553, null)
            }
            t.depthBuffer &&
            D(t)
        },
        this.updateRenderTargetMipmap = function (e) {
            const t = e.texture;
            if (_(t, v(e) || o)) {
                const i = e.isWebGLCubeRenderTarget ? 34067 : 3553,
                    a = r.get(t).__webglTexture;
                n.bindTexture(i, a),
                    x(i, t, e.width, e.height),
                    n.bindTexture(i, null)
            }
        },
        this.updateMultisampleRenderTarget = function (t) {
            if (t.isWebGLMultisampleRenderTarget) if (o) {
                const i = t.width,
                    a = t.height;
                let s = 16384;
                t.depthBuffer &&
                (s |= 256),
                t.stencilBuffer &&
                (s |= 1024);
                const o = r.get(t);
                n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer),
                    n.bindFramebuffer(36009, o.__webglFramebuffer),
                    e.blitFramebuffer(0, 0, i, a, 0, 0, i, a, s, 9728),
                    n.bindFramebuffer(36008, null),
                    n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer)
            } else console.warn(
                'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.'
            )
        },
        this.safeSetTexture2D = function (e, t) {
            e &&
            e.isWebGLRenderTarget &&
            (
                !1 === V &&
                (
                    console.warn(
                        'THREE.WebGLTextures.safeSetTexture2D: don\'t use render targets as textures. Use their .texture property instead.'
                    ),
                        V = !0
                ),
                    e = e.texture
            ),
                T(e, t)
        },
        this.safeSetTextureCube = function (e, t) {
            e &&
            e.isWebGLCubeRenderTarget &&
            (
                !1 === U &&
                (
                    console.warn(
                        'THREE.WebGLTextures.safeSetTextureCube: don\'t use cube render targets as textures. Use their .texture property instead.'
                    ),
                        U = !0
                ),
                    e = e.texture
            ),
                E(e, t)
        }
}
function WebGLUtils(e, t, n) {
    const r = n.isWebGL2;
    return {
        convert: function (e) {
            let n;
            if (1009 === e) return 5121;
            if (1017 === e) return 32819;
            if (1018 === e) return 32820;
            if (1019 === e) return 33635;
            if (1010 === e) return 5120;
            if (1011 === e) return 5122;
            if (1012 === e) return 5123;
            if (1013 === e) return 5124;
            if (1014 === e) return 5125;
            if (1015 === e) return 5126;
            if (1016 === e) return r ? 5131 : (
                n = t.get('OES_texture_half_float'),
                    null !== n ? n.HALF_FLOAT_OES : null
            );
            if (1021 === e) return 6406;
            if (1022 === e) return 6407;
            if (1023 === e) return 6408;
            if (1024 === e) return 6409;
            if (1025 === e) return 6410;
            if (1026 === e) return 6402;
            if (1027 === e) return 34041;
            if (1028 === e) return 6403;
            if (1029 === e) return 36244;
            if (1030 === e) return 33319;
            if (1031 === e) return 33320;
            if (1032 === e) return 36248;
            if (1033 === e) return 36249;
            if (33776 === e || 33777 === e || 33778 === e || 33779 === e) {
                if (n = t.get('WEBGL_compressed_texture_s3tc'), null === n) return null;
                if (33776 === e) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (33777 === e) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (33778 === e) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (33779 === e) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (35840 === e || 35841 === e || 35842 === e || 35843 === e) {
                if (n = t.get('WEBGL_compressed_texture_pvrtc'), null === n) return null;
                if (35840 === e) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (35841 === e) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (35842 === e) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (35843 === e) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (36196 === e) return n = t.get('WEBGL_compressed_texture_etc1'),
                null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (
                (37492 === e || 37496 === e) &&
                (n = t.get('WEBGL_compressed_texture_etc'), null !== n)
            ) {
                if (37492 === e) return n.COMPRESSED_RGB8_ETC2;
                if (37496 === e) return n.COMPRESSED_RGBA8_ETC2_EAC
            }
            return 37808 === e ||
            37809 === e ||
            37810 === e ||
            37811 === e ||
            37812 === e ||
            37813 === e ||
            37814 === e ||
            37815 === e ||
            37816 === e ||
            37817 === e ||
            37818 === e ||
            37819 === e ||
            37820 === e ||
            37821 === e ||
            37840 === e ||
            37841 === e ||
            37842 === e ||
            37843 === e ||
            37844 === e ||
            37845 === e ||
            37846 === e ||
            37847 === e ||
            37848 === e ||
            37849 === e ||
            37850 === e ||
            37851 === e ||
            37852 === e ||
            37853 === e ? (n = t.get('WEBGL_compressed_texture_astc'), null !== n ? e : null) : 36492 === e ? (n = t.get('EXT_texture_compression_bptc'), null !== n ? e : null) : 1020 === e ? r ? 34042 : (
                n = t.get('WEBGL_depth_texture'),
                    null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null
            ) : void 0
        }
    }
}
class ArrayCamera extends PerspectiveCamera {
    constructor(e = []) {
        super (),
            this.cameras = e
    }
}
ArrayCamera.prototype.isArrayCamera = !0;
class Group extends Object3D {
    constructor() {
        super (),
            this.type = 'Group'
    }
}
Group.prototype.isGroup = !0;
const _moveEvent = {
    type: 'move'
};
class WebXRController {
    constructor() {
        this._targetRay = null,
            this._grip = null,
            this._hand = null
    }
    getHandSpace() {
        return null === this._hand &&
        (
            this._hand = new Group,
                this._hand.matrixAutoUpdate = !1,
                this._hand.visible = !1,
                this._hand.joints = {},
                this._hand.inputState = {
                    pinching: !1
                }
        ),
            this._hand
    }
    getTargetRaySpace() {
        return null === this._targetRay &&
        (
            this._targetRay = new Group,
                this._targetRay.matrixAutoUpdate = !1,
                this._targetRay.visible = !1,
                this._targetRay.hasLinearVelocity = !1,
                this._targetRay.linearVelocity = new Vector3,
                this._targetRay.hasAngularVelocity = !1,
                this._targetRay.angularVelocity = new Vector3
        ),
            this._targetRay
    }
    getGripSpace() {
        return null === this._grip &&
        (
            this._grip = new Group,
                this._grip.matrixAutoUpdate = !1,
                this._grip.visible = !1,
                this._grip.hasLinearVelocity = !1,
                this._grip.linearVelocity = new Vector3,
                this._grip.hasAngularVelocity = !1,
                this._grip.angularVelocity = new Vector3
        ),
            this._grip
    }
    dispatchEvent(e) {
        return null !== this._targetRay &&
        this._targetRay.dispatchEvent(e),
        null !== this._grip &&
        this._grip.dispatchEvent(e),
        null !== this._hand &&
        this._hand.dispatchEvent(e),
            this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: 'disconnected',
            data: e
        }),
        null !== this._targetRay &&
        (this._targetRay.visible = !1),
        null !== this._grip &&
        (this._grip.visible = !1),
        null !== this._hand &&
        (this._hand.visible = !1),
            this
    }
    update(e, t, n) {
        let r = null,
            i = null,
            a = null;
        const s = this._targetRay,
            o = this._grip,
            l = this._hand;
        if (e && 'visible-blurred' !== t.session.visibilityState) if (
            null !== s &&
            (
                r = t.getPose(e.targetRaySpace, n),
                null !== r &&
                (
                    s.matrix.fromArray(r.transform.matrix),
                        s.matrix.decompose(s.position, s.rotation, s.scale),
                        r.linearVelocity ? (
                            s.hasLinearVelocity = !0,
                                s.linearVelocity.copy(r.linearVelocity)
                        ) : s.hasLinearVelocity = !1,
                        r.angularVelocity ? (
                            s.hasAngularVelocity = !0,
                                s.angularVelocity.copy(r.angularVelocity)
                        ) : s.hasAngularVelocity = !1,
                        this.dispatchEvent(_moveEvent)
                )
            ),
            l &&
            e.hand
        ) {
            a = !0;
            for (const r of e.hand.values()) {
                const e = t.getJointPose(r, n);
                if (void 0 === l.joints[r.jointName]) {
                    const e = new Group;
                    e.matrixAutoUpdate = !1,
                        e.visible = !1,
                        l.joints[r.jointName] = e,
                        l.add(e)
                }
                const i = l.joints[r.jointName];
                null !== e &&
                (
                    i.matrix.fromArray(e.transform.matrix),
                        i.matrix.decompose(i.position, i.rotation, i.scale),
                        i.jointRadius = e.radius
                ),
                    i.visible = null !== e
            }
            const r = l.joints['index-finger-tip'],
                i = l.joints['thumb-tip'],
                s = r.position.distanceTo(i.position),
                o = 0.02,
                c = 0.005;
            l.inputState.pinching &&
            s > o + c ? (
                l.inputState.pinching = !1,
                    this.dispatchEvent({
                        type: 'pinchend',
                        handedness: e.handedness,
                        target: this
                    })
            ) : !l.inputState.pinching &&
                s <= o - c &&
                (
                    l.inputState.pinching = !0,
                        this.dispatchEvent({
                            type: 'pinchstart',
                            handedness: e.handedness,
                            target: this
                        })
                )
        } else null !== o &&
            e.gripSpace &&
            (
                i = t.getPose(e.gripSpace, n),
                null !== i &&
                (
                    o.matrix.fromArray(i.transform.matrix),
                        o.matrix.decompose(o.position, o.rotation, o.scale),
                        i.linearVelocity ? (
                            o.hasLinearVelocity = !0,
                                o.linearVelocity.copy(i.linearVelocity)
                        ) : o.hasLinearVelocity = !1,
                        i.angularVelocity ? (
                            o.hasAngularVelocity = !0,
                                o.angularVelocity.copy(i.angularVelocity)
                        ) : o.hasAngularVelocity = !1
                )
            );
        return null !== s &&
        (s.visible = null !== r),
        null !== o &&
        (o.visible = null !== i),
        null !== l &&
        (l.visible = null !== a),
            this
    }
}
class WebXRManager extends EventDispatcher {
    constructor(e, t) {
        super ();
        const n = this,
            r = e.state;
        let i = null,
            a = 1,
            s = null,
            o = 'local-floor',
            l = null;
        const c = [],
            h = new Map,
            u = new PerspectiveCamera;
        u.layers.enable(1),
            u.viewport = new Vector4;
        const d = new PerspectiveCamera;
        d.layers.enable(2),
            d.viewport = new Vector4;
        const p = [
                u,
                d
            ],
            m = new ArrayCamera;
        m.layers.enable(1),
            m.layers.enable(2);
        let f = null,
            g = null;
        function v(e) {
            const t = h.get(e.inputSource);
            t &&
            t.dispatchEvent({
                type: e.type,
                data: e.inputSource
            })
        }
        function _() {
            h.forEach((function (e, t) {
                e.disconnect(t)
            })),
                h.clear(),
                f = null,
                g = null,
                r.bindXRFramebuffer(null),
                e.setRenderTarget(e.getRenderTarget()),
                S.stop(),
                n.isPresenting = !1,
                n.dispatchEvent({
                    type: 'sessionend'
                })
        }
        function x(e) {
            const t = i.inputSources;
            for (let e = 0; e < c.length; e++) h.set(t[e], c[e]);
            for (let t = 0; t < e.removed.length; t++) {
                const n = e.removed[t],
                    r = h.get(n);
                r &&
                (r.dispatchEvent({
                    type: 'disconnected',
                    data: n
                }), h.delete(n))
            }
            for (let t = 0; t < e.added.length; t++) {
                const n = e.added[t],
                    r = h.get(n);
                r &&
                r.dispatchEvent({
                    type: 'connected',
                    data: n
                })
            }
        }
        this.enabled = !1,
            this.isPresenting = !1,
            this.getController = function (e) {
                let t = c[e];
                return void 0 === t &&
                (t = new WebXRController, c[e] = t),
                    t.getTargetRaySpace()
            },
            this.getControllerGrip = function (e) {
                let t = c[e];
                return void 0 === t &&
                (t = new WebXRController, c[e] = t),
                    t.getGripSpace()
            },
            this.getHand = function (e) {
                let t = c[e];
                return void 0 === t &&
                (t = new WebXRController, c[e] = t),
                    t.getHandSpace()
            },
            this.setFramebufferScaleFactor = function (e) {
                a = e,
                !0 === n.isPresenting &&
                console.warn(
                    'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
                )
            },
            this.setReferenceSpaceType = function (e) {
                o = e,
                !0 === n.isPresenting &&
                console.warn(
                    'THREE.WebXRManager: Cannot change reference space type while presenting.'
                )
            },
            this.getReferenceSpace = function () {
                return s
            },
            this.getSession = function () {
                return i
            },
            this.setSession = async function (e) {
                if (i = e, null !== i) {
                    i.addEventListener('select', v),
                        i.addEventListener('selectstart', v),
                        i.addEventListener('selectend', v),
                        i.addEventListener('squeeze', v),
                        i.addEventListener('squeezestart', v),
                        i.addEventListener('squeezeend', v),
                        i.addEventListener('end', _),
                        i.addEventListener('inputsourceschange', x);
                    const e = t.getContextAttributes();
                    !0 !== e.xrCompatible &&
                    await t.makeXRCompatible();
                    const r = {
                            antialias: e.antialias,
                            alpha: e.alpha,
                            depth: e.depth,
                            stencil: e.stencil,
                            framebufferScaleFactor: a
                        },
                        l = new XRWebGLLayer(i, t, r);
                    i.updateRenderState({
                        baseLayer: l
                    }),
                        s = await i.requestReferenceSpace(o),
                        S.setContext(i),
                        S.start(),
                        n.isPresenting = !0,
                        n.dispatchEvent({
                            type: 'sessionstart'
                        })
                }
            };
        const y = new Vector3,
            b = new Vector3;
        function M(e, t) {
            null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
                e.matrixWorldInverse.copy(e.matrixWorld).invert()
        }
        this.getCamera = function (e) {
            m.near = d.near = u.near = e.near,
                m.far = d.far = u.far = e.far,
            f === m.near &&
            g === m.far ||
            (
                i.updateRenderState({
                    depthNear: m.near,
                    depthFar: m.far
                }),
                    f = m.near,
                    g = m.far
            );
            const t = e.parent,
                n = m.cameras;
            M(m, t);
            for (let e = 0; e < n.length; e++) M(n[e], t);
            e.matrixWorld.copy(m.matrixWorld),
                e.matrix.copy(m.matrix),
                e.matrix.decompose(e.position, e.quaternion, e.scale);
            const r = e.children;
            for (let e = 0, t = r.length; e < t; e++) r[e].updateMatrixWorld(!0);
            return 2 === n.length ? function (e, t, n) {
                y.setFromMatrixPosition(t.matrixWorld),
                    b.setFromMatrixPosition(n.matrixWorld);
                const r = y.distanceTo(b),
                    i = t.projectionMatrix.elements,
                    a = n.projectionMatrix.elements,
                    s = i[14] / (i[10] - 1),
                    o = i[14] / (i[10] + 1),
                    l = (i[9] + 1) / i[5],
                    c = (i[9] - 1) / i[5],
                    h = (i[8] - 1) / i[0],
                    u = (a[8] + 1) / a[0],
                    d = s * h,
                    p = s * u,
                    m = r / ( - h + u),
                    f = m * - h;
                t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                    e.translateX(f),
                    e.translateZ(m),
                    e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                    e.matrixWorldInverse.copy(e.matrixWorld).invert();
                const g = s + m,
                    v = o + m,
                    _ = d - f,
                    x = p + (r - f),
                    M = l * o / v * g,
                    w = c * o / v * g;
                e.projectionMatrix.makePerspective(_, x, M, w, g, v)
            }(m, u, d) : m.projectionMatrix.copy(u.projectionMatrix),
                m
        };
        let w = null;
        const S = new WebGLAnimation;
        S.setAnimationLoop(
            (
                function (e, t) {
                    if (l = t.getViewerPose(s), null !== l) {
                        const e = l.views,
                            t = i.renderState.baseLayer;
                        r.bindXRFramebuffer(t.framebuffer);
                        let n = !1;
                        e.length !== m.cameras.length &&
                        (m.cameras.length = 0, n = !0);
                        for (let r = 0; r < e.length; r++) {
                            const i = e[r],
                                a = t.getViewport(i),
                                s = p[r];
                            s.matrix.fromArray(i.transform.matrix),
                                s.projectionMatrix.fromArray(i.projectionMatrix),
                                s.viewport.set(a.x, a.y, a.width, a.height),
                            0 === r &&
                            m.matrix.copy(s.matrix),
                            !0 === n &&
                            m.cameras.push(s)
                        }
                    }
                    const n = i.inputSources;
                    for (let e = 0; e < c.length; e++) {
                        const r = c[e],
                            i = n[e];
                        r.update(i, t, s)
                    }
                    w &&
                    w(e, t)
                }
            )
        ),
            this.setAnimationLoop = function (e) {
                w = e
            },
            this.dispose = function () {
            }
    }
}
function WebGLMaterials(e) {
    function t(t, n) {
        t.opacity.value = n.opacity,
        n.color &&
        t.diffuse.value.copy(n.color),
        n.emissive &&
        t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
        n.map &&
        (t.map.value = n.map),
        n.alphaMap &&
        (t.alphaMap.value = n.alphaMap),
        n.specularMap &&
        (t.specularMap.value = n.specularMap);
        const r = e.get(n).envMap;
        if (r) {
            t.envMap.value = r,
                t.flipEnvMap.value = r.isCubeTexture &&
                r._needsFlipEnvMap ? - 1 : 1,
                t.reflectivity.value = n.reflectivity,
                t.refractionRatio.value = n.refractionRatio;
            const i = e.get(r).__maxMipLevel;
            void 0 !== i &&
            (t.maxMipLevel.value = i)
        }
        let i,
            a;
        n.lightMap &&
        (
            t.lightMap.value = n.lightMap,
                t.lightMapIntensity.value = n.lightMapIntensity
        ),
        n.aoMap &&
        (
            t.aoMap.value = n.aoMap,
                t.aoMapIntensity.value = n.aoMapIntensity
        ),
            n.map ? i = n.map : n.specularMap ? i = n.specularMap : n.displacementMap ? i = n.displacementMap : n.normalMap ? i = n.normalMap : n.bumpMap ? i = n.bumpMap : n.roughnessMap ? i = n.roughnessMap : n.metalnessMap ? i = n.metalnessMap : n.alphaMap ? i = n.alphaMap : n.emissiveMap ? i = n.emissiveMap : n.clearcoatMap ? i = n.clearcoatMap : n.clearcoatNormalMap ? i = n.clearcoatNormalMap : n.clearcoatRoughnessMap &&
                (i = n.clearcoatRoughnessMap),
        void 0 !== i &&
        (
            i.isWebGLRenderTarget &&
            (i = i.texture),
            !0 === i.matrixAutoUpdate &&
            i.updateMatrix(),
                t.uvTransform.value.copy(i.matrix)
        ),
            n.aoMap ? a = n.aoMap : n.lightMap &&
                (a = n.lightMap),
        void 0 !== a &&
        (
            a.isWebGLRenderTarget &&
            (a = a.texture),
            !0 === a.matrixAutoUpdate &&
            a.updateMatrix(),
                t.uv2Transform.value.copy(a.matrix)
        )
    }
    function n(t, n) {
        t.roughness.value = n.roughness,
            t.metalness.value = n.metalness,
        n.roughnessMap &&
        (t.roughnessMap.value = n.roughnessMap),
        n.metalnessMap &&
        (t.metalnessMap.value = n.metalnessMap),
        n.emissiveMap &&
        (t.emissiveMap.value = n.emissiveMap),
        n.bumpMap &&
        (
            t.bumpMap.value = n.bumpMap,
                t.bumpScale.value = n.bumpScale,
            1 === n.side &&
            (t.bumpScale.value *= - 1)
        ),
        n.normalMap &&
        (
            t.normalMap.value = n.normalMap,
                t.normalScale.value.copy(n.normalScale),
            1 === n.side &&
            t.normalScale.value.negate()
        ),
        n.displacementMap &&
        (
            t.displacementMap.value = n.displacementMap,
                t.displacementScale.value = n.displacementScale,
                t.displacementBias.value = n.displacementBias
        );
        e.get(n).envMap &&
        (t.envMapIntensity.value = n.envMapIntensity)
    }
    return {
        refreshFogUniforms: function (e, t) {
            e.fogColor.value.copy(t.color),
                t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 &&
                    (e.fogDensity.value = t.density)
        },
        refreshMaterialUniforms: function (e, r, i, a) {
            r.isMeshBasicMaterial ? t(e, r) : r.isMeshLambertMaterial ? (
                t(e, r),
                    function (e, t) {
                        t.emissiveMap &&
                        (e.emissiveMap.value = t.emissiveMap)
                    }(e, r)
            ) : r.isMeshToonMaterial ? (
                t(e, r),
                    function (e, t) {
                        t.gradientMap &&
                        (e.gradientMap.value = t.gradientMap);
                        t.emissiveMap &&
                        (e.emissiveMap.value = t.emissiveMap);
                        t.bumpMap &&
                        (
                            e.bumpMap.value = t.bumpMap,
                                e.bumpScale.value = t.bumpScale,
                            1 === t.side &&
                            (e.bumpScale.value *= - 1)
                        );
                        t.normalMap &&
                        (
                            e.normalMap.value = t.normalMap,
                                e.normalScale.value.copy(t.normalScale),
                            1 === t.side &&
                            e.normalScale.value.negate()
                        );
                        t.displacementMap &&
                        (
                            e.displacementMap.value = t.displacementMap,
                                e.displacementScale.value = t.displacementScale,
                                e.displacementBias.value = t.displacementBias
                        )
                    }(e, r)
            ) : r.isMeshPhongMaterial ? (
                t(e, r),
                    function (e, t) {
                        e.specular.value.copy(t.specular),
                            e.shininess.value = Math.max(t.shininess, 0.0001),
                        t.emissiveMap &&
                        (e.emissiveMap.value = t.emissiveMap);
                        t.bumpMap &&
                        (
                            e.bumpMap.value = t.bumpMap,
                                e.bumpScale.value = t.bumpScale,
                            1 === t.side &&
                            (e.bumpScale.value *= - 1)
                        );
                        t.normalMap &&
                        (
                            e.normalMap.value = t.normalMap,
                                e.normalScale.value.copy(t.normalScale),
                            1 === t.side &&
                            e.normalScale.value.negate()
                        );
                        t.displacementMap &&
                        (
                            e.displacementMap.value = t.displacementMap,
                                e.displacementScale.value = t.displacementScale,
                                e.displacementBias.value = t.displacementBias
                        )
                    }(e, r)
            ) : r.isMeshStandardMaterial ? (
                t(e, r),
                    r.isMeshPhysicalMaterial ? function (e, t) {
                        n(e, t),
                            e.reflectivity.value = t.reflectivity,
                            e.clearcoat.value = t.clearcoat,
                            e.clearcoatRoughness.value = t.clearcoatRoughness,
                        t.sheen &&
                        e.sheen.value.copy(t.sheen);
                        t.clearcoatMap &&
                        (e.clearcoatMap.value = t.clearcoatMap);
                        t.clearcoatRoughnessMap &&
                        (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap);
                        t.clearcoatNormalMap &&
                        (
                            e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
                                e.clearcoatNormalMap.value = t.clearcoatNormalMap,
                            1 === t.side &&
                            e.clearcoatNormalScale.value.negate()
                        );
                        e.transmission.value = t.transmission,
                        t.transmissionMap &&
                        (e.transmissionMap.value = t.transmissionMap)
                    }(e, r) : n(e, r)
            ) : r.isMeshMatcapMaterial ? (
                t(e, r),
                    function (e, t) {
                        t.matcap &&
                        (e.matcap.value = t.matcap);
                        t.bumpMap &&
                        (
                            e.bumpMap.value = t.bumpMap,
                                e.bumpScale.value = t.bumpScale,
                            1 === t.side &&
                            (e.bumpScale.value *= - 1)
                        );
                        t.normalMap &&
                        (
                            e.normalMap.value = t.normalMap,
                                e.normalScale.value.copy(t.normalScale),
                            1 === t.side &&
                            e.normalScale.value.negate()
                        );
                        t.displacementMap &&
                        (
                            e.displacementMap.value = t.displacementMap,
                                e.displacementScale.value = t.displacementScale,
                                e.displacementBias.value = t.displacementBias
                        )
                    }(e, r)
            ) : r.isMeshDepthMaterial ? (
                t(e, r),
                    function (e, t) {
                        t.displacementMap &&
                        (
                            e.displacementMap.value = t.displacementMap,
                                e.displacementScale.value = t.displacementScale,
                                e.displacementBias.value = t.displacementBias
                        )
                    }(e, r)
            ) : r.isMeshDistanceMaterial ? (
                t(e, r),
                    function (e, t) {
                        t.displacementMap &&
                        (
                            e.displacementMap.value = t.displacementMap,
                                e.displacementScale.value = t.displacementScale,
                                e.displacementBias.value = t.displacementBias
                        );
                        e.referencePosition.value.copy(t.referencePosition),
                            e.nearDistance.value = t.nearDistance,
                            e.farDistance.value = t.farDistance
                    }(e, r)
            ) : r.isMeshNormalMaterial ? (
                t(e, r),
                    function (e, t) {
                        t.bumpMap &&
                        (
                            e.bumpMap.value = t.bumpMap,
                                e.bumpScale.value = t.bumpScale,
                            1 === t.side &&
                            (e.bumpScale.value *= - 1)
                        );
                        t.normalMap &&
                        (
                            e.normalMap.value = t.normalMap,
                                e.normalScale.value.copy(t.normalScale),
                            1 === t.side &&
                            e.normalScale.value.negate()
                        );
                        t.displacementMap &&
                        (
                            e.displacementMap.value = t.displacementMap,
                                e.displacementScale.value = t.displacementScale,
                                e.displacementBias.value = t.displacementBias
                        )
                    }(e, r)
            ) : r.isLineBasicMaterial ? (
                function (e, t) {
                    e.diffuse.value.copy(t.color),
                        e.opacity.value = t.opacity
                }(e, r),
                r.isLineDashedMaterial &&
                function (e, t) {
                    e.dashSize.value = t.dashSize,
                        e.totalSize.value = t.dashSize + t.gapSize,
                        e.scale.value = t.scale
                }(e, r)
            ) : r.isPointsMaterial ? function (e, t, n, r) {
                e.diffuse.value.copy(t.color),
                    e.opacity.value = t.opacity,
                    e.size.value = t.size * n,
                    e.scale.value = 0.5 * r,
                t.map &&
                (e.map.value = t.map);
                t.alphaMap &&
                (e.alphaMap.value = t.alphaMap);
                let i;
                t.map ? i = t.map : t.alphaMap &&
                    (i = t.alphaMap);
                void 0 !== i &&
                (
                    !0 === i.matrixAutoUpdate &&
                    i.updateMatrix(),
                        e.uvTransform.value.copy(i.matrix)
                )
            }(e, r, i, a) : r.isSpriteMaterial ? function (e, t) {
                e.diffuse.value.copy(t.color),
                    e.opacity.value = t.opacity,
                    e.rotation.value = t.rotation,
                t.map &&
                (e.map.value = t.map);
                t.alphaMap &&
                (e.alphaMap.value = t.alphaMap);
                let n;
                t.map ? n = t.map : t.alphaMap &&
                    (n = t.alphaMap);
                void 0 !== n &&
                (
                    !0 === n.matrixAutoUpdate &&
                    n.updateMatrix(),
                        e.uvTransform.value.copy(n.matrix)
                )
            }(e, r) : r.isShadowMaterial ? (e.color.value.copy(r.color), e.opacity.value = r.opacity) : r.isShaderMaterial &&
                (r.uniformsNeedUpdate = !1)
        }
    }
}
function createCanvasElement() {
    const e = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
    return e.style.display = 'block',
        e
}
function WebGLRenderer(e) {
    const t = void 0 !== (e = e || {
        }).canvas ? e.canvas : createCanvasElement(),
        n = void 0 !== e.context ? e.context : null,
        r = void 0 !== e.alpha &&
            e.alpha,
        i = void 0 === e.depth ||
            e.depth,
        a = void 0 === e.stencil ||
            e.stencil,
        s = void 0 !== e.antialias &&
            e.antialias,
        o = void 0 === e.premultipliedAlpha ||
            e.premultipliedAlpha,
        l = void 0 !== e.preserveDrawingBuffer &&
            e.preserveDrawingBuffer,
        c = void 0 !== e.powerPreference ? e.powerPreference : 'default',
        h = void 0 !== e.failIfMajorPerformanceCaveat &&
            e.failIfMajorPerformanceCaveat;
    let u = null,
        d = null;
    const p = [],
        m = [];
    this.domElement = t,
        this.debug = {
            checkShaderErrors: !0
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.outputEncoding = 3000,
        this.physicallyCorrectLights = !1,
        this.toneMapping = 0,
        this.toneMappingExposure = 1;
    const f = this;
    let g = !1,
        v = 0,
        _ = 0,
        x = null,
        y = - 1,
        b = null;
    const M = new Vector4,
        w = new Vector4;
    let S = null,
        T = t.width,
        E = t.height,
        L = 1,
        A = null,
        R = null;
    const C = new Vector4(0, 0, T, E),
        P = new Vector4(0, 0, T, E);
    let I = !1;
    const N = new Frustum;
    let D = !1,
        B = !1;
    const V = new Matrix4,
        U = new Vector3,
        O = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
    function F() {
        return null === x ? L : 1
    }
    let G,
        z,
        H,
        k,
        W,
        j,
        q,
        $,
        X,
        Y,
        Z,
        J,
        K,
        Q,
        ee,
        te,
        ne,
        re,
        ie,
        ae,
        se,
        oe,
        le = n;
    function ce(e, n) {
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = t.getContext(i, n);
            if (null !== a) return a
        }
        return null
    }
    try {
        const e = {
            alpha: r,
            depth: i,
            stencil: a,
            antialias: s,
            premultipliedAlpha: o,
            preserveDrawingBuffer: l,
            powerPreference: c,
            failIfMajorPerformanceCaveat: h
        };
        if (
            t.addEventListener('webglcontextlost', de, !1),
                t.addEventListener('webglcontextrestored', pe, !1),
            null === le
        ) {
            const t = [
                'webgl2',
                'webgl',
                'experimental-webgl'
            ];
            if (!0 === f.isWebGL1Renderer && t.shift(), le = ce(t, e), null === le) throw ce(t) ? new Error(
                'Error creating WebGL context with your selected attributes.'
            ) : new Error('Error creating WebGL context.')
        }
        void 0 === le.getShaderPrecisionFormat &&
        (
            le.getShaderPrecisionFormat = function () {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
        )
    } catch (e) {
        throw console.error('THREE.WebGLRenderer: ' + e.message),
            e
    }
    function he() {
        G = new WebGLExtensions(le),
            z = new WebGLCapabilities(le, G, e),
            G.init(z),
            se = new WebGLUtils(le, G, z),
            H = new WebGLState(le, G, z),
            k = new WebGLInfo,
            W = new WebGLProperties,
            j = new WebGLTextures(le, G, H, W, z, se, k),
            q = new WebGLCubeMaps(f),
            $ = new WebGLAttributes(le, z),
            oe = new WebGLBindingStates(le, G, $, z),
            X = new WebGLGeometries(le, $, k, oe),
            Y = new WebGLObjects(le, X, $, k),
            re = new WebGLMorphtargets(le),
            ee = new WebGLClipping(W),
            Z = new WebGLPrograms(f, q, G, z, oe, ee),
            J = new WebGLMaterials(W),
            K = new WebGLRenderLists(W),
            Q = new WebGLRenderStates(G, z),
            ne = new WebGLBackground(f, q, H, Y, o),
            te = new WebGLShadowMap(f, Y, z),
            ie = new WebGLBufferRenderer(le, G, k, z),
            ae = new WebGLIndexedBufferRenderer(le, G, k, z),
            k.programs = Z.programs,
            f.capabilities = z,
            f.extensions = G,
            f.properties = W,
            f.renderLists = K,
            f.shadowMap = te,
            f.state = H,
            f.info = k
    }
    he();
    const ue = new WebXRManager(f, le);
    function de(e) {
        e.preventDefault(),
            console.log('THREE.WebGLRenderer: Context Lost.'),
            g = !0
    }
    function pe() {
        console.log('THREE.WebGLRenderer: Context Restored.'),
            g = !1;
        const e = k.autoReset,
            t = te.enabled,
            n = te.autoUpdate,
            r = te.needsUpdate,
            i = te.type;
        he(),
            k.autoReset = e,
            te.enabled = t,
            te.autoUpdate = n,
            te.needsUpdate = r,
            te.type = i
    }
    function me(e) {
        const t = e.target;
        t.removeEventListener('dispose', me),
            function (e) {
                (
                    function (e) {
                        const t = W.get(e).programs;
                        void 0 !== t &&
                        t.forEach((function (e) {
                            Z.releaseProgram(e)
                        }))
                    }
                ) (e),
                    W.remove(e)
            }(t)
    }
    this.xr = ue,
        this.getContext = function () {
            return le
        },
        this.getContextAttributes = function () {
            return le.getContextAttributes()
        },
        this.forceContextLoss = function () {
            const e = G.get('WEBGL_lose_context');
            e &&
            e.loseContext()
        },
        this.forceContextRestore = function () {
            const e = G.get('WEBGL_lose_context');
            e &&
            e.restoreContext()
        },
        this.getPixelRatio = function () {
            return L
        },
        this.setPixelRatio = function (e) {
            void 0 !== e &&
            (L = e, this.setSize(T, E, !1))
        },
        this.getSize = function (e) {
            return void 0 === e &&
            (
                console.warn(
                    'WebGLRenderer: .getsize() now requires a Vector2 as an argument'
                ),
                    e = new Vector2
            ),
                e.set(T, E)
        },
        this.setSize = function (e, n, r) {
            ue.isPresenting ? console.warn(
                'THREE.WebGLRenderer: Can\'t change size while VR device is presenting.'
            ) : (
                T = e,
                    E = n,
                    t.width = Math.floor(e * L),
                    t.height = Math.floor(n * L),
                !1 !== r &&
                (t.style.width = e + 'px', t.style.height = n + 'px'),
                    this.setViewport(0, 0, e, n)
            )
        },
        this.getDrawingBufferSize = function (e) {
            return void 0 === e &&
            (
                console.warn(
                    'WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'
                ),
                    e = new Vector2
            ),
                e.set(T * L, E * L).floor()
        },
        this.setDrawingBufferSize = function (e, n, r) {
            T = e,
                E = n,
                L = r,
                t.width = Math.floor(e * r),
                t.height = Math.floor(n * r),
                this.setViewport(0, 0, e, n)
        },
        this.getCurrentViewport = function (e) {
            return void 0 === e &&
            (
                console.warn(
                    'WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'
                ),
                    e = new Vector4
            ),
                e.copy(M)
        },
        this.getViewport = function (e) {
            return e.copy(C)
        },
        this.setViewport = function (e, t, n, r) {
            e.isVector4 ? C.set(e.x, e.y, e.z, e.w) : C.set(e, t, n, r),
                H.viewport(M.copy(C).multiplyScalar(L).floor())
        },
        this.getScissor = function (e) {
            return e.copy(P)
        },
        this.setScissor = function (e, t, n, r) {
            e.isVector4 ? P.set(e.x, e.y, e.z, e.w) : P.set(e, t, n, r),
                H.scissor(w.copy(P).multiplyScalar(L).floor())
        },
        this.getScissorTest = function () {
            return I
        },
        this.setScissorTest = function (e) {
            H.setScissorTest(I = e)
        },
        this.setOpaqueSort = function (e) {
            A = e
        },
        this.setTransparentSort = function (e) {
            R = e
        },
        this.getClearColor = function (e) {
            return void 0 === e &&
            (
                console.warn(
                    'WebGLRenderer: .getClearColor() now requires a Color as an argument'
                ),
                    e = new Color
            ),
                e.copy(ne.getClearColor())
        },
        this.setClearColor = function () {
            ne.setClearColor.apply(ne, arguments)
        },
        this.getClearAlpha = function () {
            return ne.getClearAlpha()
        },
        this.setClearAlpha = function () {
            ne.setClearAlpha.apply(ne, arguments)
        },
        this.clear = function (e, t, n) {
            let r = 0;
            (void 0 === e || e) &&
            (r |= 16384),
            (void 0 === t || t) &&
            (r |= 256),
            (void 0 === n || n) &&
            (r |= 1024),
                le.clear(r)
        },
        this.clearColor = function () {
            this.clear(!0, !1, !1)
        },
        this.clearDepth = function () {
            this.clear(!1, !0, !1)
        },
        this.clearStencil = function () {
            this.clear(!1, !1, !0)
        },
        this.dispose = function () {
            t.removeEventListener('webglcontextlost', de, !1),
                t.removeEventListener('webglcontextrestored', pe, !1),
                K.dispose(),
                Q.dispose(),
                W.dispose(),
                q.dispose(),
                Y.dispose(),
                oe.dispose(),
                ue.dispose(),
                ue.removeEventListener('sessionstart', ge),
                ue.removeEventListener('sessionend', ve),
                _e.stop()
        },
        this.renderBufferImmediate = function (e, t) {
            oe.initAttributes();
            const n = W.get(e);
            e.hasPositions &&
            !n.position &&
            (n.position = le.createBuffer()),
            e.hasNormals &&
            !n.normal &&
            (n.normal = le.createBuffer()),
            e.hasUvs &&
            !n.uv &&
            (n.uv = le.createBuffer()),
            e.hasColors &&
            !n.color &&
            (n.color = le.createBuffer());
            const r = t.getAttributes();
            e.hasPositions &&
            (
                le.bindBuffer(34962, n.position),
                    le.bufferData(34962, e.positionArray, 35048),
                    oe.enableAttribute(r.position),
                    le.vertexAttribPointer(r.position, 3, 5126, !1, 0, 0)
            ),
            e.hasNormals &&
            (
                le.bindBuffer(34962, n.normal),
                    le.bufferData(34962, e.normalArray, 35048),
                    oe.enableAttribute(r.normal),
                    le.vertexAttribPointer(r.normal, 3, 5126, !1, 0, 0)
            ),
            e.hasUvs &&
            (
                le.bindBuffer(34962, n.uv),
                    le.bufferData(34962, e.uvArray, 35048),
                    oe.enableAttribute(r.uv),
                    le.vertexAttribPointer(r.uv, 2, 5126, !1, 0, 0)
            ),
            e.hasColors &&
            (
                le.bindBuffer(34962, n.color),
                    le.bufferData(34962, e.colorArray, 35048),
                    oe.enableAttribute(r.color),
                    le.vertexAttribPointer(r.color, 3, 5126, !1, 0, 0)
            ),
                oe.disableUnusedAttributes(),
                le.drawArrays(4, 0, e.count),
                e.count = 0
        },
        this.renderBufferDirect = function (e, t, n, r, i, a) {
            null === t &&
            (t = O);
            const s = i.isMesh &&
                    i.matrixWorld.determinant() < 0,
                o = Se(e, t, r, i);
            H.setMaterial(r, s);
            let l = n.index;
            const c = n.attributes.position;
            if (null === l) {
                if (void 0 === c || 0 === c.count) return
            } else if (0 === l.count) return;
            let h,
                u = 1;
            !0 === r.wireframe &&
            (l = X.getWireframeAttribute(n), u = 2),
            (r.morphTargets || r.morphNormals) &&
            re.update(i, n, r, o),
                oe.setup(i, r, o, n, l);
            let d = ie;
            null !== l &&
            (h = $.get(l), d = ae, d.setIndex(h));
            const p = null !== l ? l.count : c.count,
                m = n.drawRange.start * u,
                f = n.drawRange.count * u,
                g = null !== a ? a.start * u : 0,
                v = null !== a ? a.count * u : 1 / 0,
                _ = Math.max(m, g),
                x = Math.min(p, m + f, g + v) - 1,
                y = Math.max(0, x - _ + 1);
            if (0 !== y) {
                if (i.isMesh) !0 === r.wireframe ? (H.setLineWidth(r.wireframeLinewidth * F()), d.setMode(1)) : d.setMode(4);
                else if (i.isLine) {
                    let e = r.linewidth;
                    void 0 === e &&
                    (e = 1),
                        H.setLineWidth(e * F()),
                        i.isLineSegments ? d.setMode(1) : i.isLineLoop ? d.setMode(2) : d.setMode(3)
                } else i.isPoints ? d.setMode(0) : i.isSprite &&
                    d.setMode(4);
                if (i.isInstancedMesh) d.renderInstances(_, y, i.count);
                else if (n.isInstancedBufferGeometry) {
                    const e = Math.min(n.instanceCount, n._maxInstanceCount);
                    d.renderInstances(_, y, e)
                } else d.render(_, y)
            }
        },
        this.compile = function (e, t) {
            d = Q.get(e),
                d.init(),
                e.traverseVisible(
                    (
                        function (e) {
                            e.isLight &&
                            e.layers.test(t.layers) &&
                            (d.pushLight(e), e.castShadow && d.pushShadow(e))
                        }
                    )
                ),
                d.setupLights(),
                e.traverse(
                    (
                        function (t) {
                            const n = t.material;
                            if (n) if (Array.isArray(n)) for (let r = 0; r < n.length; r++) {
                                Me(n[r], e, t)
                            } else Me(n, e, t)
                        }
                    )
                )
        };
    let fe = null;
    function ge() {
        _e.stop()
    }
    function ve() {
        _e.start()
    }
    const _e = new WebGLAnimation;
    function xe(e, t, n, r) {
        if (!1 === e.visible) return;
        if (e.layers.test(t.layers)) if (e.isGroup) n = e.renderOrder;
        else if (e.isLOD) !0 === e.autoUpdate &&
        e.update(t);
        else if (e.isLight) d.pushLight(e),
        e.castShadow &&
        d.pushShadow(e);
        else if (e.isSprite) {
            if (!e.frustumCulled || N.intersectsSprite(e)) {
                r &&
                U.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);
                const t = Y.update(e),
                    i = e.material;
                i.visible &&
                u.push(e, t, i, n, U.z, null)
            }
        } else if (e.isImmediateRenderObject) r &&
        U.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V),
            u.push(e, null, e.material, n, U.z, null);
        else if (
            (e.isMesh || e.isLine || e.isPoints) &&
            (
                e.isSkinnedMesh &&
                e.skeleton.frame !== k.render.frame &&
                (e.skeleton.update(), e.skeleton.frame = k.render.frame),
                !e.frustumCulled ||
                N.intersectsObject(e)
            )
        ) {
            r &&
            U.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);
            const t = Y.update(e),
                i = e.material;
            if (Array.isArray(i)) {
                const r = t.groups;
                for (let a = 0, s = r.length; a < s; a++) {
                    const s = r[a],
                        o = i[s.materialIndex];
                    o &&
                    o.visible &&
                    u.push(e, t, o, n, U.z, s)
                }
            } else i.visible &&
            u.push(e, t, i, n, U.z, null)
        }
        const i = e.children;
        for (let e = 0, a = i.length; e < a; e++) xe(i[e], t, n, r)
    }
    function ye(e, t, n) {
        const r = !0 === t.isScene ? t.overrideMaterial : null;
        for (let i = 0, a = e.length; i < a; i++) {
            const a = e[i],
                s = a.object,
                o = a.geometry,
                l = null === r ? a.material : r,
                c = a.group;
            if (n.isArrayCamera) {
                const e = n.cameras;
                for (let n = 0, r = e.length; n < r; n++) {
                    const r = e[n];
                    s.layers.test(r.layers) &&
                    (
                        H.viewport(M.copy(r.viewport)),
                            d.setupLightsView(r),
                            be(s, t, r, o, l, c)
                    )
                }
            } else be(s, t, n, o, l, c)
        }
    }
    function be(e, t, n, r, i, a) {
        if (
            e.onBeforeRender(f, t, n, r, i, a),
                e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
                e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
                e.isImmediateRenderObject
        ) {
            const r = Se(n, t, i, e);
            H.setMaterial(i),
                oe.reset(),
                function (e, t) {
                    e.render((function (e) {
                        f.renderBufferImmediate(e, t)
                    }))
                }(e, r)
        } else f.renderBufferDirect(n, t, r, i, e, a);
        e.onAfterRender(f, t, n, r, i, a)
    }
    function Me(e, t, n) {
        !0 !== t.isScene &&
        (t = O);
        const r = W.get(e),
            i = d.state.lights,
            a = d.state.shadowsArray,
            s = i.state.version,
            o = Z.getParameters(e, i.state, a, t, n),
            l = Z.getProgramCacheKey(o);
        let c = r.programs;
        r.environment = e.isMeshStandardMaterial ? t.environment : null,
            r.fog = t.fog,
            r.envMap = q.get(e.envMap || r.environment),
        void 0 === c &&
        (e.addEventListener('dispose', me), c = new Map, r.programs = c);
        let h = c.get(l);
        if (void 0 !== h) {
            if (r.currentProgram === h && r.lightsStateVersion === s) return we(e, o),
                h
        } else o.uniforms = Z.getUniforms(e),
            e.onBuild(o, f),
            e.onBeforeCompile(o, f),
            h = Z.acquireProgram(o, l),
            c.set(l, h),
            r.uniforms = o.uniforms;
        const u = r.uniforms;
        (e.isShaderMaterial || e.isRawShaderMaterial) &&
        !0 !== e.clipping ||
        (u.clippingPlanes = ee.uniform),
            we(e, o),
            r.needsLights = function (e) {
                return e.isMeshLambertMaterial ||
                    e.isMeshToonMaterial ||
                    e.isMeshPhongMaterial ||
                    e.isMeshStandardMaterial ||
                    e.isShadowMaterial ||
                    e.isShaderMaterial &&
                    !0 === e.lights
            }(e),
            r.lightsStateVersion = s,
        r.needsLights &&
        (
            u.ambientLightColor.value = i.state.ambient,
                u.lightProbe.value = i.state.probe,
                u.directionalLights.value = i.state.directional,
                u.directionalLightShadows.value = i.state.directionalShadow,
                u.spotLights.value = i.state.spot,
                u.spotLightShadows.value = i.state.spotShadow,
                u.rectAreaLights.value = i.state.rectArea,
                u.ltc_1.value = i.state.rectAreaLTC1,
                u.ltc_2.value = i.state.rectAreaLTC2,
                u.pointLights.value = i.state.point,
                u.pointLightShadows.value = i.state.pointShadow,
                u.hemisphereLights.value = i.state.hemi,
                u.directionalShadowMap.value = i.state.directionalShadowMap,
                u.directionalShadowMatrix.value = i.state.directionalShadowMatrix,
                u.spotShadowMap.value = i.state.spotShadowMap,
                u.spotShadowMatrix.value = i.state.spotShadowMatrix,
                u.pointShadowMap.value = i.state.pointShadowMap,
                u.pointShadowMatrix.value = i.state.pointShadowMatrix
        );
        const p = h.getUniforms(),
            m = WebGLUniforms.seqWithValue(p.seq, u);
        return r.currentProgram = h,
            r.uniformsList = m,
            h
    }
    function we(e, t) {
        const n = W.get(e);
        n.outputEncoding = t.outputEncoding,
            n.instancing = t.instancing,
            n.numClippingPlanes = t.numClippingPlanes,
            n.numIntersection = t.numClipIntersection,
            n.vertexAlphas = t.vertexAlphas
    }
    function Se(e, t, n, r) {
        !0 !== t.isScene &&
        (t = O),
            j.resetTextureUnits();
        const i = t.fog,
            a = n.isMeshStandardMaterial ? t.environment : null,
            s = null === x ? f.outputEncoding : x.texture.encoding,
            o = q.get(n.envMap || a),
            l = !0 === n.vertexColors &&
                r.geometry &&
                r.geometry.attributes.color &&
                4 === r.geometry.attributes.color.itemSize,
            c = W.get(n),
            h = d.state.lights;
        if (!0 === D && (!0 === B || e !== b)) {
            const t = e === b &&
                n.id === y;
            ee.setState(n, e, t)
        }
        let u = !1;
        n.version === c.__version ? c.needsLights &&
        c.lightsStateVersion !== h.state.version ||
        c.outputEncoding !== s ||
        r.isInstancedMesh &&
        !1 === c.instancing ? u = !0 : r.isInstancedMesh ||
        !0 !== c.instancing ? c.envMap !== o ||
        n.fog &&
        c.fog !== i ? u = !0 : void 0 === c.numClippingPlanes ||
        c.numClippingPlanes === ee.numPlanes &&
        c.numIntersection === ee.numIntersection ? c.vertexAlphas !== l &&
            (u = !0) : u = !0 : u = !0 : (u = !0, c.__version = n.version);
        let p = c.currentProgram;
        !0 === u &&
        (p = Me(n, t, r));
        let m = !1,
            g = !1,
            v = !1;
        const _ = p.getUniforms(),
            M = c.uniforms;
        if (
            H.useProgram(p.program) &&
            (m = !0, g = !0, v = !0),
            n.id !== y &&
            (y = n.id, g = !0),
            m ||
            b !== e
        ) {
            if (
                _.setValue(le, 'projectionMatrix', e.projectionMatrix),
                z.logarithmicDepthBuffer &&
                _.setValue(le, 'logDepthBufFC', 2 / (Math.log(e.far + 1) / Math.LN2)),
                b !== e &&
                (b = e, g = !0, v = !0),
                n.isShaderMaterial ||
                n.isMeshPhongMaterial ||
                n.isMeshToonMaterial ||
                n.isMeshStandardMaterial ||
                n.envMap
            ) {
                const t = _.map.cameraPosition;
                void 0 !== t &&
                t.setValue(le, U.setFromMatrixPosition(e.matrixWorld))
            }(
                n.isMeshPhongMaterial ||
                n.isMeshToonMaterial ||
                n.isMeshLambertMaterial ||
                n.isMeshBasicMaterial ||
                n.isMeshStandardMaterial ||
                n.isShaderMaterial
            ) &&
            _.setValue(le, 'isOrthographic', !0 === e.isOrthographicCamera),
            (
                n.isMeshPhongMaterial ||
                n.isMeshToonMaterial ||
                n.isMeshLambertMaterial ||
                n.isMeshBasicMaterial ||
                n.isMeshStandardMaterial ||
                n.isShaderMaterial ||
                n.isShadowMaterial ||
                n.skinning
            ) &&
            _.setValue(le, 'viewMatrix', e.matrixWorldInverse)
        }
        if (n.skinning) {
            _.setOptional(le, r, 'bindMatrix'),
                _.setOptional(le, r, 'bindMatrixInverse');
            const e = r.skeleton;
            if (e) {
                const t = e.bones;
                if (z.floatVertexTextures) {
                    if (null === e.boneTexture) {
                        let n = Math.sqrt(4 * t.length);
                        n = ceilPowerOfTwo(n),
                            n = Math.max(n, 4);
                        const r = new Float32Array(n * n * 4);
                        r.set(e.boneMatrices);
                        const i = new DataTexture(r, n, n, 1023, 1015);
                        e.boneMatrices = r,
                            e.boneTexture = i,
                            e.boneTextureSize = n
                    }
                    _.setValue(le, 'boneTexture', e.boneTexture, j),
                        _.setValue(le, 'boneTextureSize', e.boneTextureSize)
                } else _.setOptional(le, e, 'boneMatrices')
            }
        }
        var w,
            S;
        return (g || c.receiveShadow !== r.receiveShadow) &&
        (
            c.receiveShadow = r.receiveShadow,
                _.setValue(le, 'receiveShadow', r.receiveShadow)
        ),
        g &&
        (
            _.setValue(le, 'toneMappingExposure', f.toneMappingExposure),
            c.needsLights &&
            (
                S = v,
                    (w = M).ambientLightColor.needsUpdate = S,
                    w.lightProbe.needsUpdate = S,
                    w.directionalLights.needsUpdate = S,
                    w.directionalLightShadows.needsUpdate = S,
                    w.pointLights.needsUpdate = S,
                    w.pointLightShadows.needsUpdate = S,
                    w.spotLights.needsUpdate = S,
                    w.spotLightShadows.needsUpdate = S,
                    w.rectAreaLights.needsUpdate = S,
                    w.hemisphereLights.needsUpdate = S
            ),
            i &&
            n.fog &&
            J.refreshFogUniforms(M, i),
                J.refreshMaterialUniforms(M, n, L, E),
                WebGLUniforms.upload(le, c.uniformsList, M, j)
        ),
        n.isShaderMaterial &&
        !0 === n.uniformsNeedUpdate &&
        (
            WebGLUniforms.upload(le, c.uniformsList, M, j),
                n.uniformsNeedUpdate = !1
        ),
        n.isSpriteMaterial &&
        _.setValue(le, 'center', r.center),
            _.setValue(le, 'modelViewMatrix', r.modelViewMatrix),
            _.setValue(le, 'normalMatrix', r.normalMatrix),
            _.setValue(le, 'modelMatrix', r.matrixWorld),
            p
    }
    _e.setAnimationLoop((function (e) {
        fe &&
        fe(e)
    })),
    'undefined' != typeof window &&
    _e.setContext(window),
        this.setAnimationLoop = function (e) {
            fe = e,
                ue.setAnimationLoop(e),
                null === e ? _e.stop() : _e.start()
        },
        ue.addEventListener('sessionstart', ge),
        ue.addEventListener('sessionend', ve),
        this.render = function (e, t) {
            let n,
                r;
            if (
                void 0 !== arguments[2] &&
                (
                    console.warn(
                        'THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.'
                    ),
                        n = arguments[2]
                ),
                void 0 !== arguments[3] &&
                (
                    console.warn(
                        'THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.'
                    ),
                        r = arguments[3]
                ),
                void 0 !== t &&
                !0 !== t.isCamera
            ) return void console.error(
                'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
            );
            if (!0 === g) return;
            !0 === e.autoUpdate &&
            e.updateMatrixWorld(),
            null === t.parent &&
            t.updateMatrixWorld(),
            !0 === ue.enabled &&
            !0 === ue.isPresenting &&
            (t = ue.getCamera(t)),
            !0 === e.isScene &&
            e.onBeforeRender(f, e, t, n || x),
                d = Q.get(e, m.length),
                d.init(),
                m.push(d),
                V.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
                N.setFromProjectionMatrix(V),
                B = this.localClippingEnabled,
                D = ee.init(this.clippingPlanes, B, t),
                u = K.get(e, p.length),
                u.init(),
                p.push(u),
                xe(e, t, 0, f.sortObjects),
                u.finish(),
            !0 === f.sortObjects &&
            u.sort(A, R),
            !0 === D &&
            ee.beginShadows();
            const i = d.state.shadowsArray;
            te.render(i, e, t),
                d.setupLights(),
                d.setupLightsView(t),
            !0 === D &&
            ee.endShadows(),
            !0 === this.info.autoReset &&
            this.info.reset(),
            void 0 !== n &&
            this.setRenderTarget(n),
                ne.render(u, e, t, r);
            const a = u.opaque,
                s = u.transparent;
            a.length > 0 &&
            ye(a, e, t),
            s.length > 0 &&
            ye(s, e, t),
            null !== x &&
            (
                j.updateRenderTargetMipmap(x),
                    j.updateMultisampleRenderTarget(x)
            ),
            !0 === e.isScene &&
            e.onAfterRender(f, e, t),
                H.buffers.depth.setTest(!0),
                H.buffers.depth.setMask(!0),
                H.buffers.color.setMask(!0),
                H.setPolygonOffset(!1),
                oe.resetDefaultState(),
                y = - 1,
                b = null,
                m.pop(),
                d = m.length > 0 ? m[m.length - 1] : null,
                p.pop(),
                u = p.length > 0 ? p[p.length - 1] : null
        },
        this.getActiveCubeFace = function () {
            return v
        },
        this.getActiveMipmapLevel = function () {
            return _
        },
        this.getRenderTarget = function () {
            return x
        },
        this.setRenderTarget = function (e, t = 0, n = 0) {
            x = e,
                v = t,
                _ = n,
            e &&
            void 0 === W.get(e).__webglFramebuffer &&
            j.setupRenderTarget(e);
            let r = null,
                i = !1,
                a = !1;
            if (e) {
                const n = e.texture;
                (n.isDataTexture3D || n.isDataTexture2DArray) &&
                (a = !0);
                const s = W.get(e).__webglFramebuffer;
                e.isWebGLCubeRenderTarget ? (r = s[t], i = !0) : r = e.isWebGLMultisampleRenderTarget ? W.get(e).__webglMultisampledFramebuffer : s,
                    M.copy(e.viewport),
                    w.copy(e.scissor),
                    S = e.scissorTest
            } else M.copy(C).multiplyScalar(L).floor(),
                w.copy(P).multiplyScalar(L).floor(),
                S = I;
            if (
                H.bindFramebuffer(36160, r),
                    H.viewport(M),
                    H.scissor(w),
                    H.setScissorTest(S),
                    i
            ) {
                const r = W.get(e.texture);
                le.framebufferTexture2D(36160, 36064, 34069 + t, r.__webglTexture, n)
            } else if (a) {
                const r = W.get(e.texture),
                    i = t ||
                        0;
                le.framebufferTextureLayer(36160, 36064, r.__webglTexture, n || 0, i)
            }
        },
        this.readRenderTargetPixels = function (e, t, n, r, i, a, s) {
            if (!e || !e.isWebGLRenderTarget) return void console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
            );
            let o = W.get(e).__webglFramebuffer;
            if (e.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o) {
                H.bindFramebuffer(36160, o);
                try {
                    const s = e.texture,
                        o = s.format,
                        l = s.type;
                    if (1023 !== o && se.convert(o) !== le.getParameter(35739)) return void console.error(
                        'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
                    );
                    const c = 1016 === l &&
                        (
                            G.has('EXT_color_buffer_half_float') ||
                            z.isWebGL2 &&
                            G.has('EXT_color_buffer_float')
                        );
                    if (
                        !(
                            1009 === l ||
                            se.convert(l) === le.getParameter(35738) ||
                            1015 === l &&
                            (
                                z.isWebGL2 ||
                                G.has('OES_texture_float') ||
                                G.has('WEBGL_color_buffer_float')
                            ) ||
                            c
                        )
                    ) return void console.error(
                        'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
                    );
                    36053 === le.checkFramebufferStatus(36160) ? t >= 0 &&
                        t <= e.width - r &&
                        n >= 0 &&
                        n <= e.height - i &&
                        le.readPixels(t, n, r, i, se.convert(o), se.convert(l), a) : console.error(
                        'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.'
                    )
                } finally {
                    const e = null !== x ? W.get(x).__webglFramebuffer : null;
                    H.bindFramebuffer(36160, e)
                }
            }
        },
        this.copyFramebufferToTexture = function (e, t, n = 0) {
            const r = Math.pow(2, - n),
                i = Math.floor(t.image.width * r),
                a = Math.floor(t.image.height * r),
                s = se.convert(t.format);
            j.setTexture2D(t, 0),
                le.copyTexImage2D(3553, n, s, e.x, e.y, i, a, 0),
                H.unbindTexture()
        },
        this.copyTextureToTexture = function (e, t, n, r = 0) {
            const i = t.image.width,
                a = t.image.height,
                s = se.convert(n.format),
                o = se.convert(n.type);
            j.setTexture2D(n, 0),
                le.pixelStorei(37440, n.flipY),
                le.pixelStorei(37441, n.premultiplyAlpha),
                le.pixelStorei(3317, n.unpackAlignment),
                t.isDataTexture ? le.texSubImage2D(3553, r, e.x, e.y, i, a, s, o, t.image.data) : t.isCompressedTexture ? le.compressedTexSubImage2D(
                    3553,
                    r,
                    e.x,
                    e.y,
                    t.mipmaps[0].width,
                    t.mipmaps[0].height,
                    s,
                    t.mipmaps[0].data
                ) : le.texSubImage2D(3553, r, e.x, e.y, s, o, t.image),
            0 === r &&
            n.generateMipmaps &&
            le.generateMipmap(3553),
                H.unbindTexture()
        },
        this.copyTextureToTexture3D = function (e, t, n, r, i = 0) {
            if (f.isWebGL1Renderer) return void console.warn(
                'THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.'
            );
            const {
                    width: a,
                    height: s,
                    data: o
                }
                    = n.image,
                l = se.convert(r.format),
                c = se.convert(r.type);
            let h;
            if (r.isDataTexture3D) j.setTexture3D(r, 0),
                h = 32879;
            else {
                if (!r.isDataTexture2DArray) return void console.warn(
                    'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.'
                );
                j.setTexture2DArray(r, 0),
                    h = 35866
            }
            le.pixelStorei(37440, r.flipY),
                le.pixelStorei(37441, r.premultiplyAlpha),
                le.pixelStorei(3317, r.unpackAlignment);
            const u = le.getParameter(3314),
                d = le.getParameter(32878),
                p = le.getParameter(3316),
                m = le.getParameter(3315),
                g = le.getParameter(32877);
            le.pixelStorei(3314, a),
                le.pixelStorei(32878, s),
                le.pixelStorei(3316, e.min.x),
                le.pixelStorei(3315, e.min.y),
                le.pixelStorei(32877, e.min.z),
                le.texSubImage3D(
                    h,
                    i,
                    t.x,
                    t.y,
                    t.z,
                    e.max.x - e.min.x + 1,
                    e.max.y - e.min.y + 1,
                    e.max.z - e.min.z + 1,
                    l,
                    c,
                    o
                ),
                le.pixelStorei(3314, u),
                le.pixelStorei(32878, d),
                le.pixelStorei(3316, p),
                le.pixelStorei(3315, m),
                le.pixelStorei(32877, g),
            0 === i &&
            r.generateMipmaps &&
            le.generateMipmap(h),
                H.unbindTexture()
        },
        this.initTexture = function (e) {
            j.setTexture2D(e, 0),
                H.unbindTexture()
        },
        this.resetState = function () {
            v = 0,
                _ = 0,
                x = null,
                H.reset(),
                oe.reset()
        },
    'undefined' != typeof __THREE_DEVTOOLS__ &&
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {
        detail: this
    }))
}
class WebGL1Renderer extends WebGLRenderer {
}
WebGL1Renderer.prototype.isWebGL1Renderer = !0;
class Scene extends Object3D {
    constructor() {
        super (),
            this.type = 'Scene',
            this.background = null,
            this.environment = null,
            this.fog = null,
            this.overrideMaterial = null,
            this.autoUpdate = !0,
        'undefined' != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', {
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        null !== e.background &&
        (this.background = e.background.clone()),
        null !== e.environment &&
        (this.environment = e.environment.clone()),
        null !== e.fog &&
        (this.fog = e.fog.clone()),
        null !== e.overrideMaterial &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
            this.autoUpdate = e.autoUpdate,
            this.matrixAutoUpdate = e.matrixAutoUpdate,
            this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return null !== this.background &&
        (t.object.background = this.background.toJSON(e)),
        null !== this.environment &&
        (t.object.environment = this.environment.toJSON(e)),
        null !== this.fog &&
        (t.object.fog = this.fog.toJSON()),
            t
    }
}
Scene.prototype.isScene = !0;
class InterleavedBuffer {
    constructor(e, t) {
        this.array = e,
            this.stride = t,
            this.count = void 0 !== e ? e.length / t : 0,
            this.usage = 35044,
            this.updateRange = {
                offset: 0,
                count: - 1
            },
            this.version = 0,
            this.uuid = generateUUID(),
            this.onUploadCallback = function () {
            }
    }
    set needsUpdate(e) {
        !0 === e &&
        this.version++
    }
    setUsage(e) {
        return this.usage = e,
            this
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array),
            this.count = e.count,
            this.stride = e.stride,
            this.usage = e.usage,
            this
    }
    copyAt(e, t, n) {
        e *= this.stride,
            n *= t.stride;
        for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
        return this
    }
    set(e, t = 0) {
        return this.array.set(e, t),
            this
    }
    clone(e) {
        void 0 === e.arrayBuffers &&
        (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = generateUUID()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (
            e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer
        );
        const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
            n = new InterleavedBuffer(t, this.stride);
        return n.setUsage(this.usage),
            n
    }
    onUpload(e) {
        return this.onUploadCallback = e,
            this
    }
    toJSON(e) {
        return void 0 === e.arrayBuffers &&
        (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = generateUUID()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (
            e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))
        ),
            {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            }
    }
}
InterleavedBuffer.prototype.isInterleavedBuffer = !0;
const _vector$6 = new Vector3;
class InterleavedBufferAttribute {
    constructor(e, t, n, r) {
        this.name = '',
            this.data = e,
            this.itemSize = t,
            this.offset = n,
            this.normalized = !0 === r
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++) _vector$6.x = this.getX(t),
            _vector$6.y = this.getY(t),
            _vector$6.z = this.getZ(t),
            _vector$6.applyMatrix4(e),
            this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++) _vector$6.x = this.getX(t),
            _vector$6.y = this.getY(t),
            _vector$6.z = this.getZ(t),
            _vector$6.applyNormalMatrix(e),
            this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++) _vector$6.x = this.getX(t),
            _vector$6.y = this.getY(t),
            _vector$6.z = this.getZ(t),
            _vector$6.transformDirection(e),
            this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
        return this
    }
    setX(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t,
            this
    }
    setY(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t,
            this
    }
    setZ(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t,
            this
    }
    setW(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t,
            this
    }
    getX(e) {
        return this.data.array[e * this.data.stride + this.offset]
    }
    getY(e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    }
    getZ(e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    }
    getW(e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset,
            this.data.array[e + 0] = t,
            this.data.array[e + 1] = n,
            this
    }
    setXYZ(e, t, n, r) {
        return e = e * this.data.stride + this.offset,
            this.data.array[e + 0] = t,
            this.data.array[e + 1] = n,
            this.data.array[e + 2] = r,
            this
    }
    setXYZW(e, t, n, r, i) {
        return e = e * this.data.stride + this.offset,
            this.data.array[e + 0] = t,
            this.data.array[e + 1] = n,
            this.data.array[e + 2] = r,
            this.data.array[e + 3] = i,
            this
    }
    clone(e) {
        if (void 0 === e) {
            console.log(
                'THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.'
            );
            const e = [];
            for (let t = 0; t < this.count; t++) {
                const n = t * this.data.stride + this.offset;
                for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t])
            }
            return new BufferAttribute(new this.array.constructor(e), this.itemSize, this.normalized)
        }
        return void 0 === e.interleavedBuffers &&
        (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
        (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
            new InterleavedBufferAttribute(
                e.interleavedBuffers[this.data.uuid],
                this.itemSize,
                this.offset,
                this.normalized
            )
    }
    toJSON(e) {
        if (void 0 === e) {
            console.log(
                'THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.'
            );
            const e = [];
            for (let t = 0; t < this.count; t++) {
                const n = t * this.data.stride + this.offset;
                for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: e,
                normalized: this.normalized
            }
        }
        return void 0 === e.interleavedBuffers &&
        (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
        (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
    }
}
InterleavedBufferAttribute.prototype.isInterleavedBufferAttribute = !0;
class SpriteMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'SpriteMaterial',
            this.color = new Color(16777215),
            this.map = null,
            this.alphaMap = null,
            this.rotation = 0,
            this.sizeAttenuation = !0,
            this.transparent = !0,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.alphaMap = e.alphaMap,
            this.rotation = e.rotation,
            this.sizeAttenuation = e.sizeAttenuation,
            this
    }
}
let _geometry;
SpriteMaterial.prototype.isSpriteMaterial = !0;
const _intersectPoint = new Vector3,
    _worldScale = new Vector3,
    _mvPosition = new Vector3,
    _alignedPosition = new Vector2,
    _rotatedPosition = new Vector2,
    _viewWorldMatrix = new Matrix4,
    _vA = new Vector3,
    _vB = new Vector3,
    _vC = new Vector3,
    _uvA = new Vector2,
    _uvB = new Vector2,
    _uvC = new Vector2;
class Sprite extends Object3D {
    constructor(e) {
        if (super (), this.type = 'Sprite', void 0 === _geometry) {
            _geometry = new BufferGeometry;
            const e = new Float32Array([ - 0.5,
                    - 0.5,
                    0,
                    0,
                    0,
                    0.5,
                    - 0.5,
                    0,
                    1,
                    0,
                    0.5,
                    0.5,
                    0,
                    1,
                    1,
                    - 0.5,
                    0.5,
                    0,
                    0,
                    1]),
                t = new InterleavedBuffer(e, 5);
            _geometry.setIndex([0,
                1,
                2,
                0,
                2,
                3]),
                _geometry.setAttribute('position', new InterleavedBufferAttribute(t, 3, 0, !1)),
                _geometry.setAttribute('uv', new InterleavedBufferAttribute(t, 2, 3, !1))
        }
        this.geometry = _geometry,
            this.material = void 0 !== e ? e : new SpriteMaterial,
            this.center = new Vector2(0.5, 0.5)
    }
    raycast(e, t) {
        null === e.camera &&
        console.error(
            'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
        ),
            _worldScale.setFromMatrixScale(this.matrixWorld),
            _viewWorldMatrix.copy(e.camera.matrixWorld),
            this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld),
            _mvPosition.setFromMatrixPosition(this.modelViewMatrix),
        e.camera.isPerspectiveCamera &&
        !1 === this.material.sizeAttenuation &&
        _worldScale.multiplyScalar( - _mvPosition.z);
        const n = this.material.rotation;
        let r,
            i;
        0 !== n &&
        (i = Math.cos(n), r = Math.sin(n));
        const a = this.center;
        transformVertex(_vA.set( - 0.5, - 0.5, 0), _mvPosition, a, _worldScale, r, i),
            transformVertex(_vB.set(0.5, - 0.5, 0), _mvPosition, a, _worldScale, r, i),
            transformVertex(_vC.set(0.5, 0.5, 0), _mvPosition, a, _worldScale, r, i),
            _uvA.set(0, 0),
            _uvB.set(1, 0),
            _uvC.set(1, 1);
        let s = e.ray.intersectTriangle(_vA, _vB, _vC, !1, _intersectPoint);
        if (
            null === s &&
            (
                transformVertex(_vB.set( - 0.5, 0.5, 0), _mvPosition, a, _worldScale, r, i),
                    _uvB.set(0, 1),
                    s = e.ray.intersectTriangle(_vA, _vC, _vB, !1, _intersectPoint),
                null === s
            )
        ) return;
        const o = e.ray.origin.distanceTo(_intersectPoint);
        o < e.near ||
        o > e.far ||
        t.push({
            distance: o,
            point: _intersectPoint.clone(),
            uv: Triangle.getUV(_intersectPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2),
            face: null,
            object: this
        })
    }
    copy(e) {
        return super.copy(e),
        void 0 !== e.center &&
        this.center.copy(e.center),
            this.material = e.material,
            this
    }
}
function transformVertex(e, t, n, r, i, a) {
    _alignedPosition.subVectors(e, n).addScalar(0.5).multiply(r),
        void 0 !== i ? (
            _rotatedPosition.x = a * _alignedPosition.x - i * _alignedPosition.y,
                _rotatedPosition.y = i * _alignedPosition.x + a * _alignedPosition.y
        ) : _rotatedPosition.copy(_alignedPosition),
        e.copy(t),
        e.x += _rotatedPosition.x,
        e.y += _rotatedPosition.y,
        e.applyMatrix4(_viewWorldMatrix)
}
Sprite.prototype.isSprite = !0;
const _basePosition = new Vector3,
    _skinIndex = new Vector4,
    _skinWeight = new Vector4,
    _vector$5 = new Vector3,
    _matrix = new Matrix4;
class SkinnedMesh extends Mesh {
    constructor(e, t) {
        super (e, t),
            this.type = 'SkinnedMesh',
            this.bindMode = 'attached',
            this.bindMatrix = new Matrix4,
            this.bindMatrixInverse = new Matrix4
    }
    copy(e) {
        return super.copy(e),
            this.bindMode = e.bindMode,
            this.bindMatrix.copy(e.bindMatrix),
            this.bindMatrixInverse.copy(e.bindMatrixInverse),
            this.skeleton = e.skeleton,
            this
    }
    bind(e, t) {
        this.skeleton = e,
        void 0 === t &&
        (
            this.updateMatrixWorld(!0),
                this.skeleton.calculateInverses(),
                t = this.matrixWorld
        ),
            this.bindMatrix.copy(t),
            this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const e = new Vector4,
            t = this.geometry.attributes.skinWeight;
        for (let n = 0, r = t.count; n < r; n++) {
            e.x = t.getX(n),
                e.y = t.getY(n),
                e.z = t.getZ(n),
                e.w = t.getW(n);
            const r = 1 / e.manhattanLength();
            r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
                t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
            'attached' === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : 'detached' === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn('THREE.SkinnedMesh: Unrecognized bindMode: ' + this.bindMode)
    }
    boneTransform(e, t) {
        const n = this.skeleton,
            r = this.geometry;
        _skinIndex.fromBufferAttribute(r.attributes.skinIndex, e),
            _skinWeight.fromBufferAttribute(r.attributes.skinWeight, e),
            _basePosition.fromBufferAttribute(r.attributes.position, e).applyMatrix4(this.bindMatrix),
            t.set(0, 0, 0);
        for (let e = 0; e < 4; e++) {
            const r = _skinWeight.getComponent(e);
            if (0 !== r) {
                const i = _skinIndex.getComponent(e);
                _matrix.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]),
                    t.addScaledVector(_vector$5.copy(_basePosition).applyMatrix4(_matrix), r)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
SkinnedMesh.prototype.isSkinnedMesh = !0;
class Bone extends Object3D {
    constructor() {
        super (),
            this.type = 'Bone'
    }
}
Bone.prototype.isBone = !0;
const _offsetMatrix = new Matrix4,
    _identityMatrix = new Matrix4;
class Skeleton {
    constructor(e = [], t = []) {
        this.uuid = generateUUID(),
            this.bones = e.slice(0),
            this.boneInverses = t,
            this.boneMatrices = null,
            this.boneTexture = null,
            this.boneTextureSize = 0,
            this.frame = - 1,
            this.init()
    }
    init() {
        const e = this.bones,
            t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * e.length), 0 === t.length) this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn(
                'THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.'
            ),
                this.boneInverses = [];
            for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new Matrix4)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const t = new Matrix4;
            this.bones[e] &&
            t.copy(this.bones[e].matrixWorld).invert(),
                this.boneInverses.push(t)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const t = this.bones[e];
            t &&
            t.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const t = this.bones[e];
            t &&
            (
                t.parent &&
                t.parent.isBone ? (
                    t.matrix.copy(t.parent.matrixWorld).invert(),
                        t.matrix.multiply(t.matrixWorld)
                ) : t.matrix.copy(t.matrixWorld),
                    t.matrix.decompose(t.position, t.quaternion, t.scale)
            )
        }
    }
    update() {
        const e = this.bones,
            t = this.boneInverses,
            n = this.boneMatrices,
            r = this.boneTexture;
        for (let r = 0, i = e.length; r < i; r++) {
            const i = e[r] ? e[r].matrixWorld : _identityMatrix;
            _offsetMatrix.multiplyMatrices(i, t[r]),
                _offsetMatrix.toArray(n, 16 * r)
        }
        null !== r &&
        (r.needsUpdate = !0)
    }
    clone() {
        return new Skeleton(this.bones, this.boneInverses)
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            const n = this.bones[t];
            if (n.name === e) return n
        }
    }
    dispose() {
        null !== this.boneTexture &&
        (this.boneTexture.dispose(), this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, r = e.bones.length; n < r; n++) {
            const r = e.bones[n];
            let i = t[r];
            void 0 === i &&
            (
                console.warn('THREE.Skeleton: No bone found with UUID:', r),
                    i = new Bone
            ),
                this.bones.push(i),
                this.boneInverses.push((new Matrix4).fromArray(e.boneInverses[n]))
        }
        return this.init(),
            this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: 'Skeleton',
                generator: 'Skeleton.toJSON'
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        const t = this.bones,
            n = this.boneInverses;
        for (let r = 0, i = t.length; r < i; r++) {
            const i = t[r];
            e.bones.push(i.uuid);
            const a = n[r];
            e.boneInverses.push(a.toArray())
        }
        return e
    }
}
const _instanceLocalMatrix = new Matrix4,
    _instanceWorldMatrix = new Matrix4,
    _instanceIntersects = [],
    _mesh = new Mesh;
class InstancedMesh extends Mesh {
    constructor(e, t, n) {
        super (e, t),
            this.instanceMatrix = new BufferAttribute(new Float32Array(16 * n), 16),
            this.instanceColor = null,
            this.count = n,
            this.frustumCulled = !1
    }
    copy(e) {
        return super.copy(e),
            this.instanceMatrix.copy(e.instanceMatrix),
        null !== e.instanceColor &&
        (this.instanceColor = e.instanceColor.clone()),
            this.count = e.count,
            this
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, 3 * e)
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, 16 * e)
    }
    raycast(e, t) {
        const n = this.matrixWorld,
            r = this.count;
        if (
            _mesh.geometry = this.geometry,
                _mesh.material = this.material,
            void 0 !== _mesh.material
        ) for (let i = 0; i < r; i++) {
            this.getMatrixAt(i, _instanceLocalMatrix),
                _instanceWorldMatrix.multiplyMatrices(n, _instanceLocalMatrix),
                _mesh.matrixWorld = _instanceWorldMatrix,
                _mesh.raycast(e, _instanceIntersects);
            for (let e = 0, n = _instanceIntersects.length; e < n; e++) {
                const n = _instanceIntersects[e];
                n.instanceId = i,
                    n.object = this,
                    t.push(n)
            }
            _instanceIntersects.length = 0
        }
    }
    setColorAt(e, t) {
        null === this.instanceColor &&
        (
            this.instanceColor = new BufferAttribute(new Float32Array(3 * this.count), 3)
        ),
            t.toArray(this.instanceColor.array, 3 * e)
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, 16 * e)
    }
    updateMorphTargets() {
    }
    dispose() {
        this.dispatchEvent({
            type: 'dispose'
        })
    }
}
InstancedMesh.prototype.isInstancedMesh = !0;
class LineBasicMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'LineBasicMaterial',
            this.color = new Color(16777215),
            this.linewidth = 1,
            this.linecap = 'round',
            this.linejoin = 'round',
            this.morphTargets = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.linewidth = e.linewidth,
            this.linecap = e.linecap,
            this.linejoin = e.linejoin,
            this.morphTargets = e.morphTargets,
            this
    }
}
LineBasicMaterial.prototype.isLineBasicMaterial = !0;
const _start$1 = new Vector3,
    _end$1 = new Vector3,
    _inverseMatrix$1 = new Matrix4,
    _ray$1 = new Ray,
    _sphere$1 = new Sphere;
class Line extends Object3D {
    constructor(e = new BufferGeometry, t = new LineBasicMaterial) {
        super (),
            this.type = 'Line',
            this.geometry = e,
            this.material = t,
            this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e),
            this.material = e.material,
            this.geometry = e.geometry,
            this
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.isBufferGeometry) if (null === e.index) {
            const t = e.attributes.position,
                n = [
                    0
                ];
            for (let e = 1, r = t.count; e < r; e++) _start$1.fromBufferAttribute(t, e - 1),
                _end$1.fromBufferAttribute(t, e),
                n[e] = n[e - 1],
                n[e] += _start$1.distanceTo(_end$1);
            e.setAttribute('lineDistance', new Float32BufferAttribute(n, 1))
        } else console.warn(
            'THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
        );
        else e.isGeometry &&
        console.error(
            'THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
        );
        return this
    }
    raycast(e, t) {
        const n = this.geometry,
            r = this.matrixWorld,
            i = e.params.Line.threshold,
            a = n.drawRange;
        if (
            null === n.boundingSphere &&
            n.computeBoundingSphere(),
                _sphere$1.copy(n.boundingSphere),
                _sphere$1.applyMatrix4(r),
                _sphere$1.radius += i,
            !1 === e.ray.intersectsSphere(_sphere$1)
        ) return;
        _inverseMatrix$1.copy(r).invert(),
            _ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);
        const s = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = s * s,
            l = new Vector3,
            c = new Vector3,
            h = new Vector3,
            u = new Vector3,
            d = this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
            const r = n.index,
                i = n.attributes.position;
            if (null !== r) {
                for (
                    let n = Math.max(0, a.start),
                        s = Math.min(r.count, a.start + a.count) - 1;
                    n < s;
                    n += d
                ) {
                    const a = r.getX(n),
                        s = r.getX(n + 1);
                    l.fromBufferAttribute(i, a),
                        c.fromBufferAttribute(i, s);
                    if (_ray$1.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const d = e.ray.origin.distanceTo(u);
                    d < e.near ||
                    d > e.far ||
                    t.push({
                        distance: d,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            } else {
                for (
                    let n = Math.max(0, a.start),
                        r = Math.min(i.count, a.start + a.count) - 1;
                    n < r;
                    n += d
                ) {
                    l.fromBufferAttribute(i, n),
                        c.fromBufferAttribute(i, n + 1);
                    if (_ray$1.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const r = e.ray.origin.distanceTo(u);
                    r < e.near ||
                    r > e.far ||
                    t.push({
                        distance: r,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            }
        } else n.isGeometry &&
        console.error(
            'THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
        )
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const e = t[n[0]];
                if (void 0 !== e) {
                    this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t].name ||
                            String(t);
                        this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = t
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            void 0 !== t &&
            t.length > 0 &&
            console.error(
                'THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.'
            )
        }
    }
}
Line.prototype.isLine = !0;
const _start = new Vector3,
    _end = new Vector3;
class LineSegments extends Line {
    constructor(e, t) {
        super (e, t),
            this.type = 'LineSegments'
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.isBufferGeometry) if (null === e.index) {
            const t = e.attributes.position,
                n = [];
            for (let e = 0, r = t.count; e < r; e += 2) _start.fromBufferAttribute(t, e),
                _end.fromBufferAttribute(t, e + 1),
                n[e] = 0 === e ? 0 : n[e - 1],
                n[e + 1] = n[e] + _start.distanceTo(_end);
            e.setAttribute('lineDistance', new Float32BufferAttribute(n, 1))
        } else console.warn(
            'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
        );
        else e.isGeometry &&
        console.error(
            'THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
        );
        return this
    }
}
LineSegments.prototype.isLineSegments = !0;
class LineLoop extends Line {
    constructor(e, t) {
        super (e, t),
            this.type = 'LineLoop'
    }
}
LineLoop.prototype.isLineLoop = !0;
class PointsMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'PointsMaterial',
            this.color = new Color(16777215),
            this.map = null,
            this.alphaMap = null,
            this.size = 1,
            this.sizeAttenuation = !0,
            this.morphTargets = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.alphaMap = e.alphaMap,
            this.size = e.size,
            this.sizeAttenuation = e.sizeAttenuation,
            this.morphTargets = e.morphTargets,
            this
    }
}
PointsMaterial.prototype.isPointsMaterial = !0;
const _inverseMatrix = new Matrix4,
    _ray = new Ray,
    _sphere = new Sphere,
    _position$2 = new Vector3;
class Points extends Object3D {
    constructor(e = new BufferGeometry, t = new PointsMaterial) {
        super (),
            this.type = 'Points',
            this.geometry = e,
            this.material = t,
            this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e),
            this.material = e.material,
            this.geometry = e.geometry,
            this
    }
    raycast(e, t) {
        const n = this.geometry,
            r = this.matrixWorld,
            i = e.params.Points.threshold,
            a = n.drawRange;
        if (
            null === n.boundingSphere &&
            n.computeBoundingSphere(),
                _sphere.copy(n.boundingSphere),
                _sphere.applyMatrix4(r),
                _sphere.radius += i,
            !1 === e.ray.intersectsSphere(_sphere)
        ) return;
        _inverseMatrix.copy(r).invert(),
            _ray.copy(e.ray).applyMatrix4(_inverseMatrix);
        const s = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = s * s;
        if (n.isBufferGeometry) {
            const i = n.index,
                s = n.attributes.position;
            if (null !== i) {
                for (
                    let n = Math.max(0, a.start),
                        l = Math.min(i.count, a.start + a.count);
                    n < l;
                    n++
                ) {
                    const a = i.getX(n);
                    _position$2.fromBufferAttribute(s, a),
                        testPoint(_position$2, a, o, r, e, t, this)
                }
            } else {
                for (
                    let n = Math.max(0, a.start),
                        i = Math.min(s.count, a.start + a.count);
                    n < i;
                    n++
                ) _position$2.fromBufferAttribute(s, n),
                    testPoint(_position$2, n, o, r, e, t, this)
            }
        } else console.error(
            'THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
        )
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const e = t[n[0]];
                if (void 0 !== e) {
                    this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t].name ||
                            String(t);
                        this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = t
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            void 0 !== t &&
            t.length > 0 &&
            console.error(
                'THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.'
            )
        }
    }
}
function testPoint(e, t, n, r, i, a, s) {
    const o = _ray.distanceSqToPoint(e);
    if (o < n) {
        const n = new Vector3;
        _ray.closestPointToPoint(e, n),
            n.applyMatrix4(r);
        const l = i.ray.origin.distanceTo(n);
        if (l < i.near || l > i.far) return;
        a.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: t,
            face: null,
            object: s
        })
    }
}
Points.prototype.isPoints = !0;
class VideoTexture extends Texture {
    constructor(e, t, n, r, i, a, s, o, l) {
        super (e, t, n, r, i, a, s, o, l),
            this.format = void 0 !== s ? s : 1022,
            this.minFilter = void 0 !== a ? a : 1006,
            this.magFilter = void 0 !== i ? i : 1006,
            this.generateMipmaps = !1;
        const c = this;
        'requestVideoFrameCallback' in e &&
        e.requestVideoFrameCallback(
            (function t() {
                c.needsUpdate = !0,
                    e.requestVideoFrameCallback(t)
            })
        )
    }
    clone() {
        return new this.constructor(this.image).copy(this)
    }
    update() {
        const e = this.image;
        !1 === 'requestVideoFrameCallback' in e &&
        e.readyState >= e.HAVE_CURRENT_DATA &&
        (this.needsUpdate = !0)
    }
}
VideoTexture.prototype.isVideoTexture = !0;
class CompressedTexture extends Texture {
    constructor(e, t, n, r, i, a, s, o, l, c, h, u) {
        super (null, a, s, o, l, c, r, i, h, u),
            this.image = {
                width: t,
                height: n
            },
            this.mipmaps = e,
            this.flipY = !1,
            this.generateMipmaps = !1
    }
}
CompressedTexture.prototype.isCompressedTexture = !0;
class CanvasTexture extends Texture {
    constructor(e, t, n, r, i, a, s, o, l) {
        super (e, t, n, r, i, a, s, o, l),
            this.needsUpdate = !0
    }
}
CanvasTexture.prototype.isCanvasTexture = !0;
class DepthTexture extends Texture {
    constructor(e, t, n, r, i, a, s, o, l, c) {
        if (1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c) throw new Error(
            'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
        );
        void 0 === n &&
        1026 === c &&
        (n = 1012),
        void 0 === n &&
        1027 === c &&
        (n = 1020),
            super (null, r, i, a, s, o, c, n, l),
            this.image = {
                width: e,
                height: t
            },
            this.magFilter = void 0 !== s ? s : 1003,
            this.minFilter = void 0 !== o ? o : 1003,
            this.flipY = !1,
            this.generateMipmaps = !1
    }
}
DepthTexture.prototype.isDepthTexture = !0;
class PolyhedronGeometry extends BufferGeometry {
    constructor(e, t, n = 1, r = 0) {
        super (),
            this.type = 'PolyhedronGeometry',
            this.parameters = {
                vertices: e,
                indices: t,
                radius: n,
                detail: r
            };
        const i = [],
            a = [];
        function s(e, t, n, r) {
            const i = r + 1,
                a = [];
            for (let r = 0; r <= i; r++) {
                a[r] = [];
                const s = e.clone().lerp(n, r / i),
                    o = t.clone().lerp(n, r / i),
                    l = i - r;
                for (let e = 0; e <= l; e++) a[r][e] = 0 === e &&
                r === i ? s : s.clone().lerp(o, e / l)
            }
            for (let e = 0; e < i; e++) for (let t = 0; t < 2 * (i - e) - 1; t++) {
                const n = Math.floor(t / 2);
                t % 2 == 0 ? (o(a[e][n + 1]), o(a[e + 1][n]), o(a[e][n])) : (o(a[e][n + 1]), o(a[e + 1][n + 1]), o(a[e + 1][n]))
            }
        }
        function o(e) {
            i.push(e.x, e.y, e.z)
        }
        function l(t, n) {
            const r = 3 * t;
            n.x = e[r + 0],
                n.y = e[r + 1],
                n.z = e[r + 2]
        }
        function c(e, t, n, r) {
            r < 0 &&
            1 === e.x &&
            (a[t] = e.x - 1),
            0 === n.x &&
            0 === n.z &&
            (a[t] = r / 2 / Math.PI + 0.5)
        }
        function h(e) {
            return Math.atan2(e.z, - e.x)
        }
        !function (e) {
            const n = new Vector3,
                r = new Vector3,
                i = new Vector3;
            for (let a = 0; a < t.length; a += 3) l(t[a + 0], n),
                l(t[a + 1], r),
                l(t[a + 2], i),
                s(n, r, i, e)
        }(r),
            function (e) {
                const t = new Vector3;
                for (let n = 0; n < i.length; n += 3) t.x = i[n + 0],
                    t.y = i[n + 1],
                    t.z = i[n + 2],
                    t.normalize().multiplyScalar(e),
                    i[n + 0] = t.x,
                    i[n + 1] = t.y,
                    i[n + 2] = t.z
            }(n),
            function () {
                const e = new Vector3;
                for (let n = 0; n < i.length; n += 3) {
                    e.x = i[n + 0],
                        e.y = i[n + 1],
                        e.z = i[n + 2];
                    const r = h(e) / 2 / Math.PI + 0.5,
                        s = (t = e, Math.atan2( - t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + 0.5);
                    a.push(r, 1 - s)
                }
                var t;
                (
                    function () {
                        const e = new Vector3,
                            t = new Vector3,
                            n = new Vector3,
                            r = new Vector3,
                            s = new Vector2,
                            o = new Vector2,
                            l = new Vector2;
                        for (let u = 0, d = 0; u < i.length; u += 9, d += 6) {
                            e.set(i[u + 0], i[u + 1], i[u + 2]),
                                t.set(i[u + 3], i[u + 4], i[u + 5]),
                                n.set(i[u + 6], i[u + 7], i[u + 8]),
                                s.set(a[d + 0], a[d + 1]),
                                o.set(a[d + 2], a[d + 3]),
                                l.set(a[d + 4], a[d + 5]),
                                r.copy(e).add(t).add(n).divideScalar(3);
                            const p = h(r);
                            c(s, d + 0, e, p),
                                c(o, d + 2, t, p),
                                c(l, d + 4, n, p)
                        }
                    }
                ) (),
                    function () {
                        for (let e = 0; e < a.length; e += 6) {
                            const t = a[e + 0],
                                n = a[e + 2],
                                r = a[e + 4],
                                i = Math.max(t, n, r),
                                s = Math.min(t, n, r);
                            i > 0.9 &&
                            s < 0.1 &&
                            (t < 0.2 && (a[e + 0] += 1), n < 0.2 && (a[e + 2] += 1), r < 0.2 && (a[e + 4] += 1))
                        }
                    }()
            }(),
            this.setAttribute('position', new Float32BufferAttribute(i, 3)),
            this.setAttribute('normal', new Float32BufferAttribute(i.slice(), 3)),
            this.setAttribute('uv', new Float32BufferAttribute(a, 2)),
            0 === r ? this.computeVertexNormals() : this.normalizeNormals()
    }
}
new Vector3,
    new Vector3,
    new Vector3,
    new Triangle;
const Earcut = {
    triangulate: function (e, t, n) {
        n = n ||
            2;
        const r = t &&
                t.length,
            i = r ? t[0] * n : e.length;
        let a = linkedList(e, 0, i, n, !0);
        const s = [];
        if (!a || a.next === a.prev) return s;
        let o,
            l,
            c,
            h,
            u,
            d,
            p;
        if (r && (a = eliminateHoles(e, t, a, n)), e.length > 80 * n) {
            o = c = e[0],
                l = h = e[1];
            for (let t = n; t < i; t += n) u = e[t],
                d = e[t + 1],
            u < o &&
            (o = u),
            d < l &&
            (l = d),
            u > c &&
            (c = u),
            d > h &&
            (h = d);
            p = Math.max(c - o, h - l),
                p = 0 !== p ? 1 / p : 0
        }
        return earcutLinked(a, s, n, o, l, p),
            s
    }
};
function linkedList(e, t, n, r, i) {
    let a,
        s;
    if (i === signedArea(e, t, n, r) > 0) for (a = t; a < n; a += r) s = insertNode(a, e[a], e[a + 1], s);
    else for (a = n - r; a >= t; a -= r) s = insertNode(a, e[a], e[a + 1], s);
    return s &&
    equals(s, s.next) &&
    (removeNode(s), s = s.next),
        s
}
function filterPoints(e, t) {
    if (!e) return e;
    t ||
    (t = e);
    let n,
        r = e;
    do {
        if (n = !1, r.steiner || !equals(r, r.next) && 0 !== area(r.prev, r, r.next)) r = r.next;
        else {
            if (removeNode(r), r = t = r.prev, r === r.next) break;
            n = !0
        }
    } while (n || r !== t);
    return t
}
function earcutLinked(e, t, n, r, i, a, s) {
    if (!e) return;
    !s &&
    a &&
    indexCurve(e, r, i, a);
    let o,
        l,
        c = e;
    for (; e.prev !== e.next; ) if (o = e.prev, l = e.next, a ? isEarHashed(e, r, i, a) : isEar(e)) t.push(o.i / n),
        t.push(e.i / n),
        t.push(l.i / n),
        removeNode(e),
        e = l.next,
        c = l.next;
    else if ((e = l) === c) {
        s ? 1 === s ? earcutLinked(e = cureLocalIntersections(filterPoints(e), t, n), t, n, r, i, a, 2) : 2 === s &&
            splitEarcut(e, t, n, r, i, a) : earcutLinked(filterPoints(e), t, n, r, i, a, 1);
        break
    }
}
function isEar(e) {
    const t = e.prev,
        n = e,
        r = e.next;
    if (area(t, n, r) >= 0) return !1;
    let i = e.next.next;
    for (; i !== e.prev; ) {
        if (
            pointInTriangle(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) &&
            area(i.prev, i, i.next) >= 0
        ) return !1;
        i = i.next
    }
    return !0
}
function isEarHashed(e, t, n, r) {
    const i = e.prev,
        a = e,
        s = e.next;
    if (area(i, a, s) >= 0) return !1;
    const o = i.x < a.x ? i.x < s.x ? i.x : s.x : a.x < s.x ? a.x : s.x,
        l = i.y < a.y ? i.y < s.y ? i.y : s.y : a.y < s.y ? a.y : s.y,
        c = i.x > a.x ? i.x > s.x ? i.x : s.x : a.x > s.x ? a.x : s.x,
        h = i.y > a.y ? i.y > s.y ? i.y : s.y : a.y > s.y ? a.y : s.y,
        u = zOrder(o, l, t, n, r),
        d = zOrder(c, h, t, n, r);
    let p = e.prevZ,
        m = e.nextZ;
    for (; p && p.z >= u && m && m.z <= d; ) {
        if (
            p !== e.prev &&
            p !== e.next &&
            pointInTriangle(i.x, i.y, a.x, a.y, s.x, s.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0
        ) return !1;
        if (
            p = p.prevZ,
            m !== e.prev &&
            m !== e.next &&
            pointInTriangle(i.x, i.y, a.x, a.y, s.x, s.y, m.x, m.y) &&
            area(m.prev, m, m.next) >= 0
        ) return !1;
        m = m.nextZ
    }
    for (; p && p.z >= u; ) {
        if (
            p !== e.prev &&
            p !== e.next &&
            pointInTriangle(i.x, i.y, a.x, a.y, s.x, s.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0
        ) return !1;
        p = p.prevZ
    }
    for (; m && m.z <= d; ) {
        if (
            m !== e.prev &&
            m !== e.next &&
            pointInTriangle(i.x, i.y, a.x, a.y, s.x, s.y, m.x, m.y) &&
            area(m.prev, m, m.next) >= 0
        ) return !1;
        m = m.nextZ
    }
    return !0
}
function cureLocalIntersections(e, t, n) {
    let r = e;
    do {
        const i = r.prev,
            a = r.next.next;
        !equals(i, a) &&
        intersects(i, r, r.next, a) &&
        locallyInside(i, a) &&
        locallyInside(a, i) &&
        (
            t.push(i.i / n),
                t.push(r.i / n),
                t.push(a.i / n),
                removeNode(r),
                removeNode(r.next),
                r = e = a
        ),
            r = r.next
    } while (r !== e);
    return filterPoints(r)
}
function splitEarcut(e, t, n, r, i, a) {
    let s = e;
    do {
        let e = s.next.next;
        for (; e !== s.prev; ) {
            if (s.i !== e.i && isValidDiagonal(s, e)) {
                let o = splitPolygon(s, e);
                return s = filterPoints(s, s.next),
                    o = filterPoints(o, o.next),
                    earcutLinked(s, t, n, r, i, a),
                    void earcutLinked(o, t, n, r, i, a)
            }
            e = e.next
        }
        s = s.next
    } while (s !== e)
}
function eliminateHoles(e, t, n, r) {
    const i = [];
    let a,
        s,
        o,
        l,
        c;
    for (a = 0, s = t.length; a < s; a++) o = t[a] * r,
        l = a < s - 1 ? t[a + 1] * r : e.length,
        c = linkedList(e, o, l, r, !1),
    c === c.next &&
    (c.steiner = !0),
        i.push(getLeftmost(c));
    for (i.sort(compareX), a = 0; a < i.length; a++) eliminateHole(i[a], n),
        n = filterPoints(n, n.next);
    return n
}
function compareX(e, t) {
    return e.x - t.x
}
function eliminateHole(e, t) {
    if (t = findHoleBridge(e, t)) {
        const n = splitPolygon(t, e);
        filterPoints(t, t.next),
            filterPoints(n, n.next)
    }
}
function findHoleBridge(e, t) {
    let n = t;
    const r = e.x,
        i = e.y;
    let a,
        s = - 1 / 0;
    do {
        if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
            const e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if (e <= r && e > s) {
                if (s = e, e === r) {
                    if (i === n.y) return n;
                    if (i === n.next.y) return n.next
                }
                a = n.x < n.next.x ? n : n.next
            }
        }
        n = n.next
    } while (n !== t);
    if (!a) return null;
    if (r === s) return a;
    const o = a,
        l = a.x,
        c = a.y;
    let h,
        u = 1 / 0;
    n = a;
    do {
        r >= n.x &&
        n.x >= l &&
        r !== n.x &&
        pointInTriangle(i < c ? r : s, i, l, c, i < c ? s : r, i, n.x, n.y) &&
        (
            h = Math.abs(i - n.y) / (r - n.x),
            locallyInside(n, e) &&
            (h < u || h === u && (n.x > a.x || n.x === a.x && sectorContainsSector(a, n))) &&
            (a = n, u = h)
        ),
            n = n.next
    } while (n !== o);
    return a
}
function sectorContainsSector(e, t) {
    return area(e.prev, e, t.prev) < 0 &&
        area(t.next, e, e.next) < 0
}
function indexCurve(e, t, n, r) {
    let i = e;
    do {
        null === i.z &&
        (i.z = zOrder(i.x, i.y, t, n, r)),
            i.prevZ = i.prev,
            i.nextZ = i.next,
            i = i.next
    } while (i !== e);
    i.prevZ.nextZ = null,
        i.prevZ = null,
        sortLinked(i)
}
function sortLinked(e) {
    let t,
        n,
        r,
        i,
        a,
        s,
        o,
        l,
        c = 1;
    do {
        for (n = e, e = null, a = null, s = 0; n; ) {
            for (s++, r = n, o = 0, t = 0; t < c && (o++, r = r.nextZ, r); t++);
            for (l = c; o > 0 || l > 0 && r; ) 0 !== o &&
            (0 === l || !r || n.z <= r.z) ? (i = n, n = n.nextZ, o--) : (i = r, r = r.nextZ, l--),
                a ? a.nextZ = i : e = i,
                i.prevZ = a,
                a = i;
            n = r
        }
        a.nextZ = null,
            c *= 2
    } while (s > 1);
    return e
}
function zOrder(e, t, n, r, i) {
    return (
        e = 1431655765 & (
            (
                e = 858993459 & (
                    (e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * i) | e << 8)) | e << 4)) | e << 2
                )
            ) | e << 1
        )
    ) | (
        t = 1431655765 & (
            (
                t = 858993459 & (
                    (t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * i) | t << 8)) | t << 4)) | t << 2
                )
            ) | t << 1
        )
    ) << 1
}
function getLeftmost(e) {
    let t = e,
        n = e;
    do {
        (t.x < n.x || t.x === n.x && t.y < n.y) &&
        (n = t),
            t = t.next
    } while (t !== e);
    return n
}
function pointInTriangle(e, t, n, r, i, a, s, o) {
    return (i - s) * (t - o) - (e - s) * (a - o) >= 0 &&
        (e - s) * (r - o) - (n - s) * (t - o) >= 0 &&
        (n - s) * (a - o) - (i - s) * (r - o) >= 0
}
function isValidDiagonal(e, t) {
    return e.next.i !== t.i &&
        e.prev.i !== t.i &&
        !intersectsPolygon(e, t) &&
        (
            locallyInside(e, t) &&
            locallyInside(t, e) &&
            middleInside(e, t) &&
            (area(e.prev, e, t.prev) || area(e, t.prev, t)) ||
            equals(e, t) &&
            area(e.prev, e, e.next) > 0 &&
            area(t.prev, t, t.next) > 0
        )
}
function area(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
}
function equals(e, t) {
    return e.x === t.x &&
        e.y === t.y
}
function intersects(e, t, n, r) {
    const i = sign(area(e, t, n)),
        a = sign(area(e, t, r)),
        s = sign(area(n, r, e)),
        o = sign(area(n, r, t));
    return i !== a &&
        s !== o ||
        (
            !(0 !== i || !onSegment(e, n, t)) ||
            (
                !(0 !== a || !onSegment(e, r, t)) ||
                (!(0 !== s || !onSegment(n, e, r)) || !(0 !== o || !onSegment(n, t, r)))
            )
        )
}
function onSegment(e, t, n) {
    return t.x <= Math.max(e.x, n.x) &&
        t.x >= Math.min(e.x, n.x) &&
        t.y <= Math.max(e.y, n.y) &&
        t.y >= Math.min(e.y, n.y)
}
function sign(e) {
    return e > 0 ? 1 : e < 0 ? - 1 : 0
}
function intersectsPolygon(e, t) {
    let n = e;
    do {
        if (
            n.i !== e.i &&
            n.next.i !== e.i &&
            n.i !== t.i &&
            n.next.i !== t.i &&
            intersects(n, n.next, e, t)
        ) return !0;
        n = n.next
    } while (n !== e);
    return !1
}
function locallyInside(e, t) {
    return area(e.prev, e, e.next) < 0 ? area(e, t, e.next) >= 0 &&
        area(e, e.prev, t) >= 0 : area(e, t, e.prev) < 0 ||
        area(e, e.next, t) < 0
}
function middleInside(e, t) {
    let n = e,
        r = !1;
    const i = (e.x + t.x) / 2,
        a = (e.y + t.y) / 2;
    do {
        n.y > a != n.next.y > a &&
        n.next.y !== n.y &&
        i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x &&
        (r = !r),
            n = n.next
    } while (n !== e);
    return r
}
function splitPolygon(e, t) {
    const n = new Node(e.i, e.x, e.y),
        r = new Node(t.i, t.x, t.y),
        i = e.next,
        a = t.prev;
    return e.next = t,
        t.prev = e,
        n.next = i,
        i.prev = n,
        r.next = n,
        n.prev = r,
        a.next = r,
        r.prev = a,
        r
}
function insertNode(e, t, n, r) {
    const i = new Node(e, t, n);
    return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i),
        i
}
function removeNode(e) {
    e.next.prev = e.prev,
        e.prev.next = e.next,
    e.prevZ &&
    (e.prevZ.nextZ = e.nextZ),
    e.nextZ &&
    (e.nextZ.prevZ = e.prevZ)
}
function Node(e, t, n) {
    this.i = e,
        this.x = t,
        this.y = n,
        this.prev = null,
        this.next = null,
        this.z = null,
        this.prevZ = null,
        this.nextZ = null,
        this.steiner = !1
}
function signedArea(e, t, n, r) {
    let i = 0;
    for (let a = t, s = n - r; a < n; a += r) i += (e[s] - e[a]) * (e[a + 1] + e[s + 1]),
        s = a;
    return i
}
class ShapeUtils {
    static area(e) {
        const t = e.length;
        let n = 0;
        for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
        return 0.5 * n
    }
    static isClockWise(e) {
        return ShapeUtils.area(e) < 0
    }
    static triangulateShape(e, t) {
        const n = [],
            r = [],
            i = [];
        removeDupEndPts(e),
            addContour(n, e);
        let a = e.length;
        t.forEach(removeDupEndPts);
        for (let e = 0; e < t.length; e++) r.push(a),
            a += t[e].length,
            addContour(n, t[e]);
        const s = Earcut.triangulate(n, r);
        for (let e = 0; e < s.length; e += 3) i.push(s.slice(e, e + 3));
        return i
    }
}
function removeDupEndPts(e) {
    const t = e.length;
    t > 2 &&
    e[t - 1].equals(e[0]) &&
    e.pop()
}
function addContour(e, t) {
    for (let n = 0; n < t.length; n++) e.push(t[n].x),
        e.push(t[n].y)
}
class ExtrudeGeometry extends BufferGeometry {
    constructor(e, t) {
        super (),
            this.type = 'ExtrudeGeometry',
            this.parameters = {
                shapes: e,
                options: t
            },
            e = Array.isArray(e) ? e : [
                e
            ];
        const n = this,
            r = [],
            i = [];
        for (let t = 0, n = e.length; t < n; t++) {
            a(e[t])
        }
        function a(e) {
            const a = [],
                s = void 0 !== t.curveSegments ? t.curveSegments : 12,
                o = void 0 !== t.steps ? t.steps : 1;
            let l = void 0 !== t.depth ? t.depth : 100,
                c = void 0 === t.bevelEnabled ||
                    t.bevelEnabled,
                h = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
                u = void 0 !== t.bevelSize ? t.bevelSize : h - 2,
                d = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
                p = void 0 !== t.bevelSegments ? t.bevelSegments : 3;
            const m = t.extrudePath,
                f = void 0 !== t.UVGenerator ? t.UVGenerator : WorldUVGenerator;
            void 0 !== t.amount &&
            (
                console.warn(
                    'THREE.ExtrudeBufferGeometry: amount has been renamed to depth.'
                ),
                    l = t.amount
            );
            let g,
                v,
                _,
                x,
                y,
                b = !1;
            m &&
            (
                g = m.getSpacedPoints(o),
                    b = !0,
                    c = !1,
                    v = m.computeFrenetFrames(o, !1),
                    _ = new Vector3,
                    x = new Vector3,
                    y = new Vector3
            ),
            c ||
            (p = 0, h = 0, u = 0, d = 0);
            const M = e.extractPoints(s);
            let w = M.shape;
            const S = M.holes;
            if (!ShapeUtils.isClockWise(w)) {
                w = w.reverse();
                for (let e = 0, t = S.length; e < t; e++) {
                    const t = S[e];
                    ShapeUtils.isClockWise(t) &&
                    (S[e] = t.reverse())
                }
            }
            const T = ShapeUtils.triangulateShape(w, S),
                E = w;
            for (let e = 0, t = S.length; e < t; e++) {
                const t = S[e];
                w = w.concat(t)
            }
            function L(e, t, n) {
                return t ||
                console.error('THREE.ExtrudeGeometry: vec does not exist'),
                    t.clone().multiplyScalar(n).add(e)
            }
            const A = w.length,
                R = T.length;
            function C(e, t, n) {
                let r,
                    i,
                    a;
                const s = e.x - t.x,
                    o = e.y - t.y,
                    l = n.x - e.x,
                    c = n.y - e.y,
                    h = s * s + o * o,
                    u = s * c - o * l;
                if (Math.abs(u) > Number.EPSILON) {
                    const u = Math.sqrt(h),
                        d = Math.sqrt(l * l + c * c),
                        p = t.x - o / u,
                        m = t.y + s / u,
                        f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (s * c - o * l);
                    r = p + s * f - e.x,
                        i = m + o * f - e.y;
                    const g = r * r + i * i;
                    if (g <= 2) return new Vector2(r, i);
                    a = Math.sqrt(g / 2)
                } else {
                    let e = !1;
                    s > Number.EPSILON ? l > Number.EPSILON &&
                        (e = !0) : s < - Number.EPSILON ? l < - Number.EPSILON &&
                        (e = !0) : Math.sign(o) === Math.sign(c) &&
                        (e = !0),
                        e ? (r = - o, i = s, a = Math.sqrt(h)) : (r = s, i = o, a = Math.sqrt(h / 2))
                }
                return new Vector2(r / a, i / a)
            }
            const P = [];
            for (let e = 0, t = E.length, n = t - 1, r = e + 1; e < t; e++, n++, r++) n === t &&
            (n = 0),
            r === t &&
            (r = 0),
                P[e] = C(E[e], E[n], E[r]);
            const I = [];
            let N,
                D = P.concat();
            for (let e = 0, t = S.length; e < t; e++) {
                const t = S[e];
                N = [];
                for (let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++, r++, i++) r === n &&
                (r = 0),
                i === n &&
                (i = 0),
                    N[e] = C(t[e], t[r], t[i]);
                I.push(N),
                    D = D.concat(N)
            }
            for (let e = 0; e < p; e++) {
                const t = e / p,
                    n = h * Math.cos(t * Math.PI / 2),
                    r = u * Math.sin(t * Math.PI / 2) + d;
                for (let e = 0, t = E.length; e < t; e++) {
                    const t = L(E[e], P[e], r);
                    U(t.x, t.y, - n)
                }
                for (let e = 0, t = S.length; e < t; e++) {
                    const t = S[e];
                    N = I[e];
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = L(t[e], N[e], r);
                        U(i.x, i.y, - n)
                    }
                }
            }
            const B = u + d;
            for (let e = 0; e < A; e++) {
                const t = c ? L(w[e], D[e], B) : w[e];
                b ? (
                    x.copy(v.normals[0]).multiplyScalar(t.x),
                        _.copy(v.binormals[0]).multiplyScalar(t.y),
                        y.copy(g[0]).add(x).add(_),
                        U(y.x, y.y, y.z)
                ) : U(t.x, t.y, 0)
            }
            for (let e = 1; e <= o; e++) for (let t = 0; t < A; t++) {
                const n = c ? L(w[t], D[t], B) : w[t];
                b ? (
                    x.copy(v.normals[e]).multiplyScalar(n.x),
                        _.copy(v.binormals[e]).multiplyScalar(n.y),
                        y.copy(g[e]).add(x).add(_),
                        U(y.x, y.y, y.z)
                ) : U(n.x, n.y, l / o * e)
            }
            for (let e = p - 1; e >= 0; e--) {
                const t = e / p,
                    n = h * Math.cos(t * Math.PI / 2),
                    r = u * Math.sin(t * Math.PI / 2) + d;
                for (let e = 0, t = E.length; e < t; e++) {
                    const t = L(E[e], P[e], r);
                    U(t.x, t.y, l + n)
                }
                for (let e = 0, t = S.length; e < t; e++) {
                    const t = S[e];
                    N = I[e];
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = L(t[e], N[e], r);
                        b ? U(i.x, i.y + g[o - 1].y, g[o - 1].x + n) : U(i.x, i.y, l + n)
                    }
                }
            }
            function V(e, t) {
                let n = e.length;
                for (; --n >= 0; ) {
                    const r = n;
                    let i = n - 1;
                    i < 0 &&
                    (i = e.length - 1);
                    for (let e = 0, n = o + 2 * p; e < n; e++) {
                        const n = A * e,
                            a = A * (e + 1);
                        F(t + r + n, t + i + n, t + i + a, t + r + a)
                    }
                }
            }
            function U(e, t, n) {
                a.push(e),
                    a.push(t),
                    a.push(n)
            }
            function O(e, t, i) {
                G(e),
                    G(t),
                    G(i);
                const a = r.length / 3,
                    s = f.generateTopUV(n, r, a - 3, a - 2, a - 1);
                z(s[0]),
                    z(s[1]),
                    z(s[2])
            }
            function F(e, t, i, a) {
                G(e),
                    G(t),
                    G(a),
                    G(t),
                    G(i),
                    G(a);
                const s = r.length / 3,
                    o = f.generateSideWallUV(n, r, s - 6, s - 3, s - 2, s - 1);
                z(o[0]),
                    z(o[1]),
                    z(o[3]),
                    z(o[1]),
                    z(o[2]),
                    z(o[3])
            }
            function G(e) {
                r.push(a[3 * e + 0]),
                    r.push(a[3 * e + 1]),
                    r.push(a[3 * e + 2])
            }
            function z(e) {
                i.push(e.x),
                    i.push(e.y)
            }
            !function () {
                const e = r.length / 3;
                if (c) {
                    let e = 0,
                        t = A * e;
                    for (let e = 0; e < R; e++) {
                        const n = T[e];
                        O(n[2] + t, n[1] + t, n[0] + t)
                    }
                    e = o + 2 * p,
                        t = A * e;
                    for (let e = 0; e < R; e++) {
                        const n = T[e];
                        O(n[0] + t, n[1] + t, n[2] + t)
                    }
                } else {
                    for (let e = 0; e < R; e++) {
                        const t = T[e];
                        O(t[2], t[1], t[0])
                    }
                    for (let e = 0; e < R; e++) {
                        const t = T[e];
                        O(t[0] + A * o, t[1] + A * o, t[2] + A * o)
                    }
                }
                n.addGroup(e, r.length / 3 - e, 0)
            }(),
                function () {
                    const e = r.length / 3;
                    let t = 0;
                    V(E, t),
                        t += E.length;
                    for (let e = 0, n = S.length; e < n; e++) {
                        const n = S[e];
                        V(n, t),
                            t += n.length
                    }
                    n.addGroup(e, r.length / 3 - e, 1)
                }()
        }
        this.setAttribute('position', new Float32BufferAttribute(r, 3)),
            this.setAttribute('uv', new Float32BufferAttribute(i, 2)),
            this.computeVertexNormals()
    }
    toJSON() {
        const e = BufferGeometry.prototype.toJSON.call(this);
        return toJSON$1(this.parameters.shapes, this.parameters.options, e)
    }
}
const WorldUVGenerator = {
    generateTopUV: function (e, t, n, r, i) {
        const a = t[3 * n],
            s = t[3 * n + 1],
            o = t[3 * r],
            l = t[3 * r + 1],
            c = t[3 * i],
            h = t[3 * i + 1];
        return [new Vector2(a, s),
            new Vector2(o, l),
            new Vector2(c, h)]
    },
    generateSideWallUV: function (e, t, n, r, i, a) {
        const s = t[3 * n],
            o = t[3 * n + 1],
            l = t[3 * n + 2],
            c = t[3 * r],
            h = t[3 * r + 1],
            u = t[3 * r + 2],
            d = t[3 * i],
            p = t[3 * i + 1],
            m = t[3 * i + 2],
            f = t[3 * a],
            g = t[3 * a + 1],
            v = t[3 * a + 2];
        return Math.abs(o - h) < 0.01 ? [
            new Vector2(s, 1 - l),
            new Vector2(c, 1 - u),
            new Vector2(d, 1 - m),
            new Vector2(f, 1 - v)
        ] : [
            new Vector2(o, 1 - l),
            new Vector2(h, 1 - u),
            new Vector2(p, 1 - m),
            new Vector2(g, 1 - v)
        ]
    }
};
function toJSON$1(e, t, n) {
    if (n.shapes = [], Array.isArray(e)) for (let t = 0, r = e.length; t < r; t++) {
        const r = e[t];
        n.shapes.push(r.uuid)
    } else n.shapes.push(e.uuid);
    return void 0 !== t.extrudePath &&
    (n.options.extrudePath = t.extrudePath.toJSON()),
        n
}
class IcosahedronGeometry extends PolyhedronGeometry {
    constructor(e = 1, t = 0) {
        const n = (1 + Math.sqrt(5)) / 2;
        super (
            [ - 1,
                n,
                0,
                1,
                n,
                0,
                - 1,
                - n,
                0,
                1,
                - n,
                0,
                0,
                - 1,
                n,
                0,
                1,
                n,
                0,
                - 1,
                - n,
                0,
                1,
                - n,
                n,
                0,
                - 1,
                n,
                0,
                1,
                - n,
                0,
                - 1,
                - n,
                0,
                1],
            [
                0,
                11,
                5,
                0,
                5,
                1,
                0,
                1,
                7,
                0,
                7,
                10,
                0,
                10,
                11,
                1,
                5,
                9,
                5,
                11,
                4,
                11,
                10,
                2,
                10,
                7,
                6,
                7,
                1,
                8,
                3,
                9,
                4,
                3,
                4,
                2,
                3,
                2,
                6,
                3,
                6,
                8,
                3,
                8,
                9,
                4,
                9,
                5,
                2,
                4,
                11,
                6,
                2,
                10,
                8,
                6,
                7,
                9,
                8,
                1
            ],
            e,
            t
        ),
            this.type = 'IcosahedronGeometry',
            this.parameters = {
                radius: e,
                detail: t
            }
    }
}
class ShapeGeometry extends BufferGeometry {
    constructor(e, t = 12) {
        super (),
            this.type = 'ShapeGeometry',
            this.parameters = {
                shapes: e,
                curveSegments: t
            };
        const n = [],
            r = [],
            i = [],
            a = [];
        let s = 0,
            o = 0;
        if (!1 === Array.isArray(e)) l(e);
        else for (let t = 0; t < e.length; t++) l(e[t]),
            this.addGroup(s, o, t),
            s += o,
            o = 0;
        function l(e) {
            const s = r.length / 3,
                l = e.extractPoints(t);
            let c = l.shape;
            const h = l.holes;
            !1 === ShapeUtils.isClockWise(c) &&
            (c = c.reverse());
            for (let e = 0, t = h.length; e < t; e++) {
                const t = h[e];
                !0 === ShapeUtils.isClockWise(t) &&
                (h[e] = t.reverse())
            }
            const u = ShapeUtils.triangulateShape(c, h);
            for (let e = 0, t = h.length; e < t; e++) {
                const t = h[e];
                c = c.concat(t)
            }
            for (let e = 0, t = c.length; e < t; e++) {
                const t = c[e];
                r.push(t.x, t.y, 0),
                    i.push(0, 0, 1),
                    a.push(t.x, t.y)
            }
            for (let e = 0, t = u.length; e < t; e++) {
                const t = u[e],
                    r = t[0] + s,
                    i = t[1] + s,
                    a = t[2] + s;
                n.push(r, i, a),
                    o += 3
            }
        }
        this.setIndex(n),
            this.setAttribute('position', new Float32BufferAttribute(r, 3)),
            this.setAttribute('normal', new Float32BufferAttribute(i, 3)),
            this.setAttribute('uv', new Float32BufferAttribute(a, 2))
    }
    toJSON() {
        const e = BufferGeometry.prototype.toJSON.call(this);
        return toJSON(this.parameters.shapes, e)
    }
}
function toJSON(e, t) {
    if (t.shapes = [], Array.isArray(e)) for (let n = 0, r = e.length; n < r; n++) {
        const r = e[n];
        t.shapes.push(r.uuid)
    } else t.shapes.push(e.uuid);
    return t
}
class SphereGeometry extends BufferGeometry {
    constructor(e = 1, t = 8, n = 6, r = 0, i = 2 * Math.PI, a = 0, s = Math.PI) {
        super (),
            this.type = 'SphereGeometry',
            this.parameters = {
                radius: e,
                widthSegments: t,
                heightSegments: n,
                phiStart: r,
                phiLength: i,
                thetaStart: a,
                thetaLength: s
            },
            t = Math.max(3, Math.floor(t)),
            n = Math.max(2, Math.floor(n));
        const o = Math.min(a + s, Math.PI);
        let l = 0;
        const c = [],
            h = new Vector3,
            u = new Vector3,
            d = [],
            p = [],
            m = [],
            f = [];
        for (let d = 0; d <= n; d++) {
            const g = [],
                v = d / n;
            let _ = 0;
            0 == d &&
            0 == a ? _ = 0.5 / t : d == n &&
                o == Math.PI &&
                (_ = - 0.5 / t);
            for (let n = 0; n <= t; n++) {
                const o = n / t;
                h.x = - e * Math.cos(r + o * i) * Math.sin(a + v * s),
                    h.y = e * Math.cos(a + v * s),
                    h.z = e * Math.sin(r + o * i) * Math.sin(a + v * s),
                    p.push(h.x, h.y, h.z),
                    u.copy(h).normalize(),
                    m.push(u.x, u.y, u.z),
                    f.push(o + _, 1 - v),
                    g.push(l++)
            }
            c.push(g)
        }
        for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
            const t = c[e][r + 1],
                i = c[e][r],
                s = c[e + 1][r],
                l = c[e + 1][r + 1];
            (0 !== e || a > 0) &&
            d.push(t, i, l),
            (e !== n - 1 || o < Math.PI) &&
            d.push(i, s, l)
        }
        this.setIndex(d),
            this.setAttribute('position', new Float32BufferAttribute(p, 3)),
            this.setAttribute('normal', new Float32BufferAttribute(m, 3)),
            this.setAttribute('uv', new Float32BufferAttribute(f, 2))
    }
}
class ShadowMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'ShadowMaterial',
            this.color = new Color(0),
            this.transparent = !0,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this
    }
}
ShadowMaterial.prototype.isShadowMaterial = !0;
class RawShaderMaterial extends ShaderMaterial {
    constructor(e) {
        super (e),
            this.type = 'RawShaderMaterial'
    }
}
RawShaderMaterial.prototype.isRawShaderMaterial = !0;
class MeshStandardMaterial extends Material {
    constructor(e) {
        super (),
            this.defines = {
                STANDARD: ''
            },
            this.type = 'MeshStandardMaterial',
            this.color = new Color(16777215),
            this.roughness = 1,
            this.metalness = 0,
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Color(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new Vector2(1, 1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.roughnessMap = null,
            this.metalnessMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.envMapIntensity = 1,
            this.refractionRatio = 0.98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = 'round',
            this.wireframeLinejoin = 'round',
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.flatShading = !1,
            this.vertexTangents = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.defines = {
                STANDARD: ''
            },
            this.color.copy(e.color),
            this.roughness = e.roughness,
            this.metalness = e.metalness,
            this.map = e.map,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.emissive.copy(e.emissive),
            this.emissiveMap = e.emissiveMap,
            this.emissiveIntensity = e.emissiveIntensity,
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.roughnessMap = e.roughnessMap,
            this.metalnessMap = e.metalnessMap,
            this.alphaMap = e.alphaMap,
            this.envMap = e.envMap,
            this.envMapIntensity = e.envMapIntensity,
            this.refractionRatio = e.refractionRatio,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this.flatShading = e.flatShading,
            this.vertexTangents = e.vertexTangents,
            this
    }
}
MeshStandardMaterial.prototype.isMeshStandardMaterial = !0;
class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(e) {
        super (),
            this.defines = {
                STANDARD: '',
                PHYSICAL: ''
            },
            this.type = 'MeshPhysicalMaterial',
            this.clearcoat = 0,
            this.clearcoatMap = null,
            this.clearcoatRoughness = 0,
            this.clearcoatRoughnessMap = null,
            this.clearcoatNormalScale = new Vector2(1, 1),
            this.clearcoatNormalMap = null,
            this.reflectivity = 0.5,
            Object.defineProperty(
                this,
                'ior',
                {
                    get: function () {
                        return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity)
                    },
                    set: function (e) {
                        this.reflectivity = clamp$1(2.5 * (e - 1) / (e + 1), 0, 1)
                    }
                }
            ),
            this.sheen = null,
            this.transmission = 0,
            this.transmissionMap = null,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.defines = {
                STANDARD: '',
                PHYSICAL: ''
            },
            this.clearcoat = e.clearcoat,
            this.clearcoatMap = e.clearcoatMap,
            this.clearcoatRoughness = e.clearcoatRoughness,
            this.clearcoatRoughnessMap = e.clearcoatRoughnessMap,
            this.clearcoatNormalMap = e.clearcoatNormalMap,
            this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
            this.reflectivity = e.reflectivity,
            e.sheen ? this.sheen = (this.sheen || new Color).copy(e.sheen) : this.sheen = null,
            this.transmission = e.transmission,
            this.transmissionMap = e.transmissionMap,
            this
    }
}
MeshPhysicalMaterial.prototype.isMeshPhysicalMaterial = !0;
class MeshPhongMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'MeshPhongMaterial',
            this.color = new Color(16777215),
            this.specular = new Color(1118481),
            this.shininess = 30,
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Color(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new Vector2(1, 1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = 0.98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = 'round',
            this.wireframeLinejoin = 'round',
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.flatShading = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.specular.copy(e.specular),
            this.shininess = e.shininess,
            this.map = e.map,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.emissive.copy(e.emissive),
            this.emissiveMap = e.emissiveMap,
            this.emissiveIntensity = e.emissiveIntensity,
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.specularMap = e.specularMap,
            this.alphaMap = e.alphaMap,
            this.envMap = e.envMap,
            this.combine = e.combine,
            this.reflectivity = e.reflectivity,
            this.refractionRatio = e.refractionRatio,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this.flatShading = e.flatShading,
            this
    }
}
MeshPhongMaterial.prototype.isMeshPhongMaterial = !0;
class MeshToonMaterial extends Material {
    constructor(e) {
        super (),
            this.defines = {
                TOON: ''
            },
            this.type = 'MeshToonMaterial',
            this.color = new Color(16777215),
            this.map = null,
            this.gradientMap = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Color(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new Vector2(1, 1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = 'round',
            this.wireframeLinejoin = 'round',
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.gradientMap = e.gradientMap,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.emissive.copy(e.emissive),
            this.emissiveMap = e.emissiveMap,
            this.emissiveIntensity = e.emissiveIntensity,
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.alphaMap = e.alphaMap,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this
    }
}
MeshToonMaterial.prototype.isMeshToonMaterial = !0;
class MeshNormalMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'MeshNormalMaterial',
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new Vector2(1, 1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.flatShading = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this.flatShading = e.flatShading,
            this
    }
}
MeshNormalMaterial.prototype.isMeshNormalMaterial = !0;
class MeshLambertMaterial extends Material {
    constructor(e) {
        super (),
            this.type = 'MeshLambertMaterial',
            this.color = new Color(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new Color(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = 0.98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = 'round',
            this.wireframeLinejoin = 'round',
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.emissive.copy(e.emissive),
            this.emissiveMap = e.emissiveMap,
            this.emissiveIntensity = e.emissiveIntensity,
            this.specularMap = e.specularMap,
            this.alphaMap = e.alphaMap,
            this.envMap = e.envMap,
            this.combine = e.combine,
            this.reflectivity = e.reflectivity,
            this.refractionRatio = e.refractionRatio,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this
    }
}
MeshLambertMaterial.prototype.isMeshLambertMaterial = !0;
class MeshMatcapMaterial extends Material {
    constructor(e) {
        super (),
            this.defines = {
                MATCAP: ''
            },
            this.type = 'MeshMatcapMaterial',
            this.color = new Color(16777215),
            this.matcap = null,
            this.map = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new Vector2(1, 1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.flatShading = !1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.defines = {
                MATCAP: ''
            },
            this.color.copy(e.color),
            this.matcap = e.matcap,
            this.map = e.map,
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.alphaMap = e.alphaMap,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this.flatShading = e.flatShading,
            this
    }
}
MeshMatcapMaterial.prototype.isMeshMatcapMaterial = !0;
class LineDashedMaterial extends LineBasicMaterial {
    constructor(e) {
        super (),
            this.type = 'LineDashedMaterial',
            this.scale = 1,
            this.dashSize = 3,
            this.gapSize = 1,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.scale = e.scale,
            this.dashSize = e.dashSize,
            this.gapSize = e.gapSize,
            this
    }
}
LineDashedMaterial.prototype.isLineDashedMaterial = !0;
const AnimationUtils = {
    arraySlice: function (e, t, n) {
        return AnimationUtils.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n)
    },
    convertArray: function (e, t, n) {
        return !e ||
        !n &&
        e.constructor === t ? e : 'number' == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
    },
    isTypedArray: function (e) {
        return ArrayBuffer.isView(e) &&
            !(e instanceof DataView)
    },
    getKeyframeOrder: function (e) {
        const t = e.length,
            n = new Array(t);
        for (let e = 0; e !== t; ++e) n[e] = e;
        return n.sort((function (t, n) {
            return e[t] - e[n]
        })),
            n
    },
    sortedArray: function (e, t, n) {
        const r = e.length,
            i = new e.constructor(r);
        for (let a = 0, s = 0; s !== r; ++a) {
            const r = n[a] * t;
            for (let n = 0; n !== t; ++n) i[s++] = e[r + n]
        }
        return i
    },
    flattenJSON: function (e, t, n, r) {
        let i = 1,
            a = e[0];
        for (; void 0 !== a && void 0 === a[r]; ) a = e[i++];
        if (void 0 === a) return;
        let s = a[r];
        if (void 0 !== s) if (Array.isArray(s)) do {
            s = a[r],
            void 0 !== s &&
            (t.push(a.time), n.push.apply(n, s)),
                a = e[i++]
        } while (void 0 !== a);
        else if (void 0 !== s.toArray) do {
            s = a[r],
            void 0 !== s &&
            (t.push(a.time), s.toArray(n, n.length)),
                a = e[i++]
        } while (void 0 !== a);
        else do {
                s = a[r],
                void 0 !== s &&
                (t.push(a.time), n.push(s)),
                    a = e[i++]
            } while (void 0 !== a)
    },
    subclip: function (e, t, n, r, i = 30) {
        const a = e.clone();
        a.name = t;
        const s = [];
        for (let e = 0; e < a.tracks.length; ++e) {
            const t = a.tracks[e],
                o = t.getValueSize(),
                l = [],
                c = [];
            for (let e = 0; e < t.times.length; ++e) {
                const a = t.times[e] * i;
                if (!(a < n || a >= r)) {
                    l.push(t.times[e]);
                    for (let n = 0; n < o; ++n) c.push(t.values[e * o + n])
                }
            }
            0 !== l.length &&
            (
                t.times = AnimationUtils.convertArray(l, t.times.constructor),
                    t.values = AnimationUtils.convertArray(c, t.values.constructor),
                    s.push(t)
            )
        }
        a.tracks = s;
        let o = 1 / 0;
        for (let e = 0; e < a.tracks.length; ++e) o > a.tracks[e].times[0] &&
        (o = a.tracks[e].times[0]);
        for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift( - 1 * o);
        return a.resetDuration(),
            a
    },
    makeClipAdditive: function (e, t = 0, n = e, r = 30) {
        r <= 0 &&
        (r = 30);
        const i = n.tracks.length,
            a = t / r;
        for (let t = 0; t < i; ++t) {
            const r = n.tracks[t],
                i = r.ValueTypeName;
            if ('bool' === i || 'string' === i) continue;
            const s = e.tracks.find((function (e) {
                return e.name === r.name &&
                    e.ValueTypeName === i
            }));
            if (void 0 === s) continue;
            let o = 0;
            const l = r.getValueSize();
            r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
            (o = l / 3);
            let c = 0;
            const h = s.getValueSize();
            s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
            (c = h / 3);
            const u = r.times.length - 1;
            let d;
            if (a <= r.times[0]) {
                const e = o,
                    t = l - o;
                d = AnimationUtils.arraySlice(r.values, e, t)
            } else if (a >= r.times[u]) {
                const e = u * l + o,
                    t = e + l - o;
                d = AnimationUtils.arraySlice(r.values, e, t)
            } else {
                const e = r.createInterpolant(),
                    t = o,
                    n = l - o;
                e.evaluate(a),
                    d = AnimationUtils.arraySlice(e.resultBuffer, t, n)
            }
            if ('quaternion' === i) {
                (new Quaternion).fromArray(d).normalize().conjugate().toArray(d)
            }
            const p = s.times.length;
            for (let e = 0; e < p; ++e) {
                const t = e * h + c;
                if ('quaternion' === i) Quaternion.multiplyQuaternionsFlat(s.values, t, d, 0, s.values, t);
                else {
                    const e = h - 2 * c;
                    for (let n = 0; n < e; ++n) s.values[t + n] -= d[n]
                }
            }
        }
        return e.blendMode = 2501,
            e
    }
};
class Interpolant {
    constructor(e, t, n, r) {
        this.parameterPositions = e,
            this._cachedIndex = 0,
            this.resultBuffer = void 0 !== r ? r : new t.constructor(n),
            this.sampleValues = t,
            this.valueSize = n,
            this.settings = null,
            this.DefaultSettings_ = {}
    }
    evaluate(e) {
        const t = this.parameterPositions;
        let n = this._cachedIndex,
            r = t[n],
            i = t[n - 1];
        e: {
            t: {
                let a;
                n: {
                    r: if (!(e < r)) {
                        for (let a = n + 2; ; ) {
                            if (void 0 === r) {
                                if (e < i) break r;
                                return n = t.length,
                                    this._cachedIndex = n,
                                    this.afterEnd_(n - 1, e, i)
                            }
                            if (n === a) break;
                            if (i = r, r = t[++n], e < r) break t
                        }
                        a = t.length;
                        break n
                    }
                    if (e >= i) break e;
                    {
                        const s = t[1];
                        e < s &&
                        (n = 2, i = s);
                        for (let a = n - 2; ; ) {
                            if (void 0 === i) return this._cachedIndex = 0,
                                this.beforeStart_(0, e, r);
                            if (n === a) break;
                            if (r = i, i = t[--n - 1], e >= i) break t
                        }
                        a = n,
                            n = 0
                    }
                }
                for (; n < a; ) {
                    const r = n + a >>> 1;
                    e < t[r] ? a = r : n = r + 1
                }
                if (r = t[n], i = t[n - 1], void 0 === i) return this._cachedIndex = 0,
                    this.beforeStart_(0, e, r);
                if (void 0 === r) return n = t.length,
                    this._cachedIndex = n,
                    this.afterEnd_(n - 1, i, e)
            }
            this._cachedIndex = n,
                this.intervalChanged_(n, i, r)
        }
        return this.interpolate_(n, i, e, r)
    }
    getSettings_() {
        return this.settings ||
            this.DefaultSettings_
    }
    copySampleValue_(e) {
        const t = this.resultBuffer,
            n = this.sampleValues,
            r = this.valueSize,
            i = e * r;
        for (let e = 0; e !== r; ++e) t[e] = n[i + e];
        return t
    }
    interpolate_() {
        throw new Error('call to abstract method')
    }
    intervalChanged_() {
    }
}
Interpolant.prototype.beforeStart_ = Interpolant.prototype.copySampleValue_,
    Interpolant.prototype.afterEnd_ = Interpolant.prototype.copySampleValue_;
class CubicInterpolant extends Interpolant {
    constructor(e, t, n, r) {
        super (e, t, n, r),
            this._weightPrev = - 0,
            this._offsetPrev = - 0,
            this._weightNext = - 0,
            this._offsetNext = - 0,
            this.DefaultSettings_ = {
                endingStart: 2400,
                endingEnd: 2400
            }
    }
    intervalChanged_(e, t, n) {
        const r = this.parameterPositions;
        let i = e - 2,
            a = e + 1,
            s = r[i],
            o = r[a];
        if (void 0 === s) switch (this.getSettings_().endingStart) {
            case 2401:
                i = e,
                    s = 2 * t - n;
                break;
            case 2402:
                i = r.length - 2,
                    s = t + r[i] - r[i + 1];
                break;
            default:
                i = e,
                    s = n
        }
        if (void 0 === o) switch (this.getSettings_().endingEnd) {
            case 2401:
                a = e,
                    o = 2 * n - t;
                break;
            case 2402:
                a = 1,
                    o = n + r[1] - r[0];
                break;
            default:
                a = e - 1,
                    o = t
        }
        const l = 0.5 * (n - t),
            c = this.valueSize;
        this._weightPrev = l / (t - s),
            this._weightNext = l / (o - n),
            this._offsetPrev = i * c,
            this._offsetNext = a * c
    }
    interpolate_(e, t, n, r) {
        const i = this.resultBuffer,
            a = this.sampleValues,
            s = this.valueSize,
            o = e * s,
            l = o - s,
            c = this._offsetPrev,
            h = this._offsetNext,
            u = this._weightPrev,
            d = this._weightNext,
            p = (n - t) / (r - t),
            m = p * p,
            f = m * p,
            g = - u * f + 2 * u * m - u * p,
            v = (1 + u) * f + ( - 1.5 - 2 * u) * m + ( - 0.5 + u) * p + 1,
            _ = ( - 1 - d) * f + (1.5 + d) * m + 0.5 * p,
            x = d * f - d * m;
        for (let e = 0; e !== s; ++e) i[e] = g * a[c + e] + v * a[l + e] + _ * a[o + e] + x * a[h + e];
        return i
    }
}
class LinearInterpolant extends Interpolant {
    constructor(e, t, n, r) {
        super (e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        const i = this.resultBuffer,
            a = this.sampleValues,
            s = this.valueSize,
            o = e * s,
            l = o - s,
            c = (n - t) / (r - t),
            h = 1 - c;
        for (let e = 0; e !== s; ++e) i[e] = a[l + e] * h + a[o + e] * c;
        return i
    }
}
class DiscreteInterpolant extends Interpolant {
    constructor(e, t, n, r) {
        super (e, t, n, r)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
class KeyframeTrack {
    constructor(e, t, n, r) {
        if (void 0 === e) throw new Error('THREE.KeyframeTrack: track name is undefined');
        if (void 0 === t || 0 === t.length) throw new Error('THREE.KeyframeTrack: no keyframes in track named ' + e);
        this.name = e,
            this.times = AnimationUtils.convertArray(t, this.TimeBufferType),
            this.values = AnimationUtils.convertArray(n, this.ValueBufferType),
            this.setInterpolation(r || this.DefaultInterpolation)
    }
    static toJSON(e) {
        const t = e.constructor;
        let n;
        if (t.toJSON !== this.toJSON) n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: AnimationUtils.convertArray(e.times, Array),
                values: AnimationUtils.convertArray(e.values, Array)
            };
            const t = e.getInterpolation();
            t !== e.DefaultInterpolation &&
            (n.interpolation = t)
        }
        return n.type = e.ValueTypeName,
            n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new LinearInterpolant(this.times, this.values, this.getValueSize(), e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new CubicInterpolant(this.times, this.values, this.getValueSize(), e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
            case 2300:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case 2301:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case 2302:
                t = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === t) {
            const t = 'unsupported interpolation for ' + this.ValueTypeName + ' keyframe track named ' + this.name;
            if (void 0 === this.createInterpolant) {
                if (e === this.DefaultInterpolation) throw new Error(t);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn('THREE.KeyframeTrack:', t),
                this
        }
        return this.createInterpolant = t,
            this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return 2300;
            case this.InterpolantFactoryMethodLinear:
                return 2301;
            case this.InterpolantFactoryMethodSmooth:
                return 2302
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (0 !== e) {
            const t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n) t[n] += e
        }
        return this
    }
    scale(e) {
        if (1 !== e) {
            const t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e
        }
        return this
    }
    trim(e, t) {
        const n = this.times,
            r = n.length;
        let i = 0,
            a = r - 1;
        for (; i !== r && n[i] < e; ) ++i;
        for (; - 1 !== a && n[a] > t; ) --a;
        if (++a, 0 !== i || a !== r) {
            i >= a &&
            (a = Math.max(a, 1), i = a - 1);
            const e = this.getValueSize();
            this.times = AnimationUtils.arraySlice(n, i, a),
                this.values = AnimationUtils.arraySlice(this.values, i * e, a * e)
        }
        return this
    }
    validate() {
        let e = !0;
        const t = this.getValueSize();
        t - Math.floor(t) != 0 &&
        (
            console.error('THREE.KeyframeTrack: Invalid value size in track.', this),
                e = !1
        );
        const n = this.times,
            r = this.values,
            i = n.length;
        0 === i &&
        (
            console.error('THREE.KeyframeTrack: Track is empty.', this),
                e = !1
        );
        let a = null;
        for (let t = 0; t !== i; t++) {
            const r = n[t];
            if ('number' == typeof r && isNaN(r)) {
                console.error('THREE.KeyframeTrack: Time is not a valid number.', this, t, r),
                    e = !1;
                break
            }
            if (null !== a && a > r) {
                console.error('THREE.KeyframeTrack: Out of order keys.', this, t, r, a),
                    e = !1;
                break
            }
            a = r
        }
        if (void 0 !== r && AnimationUtils.isTypedArray(r)) for (let t = 0, n = r.length; t !== n; ++t) {
            const n = r[t];
            if (isNaN(n)) {
                console.error('THREE.KeyframeTrack: Value is not a valid number.', this, t, n),
                    e = !1;
                break
            }
        }
        return e
    }
    optimize() {
        const e = AnimationUtils.arraySlice(this.times),
            t = AnimationUtils.arraySlice(this.values),
            n = this.getValueSize(),
            r = 2302 === this.getInterpolation(),
            i = e.length - 1;
        let a = 1;
        for (let s = 1; s < i; ++s) {
            let i = !1;
            const o = e[s];
            if (o !== e[s + 1] && (1 !== s || o !== e[0])) if (r) i = !0;
            else {
                const e = s * n,
                    r = e - n,
                    a = e + n;
                for (let s = 0; s !== n; ++s) {
                    const n = t[e + s];
                    if (n !== t[r + s] || n !== t[a + s]) {
                        i = !0;
                        break
                    }
                }
            }
            if (i) {
                if (s !== a) {
                    e[a] = e[s];
                    const r = s * n,
                        i = a * n;
                    for (let e = 0; e !== n; ++e) t[i + e] = t[r + e]
                }
                ++a
            }
        }
        if (i > 0) {
            e[a] = e[i];
            for (let e = i * n, r = a * n, s = 0; s !== n; ++s) t[r + s] = t[e + s];
            ++a
        }
        return a !== e.length ? (
            this.times = AnimationUtils.arraySlice(e, 0, a),
                this.values = AnimationUtils.arraySlice(t, 0, a * n)
        ) : (this.times = e, this.values = t),
            this
    }
    clone() {
        const e = AnimationUtils.arraySlice(this.times, 0),
            t = AnimationUtils.arraySlice(this.values, 0),
            n = new (0, this.constructor) (this.name, e, t);
        return n.createInterpolant = this.createInterpolant,
            n
    }
}
KeyframeTrack.prototype.TimeBufferType = Float32Array,
    KeyframeTrack.prototype.ValueBufferType = Float32Array,
    KeyframeTrack.prototype.DefaultInterpolation = 2301;
class BooleanKeyframeTrack extends KeyframeTrack {
}
BooleanKeyframeTrack.prototype.ValueTypeName = 'bool',
    BooleanKeyframeTrack.prototype.ValueBufferType = Array,
    BooleanKeyframeTrack.prototype.DefaultInterpolation = 2300,
    BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0,
    BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class ColorKeyframeTrack extends KeyframeTrack {
}
ColorKeyframeTrack.prototype.ValueTypeName = 'color';
class NumberKeyframeTrack extends KeyframeTrack {
}
NumberKeyframeTrack.prototype.ValueTypeName = 'number';
class QuaternionLinearInterpolant extends Interpolant {
    constructor(e, t, n, r) {
        super (e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        const i = this.resultBuffer,
            a = this.sampleValues,
            s = this.valueSize,
            o = (n - t) / (r - t);
        let l = e * s;
        for (let e = l + s; l !== e; l += 4) Quaternion.slerpFlat(i, 0, a, l - s, a, l, o);
        return i
    }
}
class QuaternionKeyframeTrack extends KeyframeTrack {
    InterpolantFactoryMethodLinear(e) {
        return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), e)
    }
}
QuaternionKeyframeTrack.prototype.ValueTypeName = 'quaternion',
    QuaternionKeyframeTrack.prototype.DefaultInterpolation = 2301,
    QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class StringKeyframeTrack extends KeyframeTrack {
}
StringKeyframeTrack.prototype.ValueTypeName = 'string',
    StringKeyframeTrack.prototype.ValueBufferType = Array,
    StringKeyframeTrack.prototype.DefaultInterpolation = 2300,
    StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0,
    StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class VectorKeyframeTrack extends KeyframeTrack {
}
VectorKeyframeTrack.prototype.ValueTypeName = 'vector';
class AnimationClip {
    constructor(e, t = - 1, n, r = 2500) {
        this.name = e,
            this.tracks = n,
            this.duration = t,
            this.blendMode = r,
            this.uuid = generateUUID(),
        this.duration < 0 &&
        this.resetDuration()
    }
    static parse(e) {
        const t = [],
            n = e.tracks,
            r = 1 / (e.fps || 1);
        for (let e = 0, i = n.length; e !== i; ++e) t.push(parseKeyframeTrack(n[e]).scale(r));
        const i = new this(e.name, e.duration, t, e.blendMode);
        return i.uuid = e.uuid,
            i
    }
    static toJSON(e) {
        const t = [],
            n = e.tracks,
            r = {
                name: e.name,
                duration: e.duration,
                tracks: t,
                uuid: e.uuid,
                blendMode: e.blendMode
            };
        for (let e = 0, r = n.length; e !== r; ++e) t.push(KeyframeTrack.toJSON(n[e]));
        return r
    }
    static CreateFromMorphTargetSequence(e, t, n, r) {
        const i = t.length,
            a = [];
        for (let e = 0; e < i; e++) {
            let s = [],
                o = [];
            s.push((e + i - 1) % i, e, (e + 1) % i),
                o.push(0, 1, 0);
            const l = AnimationUtils.getKeyframeOrder(s);
            s = AnimationUtils.sortedArray(s, 1, l),
                o = AnimationUtils.sortedArray(o, 1, l),
            r ||
            0 !== s[0] ||
            (s.push(i), o.push(o[0])),
                a.push(
                    new NumberKeyframeTrack('.morphTargetInfluences[' + t[e].name + ']', s, o).scale(1 / n)
                )
        }
        return new this(e, - 1, a)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            const t = e;
            n = t.geometry &&
                t.geometry.animations ||
                t.animations
        }
        for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        const r = {},
            i = /^([\w-]*?)([\d]+)$/;
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t],
                a = n.name.match(i);
            if (a && a.length > 1) {
                const e = a[1];
                let t = r[e];
                t ||
                (r[e] = t = []),
                    t.push(n)
            }
        }
        const a = [];
        for (const e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n));
        return a
    }
    static parseAnimation(e, t) {
        if (!e) return console.error('THREE.AnimationClip: No animation in JSONLoader data.'),
            null;
        const n = function (e, t, n, r, i) {
                if (0 !== n.length) {
                    const a = [],
                        s = [];
                    AnimationUtils.flattenJSON(n, a, s, r),
                    0 !== a.length &&
                    i.push(new e(t, a, s))
                }
            },
            r = [],
            i = e.name ||
                'default',
            a = e.fps ||
                30,
            s = e.blendMode;
        let o = e.length ||
            - 1;
        const l = e.hierarchy ||
            [];
        for (let e = 0; e < l.length; e++) {
            const i = l[e].keys;
            if (i && 0 !== i.length) if (i[0].morphTargets) {
                const e = {};
                let t;
                for (t = 0; t < i.length; t++) if (i[t].morphTargets) for (let n = 0; n < i[t].morphTargets.length; n++) e[i[t].morphTargets[n]] = - 1;
                for (const n in e) {
                    const e = [],
                        a = [];
                    for (let r = 0; r !== i[t].morphTargets.length; ++r) {
                        const r = i[t];
                        e.push(r.time),
                            a.push(r.morphTarget === n ? 1 : 0)
                    }
                    r.push(new NumberKeyframeTrack('.morphTargetInfluence[' + n + ']', e, a))
                }
                o = e.length * (a || 1)
            } else {
                const a = '.bones[' + t[e].name + ']';
                n(VectorKeyframeTrack, a + '.position', i, 'pos', r),
                    n(QuaternionKeyframeTrack, a + '.quaternion', i, 'rot', r),
                    n(VectorKeyframeTrack, a + '.scale', i, 'scl', r)
            }
        }
        if (0 === r.length) return null;
        return new this(i, o, r, s)
    }
    resetDuration() {
        let e = 0;
        for (let t = 0, n = this.tracks.length; t !== n; ++t) {
            const n = this.tracks[t];
            e = Math.max(e, n.times[n.times.length - 1])
        }
        return this.duration = e,
            this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++) e = e &&
            this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
        return this
    }
    clone() {
        const e = [];
        for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
        return new this.constructor(this.name, this.duration, e, this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}
function getTrackTypeForValueTypeName(e) {
    switch (e.toLowerCase()) {
        case 'scalar':
        case 'double':
        case 'float':
        case 'number':
        case 'integer':
            return NumberKeyframeTrack;
        case 'vector':
        case 'vector2':
        case 'vector3':
        case 'vector4':
            return VectorKeyframeTrack;
        case 'color':
            return ColorKeyframeTrack;
        case 'quaternion':
            return QuaternionKeyframeTrack;
        case 'bool':
        case 'boolean':
            return BooleanKeyframeTrack;
        case 'string':
            return StringKeyframeTrack
    }
    throw new Error('THREE.KeyframeTrack: Unsupported typeName: ' + e)
}
function parseKeyframeTrack(e) {
    if (void 0 === e.type) throw new Error('THREE.KeyframeTrack: track type undefined, can not parse');
    const t = getTrackTypeForValueTypeName(e.type);
    if (void 0 === e.times) {
        const t = [],
            n = [];
        AnimationUtils.flattenJSON(e.keys, t, n, 'value'),
            e.times = t,
            e.values = n
    }
    return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
}
const Cache = {
    enabled: !1,
    files: {
    },
    add: function (e, t) {
        !1 !== this.enabled &&
        (this.files[e] = t)
    },
    get: function (e) {
        if (!1 !== this.enabled) return this.files[e]
    },
    remove: function (e) {
        delete this.files[e]
    },
    clear: function () {
        this.files = {}
    }
};
class LoadingManager {
    constructor(e, t, n) {
        const r = this;
        let i,
            a = !1,
            s = 0,
            o = 0;
        const l = [];
        this.onStart = void 0,
            this.onLoad = e,
            this.onProgress = t,
            this.onError = n,
            this.itemStart = function (e) {
                o++,
                !1 === a &&
                void 0 !== r.onStart &&
                r.onStart(e, s, o),
                    a = !0
            },
            this.itemEnd = function (e) {
                s++,
                void 0 !== r.onProgress &&
                r.onProgress(e, s, o),
                s === o &&
                (a = !1, void 0 !== r.onLoad && r.onLoad())
            },
            this.itemError = function (e) {
                void 0 !== r.onError &&
                r.onError(e)
            },
            this.resolveURL = function (e) {
                return i ? i(e) : e
            },
            this.setURLModifier = function (e) {
                return i = e,
                    this
            },
            this.addHandler = function (e, t) {
                return l.push(e, t),
                    this
            },
            this.removeHandler = function (e) {
                const t = l.indexOf(e);
                return - 1 !== t &&
                l.splice(t, 2),
                    this
            },
            this.getHandler = function (e) {
                for (let t = 0, n = l.length; t < n; t += 2) {
                    const n = l[t],
                        r = l[t + 1];
                    if (n.global && (n.lastIndex = 0), n.test(e)) return r
                }
                return null
            }
    }
}
const DefaultLoadingManager = new LoadingManager;
class Loader {
    constructor(e) {
        this.manager = void 0 !== e ? e : DefaultLoadingManager,
            this.crossOrigin = 'anonymous',
            this.withCredentials = !1,
            this.path = '',
            this.resourcePath = '',
            this.requestHeader = {}
    }
    load() {
    }
    loadAsync(e, t) {
        const n = this;
        return new Promise((function (r, i) {
            n.load(e, r, t, i)
        }))
    }
    parse() {
    }
    setCrossOrigin(e) {
        return this.crossOrigin = e,
            this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
            this
    }
    setPath(e) {
        return this.path = e,
            this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
            this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
            this
    }
}
const loading = {};
class FileLoader extends Loader {
    constructor(e) {
        super (e)
    }
    load(e, t, n, r) {
        void 0 === e &&
        (e = ''),
        void 0 !== this.path &&
        (e = this.path + e),
            e = this.manager.resolveURL(e);
        const i = this,
            a = Cache.get(e);
        if (void 0 !== a) return i.manager.itemStart(e),
            setTimeout((function () {
                t &&
                t(a),
                    i.manager.itemEnd(e)
            }), 0),
            a;
        if (void 0 !== loading[e]) return void loading[e].push({
            onLoad: t,
            onProgress: n,
            onError: r
        });
        const s = e.match(/^data:(.*?)(;base64)?,(.*)$/);
        let o;
        if (s) {
            const n = s[1],
                a = !!s[2];
            let o = s[3];
            o = decodeURIComponent(o),
            a &&
            (o = atob(o));
            try {
                let r;
                const a = (this.responseType || '').toLowerCase();
                switch (a) {
                    case 'arraybuffer':
                    case 'blob':
                        const e = new Uint8Array(o.length);
                        for (let t = 0; t < o.length; t++) e[t] = o.charCodeAt(t);
                        r = 'blob' === a ? new Blob([e.buffer], {
                            type: n
                        }) : e.buffer;
                        break;
                    case 'document':
                        const t = new DOMParser;
                        r = t.parseFromString(o, n);
                        break;
                    case 'json':
                        r = JSON.parse(o);
                        break;
                    default:
                        r = o
                }
                setTimeout((function () {
                    t &&
                    t(r),
                        i.manager.itemEnd(e)
                }), 0)
            } catch (t) {
                setTimeout(
                    (
                        function () {
                            r &&
                            r(t),
                                i.manager.itemError(e),
                                i.manager.itemEnd(e)
                        }
                    ),
                    0
                )
            }
        } else {
            loading[e] = [],
                loading[e].push({
                    onLoad: t,
                    onProgress: n,
                    onError: r
                }),
                o = new XMLHttpRequest,
                o.open('GET', e, !0),
                o.addEventListener(
                    'load',
                    (
                        function (t) {
                            const n = this.response,
                                r = loading[e];
                            if (delete loading[e], 200 === this.status || 0 === this.status) {
                                0 === this.status &&
                                console.warn('THREE.FileLoader: HTTP Status 0 received.'),
                                    Cache.add(e, n);
                                for (let e = 0, t = r.length; e < t; e++) {
                                    const t = r[e];
                                    t.onLoad &&
                                    t.onLoad(n)
                                }
                                i.manager.itemEnd(e)
                            } else {
                                for (let e = 0, n = r.length; e < n; e++) {
                                    const n = r[e];
                                    n.onError &&
                                    n.onError(t)
                                }
                                i.manager.itemError(e),
                                    i.manager.itemEnd(e)
                            }
                        }
                    ),
                    !1
                ),
                o.addEventListener(
                    'progress',
                    (
                        function (t) {
                            const n = loading[e];
                            for (let e = 0, r = n.length; e < r; e++) {
                                const r = n[e];
                                r.onProgress &&
                                r.onProgress(t)
                            }
                        }
                    ),
                    !1
                ),
                o.addEventListener(
                    'error',
                    (
                        function (t) {
                            const n = loading[e];
                            delete loading[e];
                            for (let e = 0, r = n.length; e < r; e++) {
                                const r = n[e];
                                r.onError &&
                                r.onError(t)
                            }
                            i.manager.itemError(e),
                                i.manager.itemEnd(e)
                        }
                    ),
                    !1
                ),
                o.addEventListener(
                    'abort',
                    (
                        function (t) {
                            const n = loading[e];
                            delete loading[e];
                            for (let e = 0, r = n.length; e < r; e++) {
                                const r = n[e];
                                r.onError &&
                                r.onError(t)
                            }
                            i.manager.itemError(e),
                                i.manager.itemEnd(e)
                        }
                    ),
                    !1
                ),
            void 0 !== this.responseType &&
            (o.responseType = this.responseType),
            void 0 !== this.withCredentials &&
            (o.withCredentials = this.withCredentials),
            o.overrideMimeType &&
            o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : 'text/plain');
            for (const e in this.requestHeader) o.setRequestHeader(e, this.requestHeader[e]);
            o.send(null)
        }
        return i.manager.itemStart(e),
            o
    }
    setResponseType(e) {
        return this.responseType = e,
            this
    }
    setMimeType(e) {
        return this.mimeType = e,
            this
    }
}
class ImageLoader extends Loader {
    constructor(e) {
        super (e)
    }
    load(e, t, n, r) {
        void 0 !== this.path &&
        (e = this.path + e),
            e = this.manager.resolveURL(e);
        const i = this,
            a = Cache.get(e);
        if (void 0 !== a) return i.manager.itemStart(e),
            setTimeout((function () {
                t &&
                t(a),
                    i.manager.itemEnd(e)
            }), 0),
            a;
        const s = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');
        function o() {
            s.removeEventListener('load', o, !1),
                s.removeEventListener('error', l, !1),
                Cache.add(e, this),
            t &&
            t(this),
                i.manager.itemEnd(e)
        }
        function l(t) {
            s.removeEventListener('load', o, !1),
                s.removeEventListener('error', l, !1),
            r &&
            r(t),
                i.manager.itemError(e),
                i.manager.itemEnd(e)
        }
        return s.addEventListener('load', o, !1),
            s.addEventListener('error', l, !1),
        'data:' !== e.substr(0, 5) &&
        void 0 !== this.crossOrigin &&
        (s.crossOrigin = this.crossOrigin),
            i.manager.itemStart(e),
            s.src = e,
            s
    }
}
class CubeTextureLoader extends Loader {
    constructor(e) {
        super (e)
    }
    load(e, t, n, r) {
        const i = new CubeTexture,
            a = new ImageLoader(this.manager);
        a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path);
        let s = 0;
        function o(n) {
            a.load(
                e[n],
                (
                    function (e) {
                        i.images[n] = e,
                            s++,
                        6 === s &&
                        (i.needsUpdate = !0, t && t(i))
                    }
                ),
                void 0,
                r
            )
        }
        for (let t = 0; t < e.length; ++t) o(t);
        return i
    }
}
class TextureLoader extends Loader {
    constructor(e) {
        super (e)
    }
    load(e, t, n, r) {
        const i = new Texture,
            a = new ImageLoader(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path),
            a.load(
                e,
                (
                    function (n) {
                        i.image = n;
                        const r = e.search(/\.jpe?g($|\?)/i) > 0 ||
                            0 === e.search(/^data\:image\/jpeg/);
                        i.format = r ? 1022 : 1023,
                            i.needsUpdate = !0,
                        void 0 !== t &&
                        t(i)
                    }
                ),
                n,
                r
            ),
            i
    }
}
class Curve {
    constructor() {
        this.type = 'Curve',
            this.arcLengthDivisions = 200
    }
    getPoint() {
        return console.warn('THREE.Curve: .getPoint() not implemented.'),
            null
    }
    getPointAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
    }
    getPoints(e = 5) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return t
    }
    getSpacedPoints(e = 5) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
        return t
    }
    getLength() {
        const e = this.getLengths();
        return e[e.length - 1]
    }
    getLengths(e = this.arcLengthDivisions) {
        if (
            this.cacheArcLengths &&
            this.cacheArcLengths.length === e + 1 &&
            !this.needsUpdate
        ) return this.cacheArcLengths;
        this.needsUpdate = !1;
        const t = [];
        let n,
            r = this.getPoint(0),
            i = 0;
        t.push(0);
        for (let a = 1; a <= e; a++) n = this.getPoint(a / e),
            i += n.distanceTo(r),
            t.push(i),
            r = n;
        return this.cacheArcLengths = t,
            t
    }
    updateArcLengths() {
        this.needsUpdate = !0,
            this.getLengths()
    }
    getUtoTmapping(e, t) {
        const n = this.getLengths();
        let r = 0;
        const i = n.length;
        let a;
        a = t ||
            e * n[i - 1];
        let s,
            o = 0,
            l = i - 1;
        for (; o <= l; ) if (r = Math.floor(o + (l - o) / 2), s = n[r] - a, s < 0) o = r + 1;
        else {
            if (!(s > 0)) {
                l = r;
                break
            }
            l = r - 1
        }
        if (r = l, n[r] === a) return r / (i - 1);
        const c = n[r];
        return (r + (a - c) / (n[r + 1] - c)) / (i - 1)
    }
    getTangent(e, t) {
        const n = 0.0001;
        let r = e - n,
            i = e + n;
        r < 0 &&
        (r = 0),
        i > 1 &&
        (i = 1);
        const a = this.getPoint(r),
            s = this.getPoint(i),
            o = t ||
                (a.isVector2 ? new Vector2 : new Vector3);
        return o.copy(s).sub(a).normalize(),
            o
    }
    getTangentAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getTangent(n, t)
    }
    computeFrenetFrames(e, t) {
        const n = new Vector3,
            r = [],
            i = [],
            a = [],
            s = new Vector3,
            o = new Matrix4;
        for (let t = 0; t <= e; t++) {
            const n = t / e;
            r[t] = this.getTangentAt(n, new Vector3),
                r[t].normalize()
        }
        i[0] = new Vector3,
            a[0] = new Vector3;
        let l = Number.MAX_VALUE;
        const c = Math.abs(r[0].x),
            h = Math.abs(r[0].y),
            u = Math.abs(r[0].z);
        c <= l &&
        (l = c, n.set(1, 0, 0)),
        h <= l &&
        (l = h, n.set(0, 1, 0)),
        u <= l &&
        n.set(0, 0, 1),
            s.crossVectors(r[0], n).normalize(),
            i[0].crossVectors(r[0], s),
            a[0].crossVectors(r[0], i[0]);
        for (let t = 1; t <= e; t++) {
            if (
                i[t] = i[t - 1].clone(),
                    a[t] = a[t - 1].clone(),
                    s.crossVectors(r[t - 1], r[t]),
                s.length() > Number.EPSILON
            ) {
                s.normalize();
                const e = Math.acos(clamp$1(r[t - 1].dot(r[t]), - 1, 1));
                i[t].applyMatrix4(o.makeRotationAxis(s, e))
            }
            a[t].crossVectors(r[t], i[t])
        }
        if (!0 === t) {
            let t = Math.acos(clamp$1(i[0].dot(i[e]), - 1, 1));
            t /= e,
            r[0].dot(s.crossVectors(i[0], i[e])) > 0 &&
            (t = - t);
            for (let n = 1; n <= e; n++) i[n].applyMatrix4(o.makeRotationAxis(r[n], t * n)),
                a[n].crossVectors(r[n], i[n])
        }
        return {
            tangents: r,
            normals: i,
            binormals: a
        }
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
            this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: 'Curve',
                generator: 'Curve.toJSON'
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions,
            e.type = this.type,
            e
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
            this
    }
}
class EllipseCurve extends Curve {
    constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = 2 * Math.PI, s = !1, o = 0) {
        super (),
            this.type = 'EllipseCurve',
            this.aX = e,
            this.aY = t,
            this.xRadius = n,
            this.yRadius = r,
            this.aStartAngle = i,
            this.aEndAngle = a,
            this.aClockwise = s,
            this.aRotation = o
    }
    getPoint(e, t) {
        const n = t ||
                new Vector2,
            r = 2 * Math.PI;
        let i = this.aEndAngle - this.aStartAngle;
        const a = Math.abs(i) < Number.EPSILON;
        for (; i < 0; ) i += r;
        for (; i > r; ) i -= r;
        i < Number.EPSILON &&
        (i = a ? 0 : r),
        !0 !== this.aClockwise ||
        a ||
        (i === r ? i = - r : i -= r);
        const s = this.aStartAngle + e * i;
        let o = this.aX + this.xRadius * Math.cos(s),
            l = this.aY + this.yRadius * Math.sin(s);
        if (0 !== this.aRotation) {
            const e = Math.cos(this.aRotation),
                t = Math.sin(this.aRotation),
                n = o - this.aX,
                r = l - this.aY;
            o = n * e - r * t + this.aX,
                l = n * t + r * e + this.aY
        }
        return n.set(o, l)
    }
    copy(e) {
        return super.copy(e),
            this.aX = e.aX,
            this.aY = e.aY,
            this.xRadius = e.xRadius,
            this.yRadius = e.yRadius,
            this.aStartAngle = e.aStartAngle,
            this.aEndAngle = e.aEndAngle,
            this.aClockwise = e.aClockwise,
            this.aRotation = e.aRotation,
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.aX = this.aX,
            e.aY = this.aY,
            e.xRadius = this.xRadius,
            e.yRadius = this.yRadius,
            e.aStartAngle = this.aStartAngle,
            e.aEndAngle = this.aEndAngle,
            e.aClockwise = this.aClockwise,
            e.aRotation = this.aRotation,
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.aX = e.aX,
            this.aY = e.aY,
            this.xRadius = e.xRadius,
            this.yRadius = e.yRadius,
            this.aStartAngle = e.aStartAngle,
            this.aEndAngle = e.aEndAngle,
            this.aClockwise = e.aClockwise,
            this.aRotation = e.aRotation,
            this
    }
}
EllipseCurve.prototype.isEllipseCurve = !0;
class ArcCurve extends EllipseCurve {
    constructor(e, t, n, r, i, a) {
        super (e, t, n, n, r, i, a),
            this.type = 'ArcCurve'
    }
}
function CubicPoly() {
    let e = 0,
        t = 0,
        n = 0,
        r = 0;
    function i(i, a, s, o) {
        e = i,
            t = s,
            n = - 3 * i + 3 * a - 2 * s - o,
            r = 2 * i - 2 * a + s + o
    }
    return {
        initCatmullRom: function (e, t, n, r, a) {
            i(t, n, a * (n - e), a * (r - t))
        },
        initNonuniformCatmullRom: function (e, t, n, r, a, s, o) {
            let l = (t - e) / a - (n - e) / (a + s) + (n - t) / s,
                c = (n - t) / s - (r - t) / (s + o) + (r - n) / o;
            l *= s,
                c *= s,
                i(t, n, l, c)
        },
        calc: function (i) {
            const a = i * i;
            return e + t * i + n * a + r * (a * i)
        }
    }
}
ArcCurve.prototype.isArcCurve = !0;
const tmp = new Vector3,
    px = new CubicPoly,
    py = new CubicPoly,
    pz = new CubicPoly;
class CatmullRomCurve3 extends Curve {
    constructor(e = [], t = !1, n = 'centripetal', r = 0.5) {
        super (),
            this.type = 'CatmullRomCurve3',
            this.points = e,
            this.closed = t,
            this.curveType = n,
            this.tension = r
    }
    getPoint(e, t = new Vector3) {
        const n = t,
            r = this.points,
            i = r.length,
            a = (i - (this.closed ? 0 : 1)) * e;
        let s,
            o,
            l = Math.floor(a),
            c = a - l;
        this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / i) + 1) * i : 0 === c &&
            l === i - 1 &&
            (l = i - 2, c = 1),
            this.closed ||
            l > 0 ? s = r[(l - 1) % i] : (tmp.subVectors(r[0], r[1]).add(r[0]), s = tmp);
        const h = r[l % i],
            u = r[(l + 1) % i];
        if (
            this.closed ||
            l + 2 < i ? o = r[(l + 2) % i] : (tmp.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), o = tmp),
            'centripetal' === this.curveType ||
            'chordal' === this.curveType
        ) {
            const e = 'chordal' === this.curveType ? 0.5 : 0.25;
            let t = Math.pow(s.distanceToSquared(h), e),
                n = Math.pow(h.distanceToSquared(u), e),
                r = Math.pow(u.distanceToSquared(o), e);
            n < 0.0001 &&
            (n = 1),
            t < 0.0001 &&
            (t = n),
            r < 0.0001 &&
            (r = n),
                px.initNonuniformCatmullRom(s.x, h.x, u.x, o.x, t, n, r),
                py.initNonuniformCatmullRom(s.y, h.y, u.y, o.y, t, n, r),
                pz.initNonuniformCatmullRom(s.z, h.z, u.z, o.z, t, n, r)
        } else 'catmullrom' === this.curveType &&
        (
            px.initCatmullRom(s.x, h.x, u.x, o.x, this.tension),
                py.initCatmullRom(s.y, h.y, u.y, o.y, this.tension),
                pz.initCatmullRom(s.z, h.z, u.z, o.z, this.tension)
        );
        return n.set(px.calc(c), py.calc(c), pz.calc(c)),
            n
    }
    copy(e) {
        super.copy(e),
            this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const n = e.points[t];
            this.points.push(n.clone())
        }
        return this.closed = e.closed,
            this.curveType = e.curveType,
            this.tension = e.tension,
            this
    }
    toJSON() {
        const e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            const n = this.points[t];
            e.points.push(n.toArray())
        }
        return e.closed = this.closed,
            e.curveType = this.curveType,
            e.tension = this.tension,
            e
    }
    fromJSON(e) {
        super.fromJSON(e),
            this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const n = e.points[t];
            this.points.push((new Vector3).fromArray(n))
        }
        return this.closed = e.closed,
            this.curveType = e.curveType,
            this.tension = e.tension,
            this
    }
}
function CatmullRom(e, t, n, r, i) {
    const a = 0.5 * (r - t),
        s = 0.5 * (i - n),
        o = e * e;
    return (2 * n - 2 * r + a + s) * (e * o) + ( - 3 * n + 3 * r - 2 * a - s) * o + a * e + n
}
function QuadraticBezierP0(e, t) {
    const n = 1 - e;
    return n * n * t
}
function QuadraticBezierP1(e, t) {
    return 2 * (1 - e) * e * t
}
function QuadraticBezierP2(e, t) {
    return e * e * t
}
function QuadraticBezier(e, t, n, r) {
    return QuadraticBezierP0(e, t) + QuadraticBezierP1(e, n) + QuadraticBezierP2(e, r)
}
function CubicBezierP0(e, t) {
    const n = 1 - e;
    return n * n * n * t
}
function CubicBezierP1(e, t) {
    const n = 1 - e;
    return 3 * n * n * e * t
}
function CubicBezierP2(e, t) {
    return 3 * (1 - e) * e * e * t
}
function CubicBezierP3(e, t) {
    return e * e * e * t
}
function CubicBezier(e, t, n, r, i) {
    return CubicBezierP0(e, t) + CubicBezierP1(e, n) + CubicBezierP2(e, r) + CubicBezierP3(e, i)
}
CatmullRomCurve3.prototype.isCatmullRomCurve3 = !0;
class CubicBezierCurve extends Curve {
    constructor(e = new Vector2, t = new Vector2, n = new Vector2, r = new Vector2) {
        super (),
            this.type = 'CubicBezierCurve',
            this.v0 = e,
            this.v1 = t,
            this.v2 = n,
            this.v3 = r
    }
    getPoint(e, t = new Vector2) {
        const n = t,
            r = this.v0,
            i = this.v1,
            a = this.v2,
            s = this.v3;
        return n.set(
            CubicBezier(e, r.x, i.x, a.x, s.x),
            CubicBezier(e, r.y, i.y, a.y, s.y)
        ),
            n
    }
    copy(e) {
        return super.copy(e),
            this.v0.copy(e.v0),
            this.v1.copy(e.v1),
            this.v2.copy(e.v2),
            this.v3.copy(e.v3),
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(),
            e.v1 = this.v1.toArray(),
            e.v2 = this.v2.toArray(),
            e.v3 = this.v3.toArray(),
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.v0.fromArray(e.v0),
            this.v1.fromArray(e.v1),
            this.v2.fromArray(e.v2),
            this.v3.fromArray(e.v3),
            this
    }
}
CubicBezierCurve.prototype.isCubicBezierCurve = !0;
class CubicBezierCurve3 extends Curve {
    constructor(e = new Vector3, t = new Vector3, n = new Vector3, r = new Vector3) {
        super (),
            this.type = 'CubicBezierCurve3',
            this.v0 = e,
            this.v1 = t,
            this.v2 = n,
            this.v3 = r
    }
    getPoint(e, t = new Vector3) {
        const n = t,
            r = this.v0,
            i = this.v1,
            a = this.v2,
            s = this.v3;
        return n.set(
            CubicBezier(e, r.x, i.x, a.x, s.x),
            CubicBezier(e, r.y, i.y, a.y, s.y),
            CubicBezier(e, r.z, i.z, a.z, s.z)
        ),
            n
    }
    copy(e) {
        return super.copy(e),
            this.v0.copy(e.v0),
            this.v1.copy(e.v1),
            this.v2.copy(e.v2),
            this.v3.copy(e.v3),
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(),
            e.v1 = this.v1.toArray(),
            e.v2 = this.v2.toArray(),
            e.v3 = this.v3.toArray(),
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.v0.fromArray(e.v0),
            this.v1.fromArray(e.v1),
            this.v2.fromArray(e.v2),
            this.v3.fromArray(e.v3),
            this
    }
}
CubicBezierCurve3.prototype.isCubicBezierCurve3 = !0;
class LineCurve extends Curve {
    constructor(e = new Vector2, t = new Vector2) {
        super (),
            this.type = 'LineCurve',
            this.v1 = e,
            this.v2 = t
    }
    getPoint(e, t = new Vector2) {
        const n = t;
        return 1 === e ? n.copy(this.v2) : (
            n.copy(this.v2).sub(this.v1),
                n.multiplyScalar(e).add(this.v1)
        ),
            n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    getTangent(e, t) {
        const n = t ||
            new Vector2;
        return n.copy(this.v2).sub(this.v1).normalize(),
            n
    }
    copy(e) {
        return super.copy(e),
            this.v1.copy(e.v1),
            this.v2.copy(e.v2),
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v1 = this.v1.toArray(),
            e.v2 = this.v2.toArray(),
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.v1.fromArray(e.v1),
            this.v2.fromArray(e.v2),
            this
    }
}
LineCurve.prototype.isLineCurve = !0;
class LineCurve3 extends Curve {
    constructor(e = new Vector3, t = new Vector3) {
        super (),
            this.type = 'LineCurve3',
            this.isLineCurve3 = !0,
            this.v1 = e,
            this.v2 = t
    }
    getPoint(e, t = new Vector3) {
        const n = t;
        return 1 === e ? n.copy(this.v2) : (
            n.copy(this.v2).sub(this.v1),
                n.multiplyScalar(e).add(this.v1)
        ),
            n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    copy(e) {
        return super.copy(e),
            this.v1.copy(e.v1),
            this.v2.copy(e.v2),
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v1 = this.v1.toArray(),
            e.v2 = this.v2.toArray(),
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.v1.fromArray(e.v1),
            this.v2.fromArray(e.v2),
            this
    }
}
class QuadraticBezierCurve extends Curve {
    constructor(e = new Vector2, t = new Vector2, n = new Vector2) {
        super (),
            this.type = 'QuadraticBezierCurve',
            this.v0 = e,
            this.v1 = t,
            this.v2 = n
    }
    getPoint(e, t = new Vector2) {
        const n = t,
            r = this.v0,
            i = this.v1,
            a = this.v2;
        return n.set(
            QuadraticBezier(e, r.x, i.x, a.x),
            QuadraticBezier(e, r.y, i.y, a.y)
        ),
            n
    }
    copy(e) {
        return super.copy(e),
            this.v0.copy(e.v0),
            this.v1.copy(e.v1),
            this.v2.copy(e.v2),
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(),
            e.v1 = this.v1.toArray(),
            e.v2 = this.v2.toArray(),
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.v0.fromArray(e.v0),
            this.v1.fromArray(e.v1),
            this.v2.fromArray(e.v2),
            this
    }
}
QuadraticBezierCurve.prototype.isQuadraticBezierCurve = !0;
class QuadraticBezierCurve3 extends Curve {
    constructor(e = new Vector3, t = new Vector3, n = new Vector3) {
        super (),
            this.type = 'QuadraticBezierCurve3',
            this.v0 = e,
            this.v1 = t,
            this.v2 = n
    }
    getPoint(e, t = new Vector3) {
        const n = t,
            r = this.v0,
            i = this.v1,
            a = this.v2;
        return n.set(
            QuadraticBezier(e, r.x, i.x, a.x),
            QuadraticBezier(e, r.y, i.y, a.y),
            QuadraticBezier(e, r.z, i.z, a.z)
        ),
            n
    }
    copy(e) {
        return super.copy(e),
            this.v0.copy(e.v0),
            this.v1.copy(e.v1),
            this.v2.copy(e.v2),
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(),
            e.v1 = this.v1.toArray(),
            e.v2 = this.v2.toArray(),
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.v0.fromArray(e.v0),
            this.v1.fromArray(e.v1),
            this.v2.fromArray(e.v2),
            this
    }
}
QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3 = !0;
class SplineCurve extends Curve {
    constructor(e = []) {
        super (),
            this.type = 'SplineCurve',
            this.points = e
    }
    getPoint(e, t = new Vector2) {
        const n = t,
            r = this.points,
            i = (r.length - 1) * e,
            a = Math.floor(i),
            s = i - a,
            o = r[0 === a ? a : a - 1],
            l = r[a],
            c = r[a > r.length - 2 ? r.length - 1 : a + 1],
            h = r[a > r.length - 3 ? r.length - 1 : a + 2];
        return n.set(CatmullRom(s, o.x, l.x, c.x, h.x), CatmullRom(s, o.y, l.y, c.y, h.y)),
            n
    }
    copy(e) {
        super.copy(e),
            this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const n = e.points[t];
            this.points.push(n.clone())
        }
        return this
    }
    toJSON() {
        const e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            const n = this.points[t];
            e.points.push(n.toArray())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e),
            this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const n = e.points[t];
            this.points.push((new Vector2).fromArray(n))
        }
        return this
    }
}
SplineCurve.prototype.isSplineCurve = !0;
var Curves = Object.freeze({
    __proto__: null,
    ArcCurve: ArcCurve,
    CatmullRomCurve3: CatmullRomCurve3,
    CubicBezierCurve: CubicBezierCurve,
    CubicBezierCurve3: CubicBezierCurve3,
    EllipseCurve: EllipseCurve,
    LineCurve: LineCurve,
    LineCurve3: LineCurve3,
    QuadraticBezierCurve: QuadraticBezierCurve,
    QuadraticBezierCurve3: QuadraticBezierCurve3,
    SplineCurve: SplineCurve
});
class CurvePath extends Curve {
    constructor() {
        super (),
            this.type = 'CurvePath',
            this.curves = [],
            this.autoClose = !1
    }
    add(e) {
        this.curves.push(e)
    }
    closePath() {
        const e = this.curves[0].getPoint(0),
            t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) ||
        this.curves.push(new LineCurve(t, e))
    }
    getPoint(e) {
        const t = e * this.getLength(),
            n = this.getCurveLengths();
        let r = 0;
        for (; r < n.length; ) {
            if (n[r] >= t) {
                const e = n[r] - t,
                    i = this.curves[r],
                    a = i.getLength(),
                    s = 0 === a ? 0 : 1 - e / a;
                return i.getPointAt(s)
            }
            r++
        }
        return null
    }
    getLength() {
        const e = this.getCurveLengths();
        return e[e.length - 1]
    }
    updateArcLengths() {
        this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getCurveLengths()
    }
    getCurveLengths() {
        if (
            this.cacheLengths &&
            this.cacheLengths.length === this.curves.length
        ) return this.cacheLengths;
        const e = [];
        let t = 0;
        for (let n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(),
            e.push(t);
        return this.cacheLengths = e,
            e
    }
    getSpacedPoints(e = 40) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return this.autoClose &&
        t.push(t[0]),
            t
    }
    getPoints(e = 12) {
        const t = [];
        let n;
        for (let r = 0, i = this.curves; r < i.length; r++) {
            const a = i[r],
                s = a &&
                a.isEllipseCurve ? 2 * e : a &&
                (a.isLineCurve || a.isLineCurve3) ? 1 : a &&
                a.isSplineCurve ? e * a.points.length : e,
                o = a.getPoints(s);
            for (let e = 0; e < o.length; e++) {
                const r = o[e];
                n &&
                n.equals(r) ||
                (t.push(r), n = r)
            }
        }
        return this.autoClose &&
        t.length > 1 &&
        !t[t.length - 1].equals(t[0]) &&
        t.push(t[0]),
            t
    }
    copy(e) {
        super.copy(e),
            this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            const n = e.curves[t];
            this.curves.push(n.clone())
        }
        return this.autoClose = e.autoClose,
            this
    }
    toJSON() {
        const e = super.toJSON();
        e.autoClose = this.autoClose,
            e.curves = [];
        for (let t = 0, n = this.curves.length; t < n; t++) {
            const n = this.curves[t];
            e.curves.push(n.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e),
            this.autoClose = e.autoClose,
            this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            const n = e.curves[t];
            this.curves.push((new Curves[n.type]).fromJSON(n))
        }
        return this
    }
}
class Path extends CurvePath {
    constructor(e) {
        super (),
            this.type = 'Path',
            this.currentPoint = new Vector2,
        e &&
        this.setFromPoints(e)
    }
    setFromPoints(e) {
        this.moveTo(e[0].x, e[0].y);
        for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
        return this
    }
    moveTo(e, t) {
        return this.currentPoint.set(e, t),
            this
    }
    lineTo(e, t) {
        const n = new LineCurve(this.currentPoint.clone(), new Vector2(e, t));
        return this.curves.push(n),
            this.currentPoint.set(e, t),
            this
    }
    quadraticCurveTo(e, t, n, r) {
        const i = new QuadraticBezierCurve(this.currentPoint.clone(), new Vector2(e, t), new Vector2(n, r));
        return this.curves.push(i),
            this.currentPoint.set(n, r),
            this
    }
    bezierCurveTo(e, t, n, r, i, a) {
        const s = new CubicBezierCurve(
            this.currentPoint.clone(),
            new Vector2(e, t),
            new Vector2(n, r),
            new Vector2(i, a)
        );
        return this.curves.push(s),
            this.currentPoint.set(i, a),
            this
    }
    splineThru(e) {
        const t = [
                this.currentPoint.clone()
            ].concat(e),
            n = new SplineCurve(t);
        return this.curves.push(n),
            this.currentPoint.copy(e[e.length - 1]),
            this
    }
    arc(e, t, n, r, i, a) {
        const s = this.currentPoint.x,
            o = this.currentPoint.y;
        return this.absarc(e + s, t + o, n, r, i, a),
            this
    }
    absarc(e, t, n, r, i, a) {
        return this.absellipse(e, t, n, n, r, i, a),
            this
    }
    ellipse(e, t, n, r, i, a, s, o) {
        const l = this.currentPoint.x,
            c = this.currentPoint.y;
        return this.absellipse(e + l, t + c, n, r, i, a, s, o),
            this
    }
    absellipse(e, t, n, r, i, a, s, o) {
        const l = new EllipseCurve(e, t, n, r, i, a, s, o);
        if (this.curves.length > 0) {
            const e = l.getPoint(0);
            e.equals(this.currentPoint) ||
            this.lineTo(e.x, e.y)
        }
        this.curves.push(l);
        const c = l.getPoint(1);
        return this.currentPoint.copy(c),
            this
    }
    copy(e) {
        return super.copy(e),
            this.currentPoint.copy(e.currentPoint),
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.currentPoint = this.currentPoint.toArray(),
            e
    }
    fromJSON(e) {
        return super.fromJSON(e),
            this.currentPoint.fromArray(e.currentPoint),
            this
    }
}
class Shape extends Path {
    constructor(e) {
        super (e),
            this.uuid = generateUUID(),
            this.type = 'Shape',
            this.holes = []
    }
    getPointsHoles(e) {
        const t = [];
        for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
        return t
    }
    extractPoints(e) {
        return {
            shape: this.getPoints(e),
            holes: this.getPointsHoles(e)
        }
    }
    copy(e) {
        super.copy(e),
            this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            const n = e.holes[t];
            this.holes.push(n.clone())
        }
        return this
    }
    toJSON() {
        const e = super.toJSON();
        e.uuid = this.uuid,
            e.holes = [];
        for (let t = 0, n = this.holes.length; t < n; t++) {
            const n = this.holes[t];
            e.holes.push(n.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e),
            this.uuid = e.uuid,
            this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            const n = e.holes[t];
            this.holes.push((new Path).fromJSON(n))
        }
        return this
    }
}
class Light extends Object3D {
    constructor(e, t = 1) {
        super (),
            this.type = 'Light',
            this.color = new Color(e),
            this.intensity = t
    }
    dispose() {
    }
    copy(e) {
        return super.copy(e),
            this.color.copy(e.color),
            this.intensity = e.intensity,
            this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
            t.object.intensity = this.intensity,
        void 0 !== this.groundColor &&
        (t.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance &&
        (t.object.distance = this.distance),
        void 0 !== this.angle &&
        (t.object.angle = this.angle),
        void 0 !== this.decay &&
        (t.object.decay = this.decay),
        void 0 !== this.penumbra &&
        (t.object.penumbra = this.penumbra),
        void 0 !== this.shadow &&
        (t.object.shadow = this.shadow.toJSON()),
            t
    }
}
Light.prototype.isLight = !0;
class HemisphereLight extends Light {
    constructor(e, t, n) {
        super (e, n),
            this.type = 'HemisphereLight',
            this.position.copy(Object3D.DefaultUp),
            this.updateMatrix(),
            this.groundColor = new Color(t)
    }
    copy(e) {
        return Light.prototype.copy.call(this, e),
            this.groundColor.copy(e.groundColor),
            this
    }
}
HemisphereLight.prototype.isHemisphereLight = !0;
const _projScreenMatrix$1 = new Matrix4,
    _lightPositionWorld$1 = new Vector3,
    _lookTarget$1 = new Vector3;
class LightShadow {
    constructor(e) {
        this.camera = e,
            this.bias = 0,
            this.normalBias = 0,
            this.radius = 1,
            this.mapSize = new Vector2(512, 512),
            this.map = null,
            this.mapPass = null,
            this.matrix = new Matrix4,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this._frustum = new Frustum,
            this._frameExtents = new Vector2(1, 1),
            this._viewportCount = 1,
            this._viewports = [
                new Vector4(0, 0, 1, 1)
            ]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera,
            n = this.matrix;
        _lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),
            t.position.copy(_lightPositionWorld$1),
            _lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),
            t.lookAt(_lookTarget$1),
            t.updateMatrixWorld(),
            _projScreenMatrix$1.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),
            n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
            n.multiply(t.projectionMatrix),
            n.multiply(t.matrixWorldInverse)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map &&
        this.map.dispose(),
        this.mapPass &&
        this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
            this.bias = e.bias,
            this.radius = e.radius,
            this.mapSize.copy(e.mapSize),
            this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const e = {};
        return 0 !== this.bias &&
        (e.bias = this.bias),
        0 !== this.normalBias &&
        (e.normalBias = this.normalBias),
        1 !== this.radius &&
        (e.radius = this.radius),
        512 === this.mapSize.x &&
        512 === this.mapSize.y ||
        (e.mapSize = this.mapSize.toArray()),
            e.camera = this.camera.toJSON(!1).object,
            delete e.camera.matrix,
            e
    }
}
class SpotLightShadow extends LightShadow {
    constructor() {
        super (new PerspectiveCamera(50, 1, 0.5, 500)),
            this.focus = 1
    }
    updateMatrices(e) {
        const t = this.camera,
            n = 2 * RAD2DEG * e.angle * this.focus,
            r = this.mapSize.width / this.mapSize.height,
            i = e.distance ||
                t.far;
        n === t.fov &&
        r === t.aspect &&
        i === t.far ||
        (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()),
            super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e),
            this.focus = e.focus,
            this
    }
}
SpotLightShadow.prototype.isSpotLightShadow = !0;
class SpotLight extends Light {
    constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 1) {
        super (e, t),
            this.type = 'SpotLight',
            this.position.copy(Object3D.DefaultUp),
            this.updateMatrix(),
            this.target = new Object3D,
            this.distance = n,
            this.angle = r,
            this.penumbra = i,
            this.decay = a,
            this.shadow = new SpotLightShadow
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
            this.distance = e.distance,
            this.angle = e.angle,
            this.penumbra = e.penumbra,
            this.decay = e.decay,
            this.target = e.target.clone(),
            this.shadow = e.shadow.clone(),
            this
    }
}
SpotLight.prototype.isSpotLight = !0;
const _projScreenMatrix = new Matrix4,
    _lightPositionWorld = new Vector3,
    _lookTarget = new Vector3;
class PointLightShadow extends LightShadow {
    constructor() {
        super (new PerspectiveCamera(90, 1, 0.5, 500)),
            this._frameExtents = new Vector2(4, 2),
            this._viewportCount = 6,
            this._viewports = [
                new Vector4(2, 1, 1, 1),
                new Vector4(0, 1, 1, 1),
                new Vector4(3, 1, 1, 1),
                new Vector4(1, 1, 1, 1),
                new Vector4(3, 0, 1, 1),
                new Vector4(1, 0, 1, 1)
            ],
            this._cubeDirections = [
                new Vector3(1, 0, 0),
                new Vector3( - 1, 0, 0),
                new Vector3(0, 0, 1),
                new Vector3(0, 0, - 1),
                new Vector3(0, 1, 0),
                new Vector3(0, - 1, 0)
            ],
            this._cubeUps = [
                new Vector3(0, 1, 0),
                new Vector3(0, 1, 0),
                new Vector3(0, 1, 0),
                new Vector3(0, 1, 0),
                new Vector3(0, 0, 1),
                new Vector3(0, 0, - 1)
            ]
    }
    updateMatrices(e, t = 0) {
        const n = this.camera,
            r = this.matrix,
            i = e.distance ||
                n.far;
        i !== n.far &&
        (n.far = i, n.updateProjectionMatrix()),
            _lightPositionWorld.setFromMatrixPosition(e.matrixWorld),
            n.position.copy(_lightPositionWorld),
            _lookTarget.copy(n.position),
            _lookTarget.add(this._cubeDirections[t]),
            n.up.copy(this._cubeUps[t]),
            n.lookAt(_lookTarget),
            n.updateMatrixWorld(),
            r.makeTranslation(
                - _lightPositionWorld.x,
                - _lightPositionWorld.y,
                - _lightPositionWorld.z
            ),
            _projScreenMatrix.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(_projScreenMatrix)
    }
}
PointLightShadow.prototype.isPointLightShadow = !0;
class PointLight extends Light {
    constructor(e, t, n = 0, r = 1) {
        super (e, t),
            this.type = 'PointLight',
            this.distance = n,
            this.decay = r,
            this.shadow = new PointLightShadow
    }
    get power() {
        return 4 * this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
            this.distance = e.distance,
            this.decay = e.decay,
            this.shadow = e.shadow.clone(),
            this
    }
}
PointLight.prototype.isPointLight = !0;
class OrthographicCamera extends Camera {
    constructor(e = - 1, t = 1, n = 1, r = - 1, i = 0.1, a = 2000) {
        super (),
            this.type = 'OrthographicCamera',
            this.zoom = 1,
            this.view = null,
            this.left = e,
            this.right = t,
            this.top = n,
            this.bottom = r,
            this.near = i,
            this.far = a,
            this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
            this.left = e.left,
            this.right = e.right,
            this.top = e.top,
            this.bottom = e.bottom,
            this.near = e.near,
            this.far = e.far,
            this.zoom = e.zoom,
            this.view = null === e.view ? null : Object.assign({
            }, e.view),
            this
    }
    setViewOffset(e, t, n, r, i, a) {
        null === this.view &&
        (
            this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }
        ),
            this.view.enabled = !0,
            this.view.fullWidth = e,
            this.view.fullHeight = t,
            this.view.offsetX = n,
            this.view.offsetY = r,
            this.view.width = i,
            this.view.height = a,
            this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view &&
        (this.view.enabled = !1),
            this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom),
            t = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            r = (this.top + this.bottom) / 2;
        let i = n - e,
            a = n + e,
            s = r + t,
            o = r - t;
        if (null !== this.view && this.view.enabled) {
            const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
                t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            i += e * this.view.offsetX,
                a = i + e * this.view.width,
                s -= t * this.view.offsetY,
                o = s - t * this.view.height
        }
        this.projectionMatrix.makeOrthographic(i, a, s, o, this.near, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom,
            t.object.left = this.left,
            t.object.right = this.right,
            t.object.top = this.top,
            t.object.bottom = this.bottom,
            t.object.near = this.near,
            t.object.far = this.far,
        null !== this.view &&
        (t.object.view = Object.assign({
        }, this.view)),
            t
    }
}
OrthographicCamera.prototype.isOrthographicCamera = !0;
class DirectionalLightShadow extends LightShadow {
    constructor() {
        super (new OrthographicCamera( - 5, 5, 5, - 5, 0.5, 500))
    }
}
DirectionalLightShadow.prototype.isDirectionalLightShadow = !0;
class DirectionalLight extends Light {
    constructor(e, t) {
        super (e, t),
            this.type = 'DirectionalLight',
            this.position.copy(Object3D.DefaultUp),
            this.updateMatrix(),
            this.target = new Object3D,
            this.shadow = new DirectionalLightShadow
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
            this.target = e.target.clone(),
            this.shadow = e.shadow.clone(),
            this
    }
}
DirectionalLight.prototype.isDirectionalLight = !0;
class AmbientLight extends Light {
    constructor(e, t) {
        super (e, t),
            this.type = 'AmbientLight'
    }
}
AmbientLight.prototype.isAmbientLight = !0;
class RectAreaLight extends Light {
    constructor(e, t, n = 10, r = 10) {
        super (e, t),
            this.type = 'RectAreaLight',
            this.width = n,
            this.height = r
    }
    copy(e) {
        return super.copy(e),
            this.width = e.width,
            this.height = e.height,
            this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.width = this.width,
            t.object.height = this.height,
            t
    }
}
RectAreaLight.prototype.isRectAreaLight = !0;
class SphericalHarmonics3 {
    constructor() {
        this.coefficients = [];
        for (let e = 0; e < 9; e++) this.coefficients.push(new Vector3)
    }
    set(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
        return this
    }
    zero() {
        for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
        return this
    }
    getAt(e, t) {
        const n = e.x,
            r = e.y,
            i = e.z,
            a = this.coefficients;
        return t.copy(a[0]).multiplyScalar(0.282095),
            t.addScaledVector(a[1], 0.488603 * r),
            t.addScaledVector(a[2], 0.488603 * i),
            t.addScaledVector(a[3], 0.488603 * n),
            t.addScaledVector(a[4], n * r * 1.092548),
            t.addScaledVector(a[5], r * i * 1.092548),
            t.addScaledVector(a[6], 0.315392 * (3 * i * i - 1)),
            t.addScaledVector(a[7], n * i * 1.092548),
            t.addScaledVector(a[8], 0.546274 * (n * n - r * r)),
            t
    }
    getIrradianceAt(e, t) {
        const n = e.x,
            r = e.y,
            i = e.z,
            a = this.coefficients;
        return t.copy(a[0]).multiplyScalar(0.886227),
            t.addScaledVector(a[1], 1.023328 * r),
            t.addScaledVector(a[2], 1.023328 * i),
            t.addScaledVector(a[3], 1.023328 * n),
            t.addScaledVector(a[4], 0.858086 * n * r),
            t.addScaledVector(a[5], 0.858086 * r * i),
            t.addScaledVector(a[6], 0.743125 * i * i - 0.247708),
            t.addScaledVector(a[7], 0.858086 * n * i),
            t.addScaledVector(a[8], 0.429043 * (n * n - r * r)),
            t
    }
    add(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
        return this
    }
    addScaledSH(e, t) {
        for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
        return this
    }
    scale(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
        return this
    }
    lerp(e, t) {
        for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
        return this
    }
    equals(e) {
        for (let t = 0; t < 9; t++) if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
        return !0
    }
    copy(e) {
        return this.set(e.coefficients)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    fromArray(e, t = 0) {
        const n = this.coefficients;
        for (let r = 0; r < 9; r++) n[r].fromArray(e, t + 3 * r);
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.coefficients;
        for (let r = 0; r < 9; r++) n[r].toArray(e, t + 3 * r);
        return e
    }
    static getBasisAt(e, t) {
        const n = e.x,
            r = e.y,
            i = e.z;
        t[0] = 0.282095,
            t[1] = 0.488603 * r,
            t[2] = 0.488603 * i,
            t[3] = 0.488603 * n,
            t[4] = 1.092548 * n * r,
            t[5] = 1.092548 * r * i,
            t[6] = 0.315392 * (3 * i * i - 1),
            t[7] = 1.092548 * n * i,
            t[8] = 0.546274 * (n * n - r * r)
    }
}
SphericalHarmonics3.prototype.isSphericalHarmonics3 = !0;
class LightProbe extends Light {
    constructor(e = new SphericalHarmonics3, t = 1) {
        super (void 0, t),
            this.sh = e
    }
    copy(e) {
        return super.copy(e),
            this.sh.copy(e.sh),
            this
    }
    fromJSON(e) {
        return this.intensity = e.intensity,
            this.sh.fromArray(e.sh),
            this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.sh = this.sh.toArray(),
            t
    }
}
LightProbe.prototype.isLightProbe = !0;
class LoaderUtils {
    static decodeText(e) {
        if ('undefined' != typeof TextDecoder) return (new TextDecoder).decode(e);
        let t = '';
        for (let n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t))
        } catch (e) {
            return t
        }
    }
    static extractUrlBase(e) {
        const t = e.lastIndexOf('/');
        return - 1 === t ? './' : e.substr(0, t + 1)
    }
}
class InstancedBufferGeometry extends BufferGeometry {
    constructor() {
        super (),
            this.type = 'InstancedBufferGeometry',
            this.instanceCount = 1 / 0
    }
    copy(e) {
        return super.copy(e),
            this.instanceCount = e.instanceCount,
            this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const e = super.toJSON(this);
        return e.instanceCount = this.instanceCount,
            e.isInstancedBufferGeometry = !0,
            e
    }
}
InstancedBufferGeometry.prototype.isInstancedBufferGeometry = !0;
class InstancedBufferAttribute extends BufferAttribute {
    constructor(e, t, n, r) {
        'number' == typeof n &&
        (
            r = n,
                n = !1,
                console.error(
                    'THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.'
                )
        ),
            super (e, t, n),
            this.meshPerAttribute = r ||
                1
    }
    copy(e) {
        return super.copy(e),
            this.meshPerAttribute = e.meshPerAttribute,
            this
    }
    toJSON() {
        const e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute,
            e.isInstancedBufferAttribute = !0,
            e
    }
}
InstancedBufferAttribute.prototype.isInstancedBufferAttribute = !0;
class ImageBitmapLoader extends Loader {
    constructor(e) {
        super (e),
        'undefined' == typeof createImageBitmap &&
        console.warn(
            'THREE.ImageBitmapLoader: createImageBitmap() not supported.'
        ),
        'undefined' == typeof fetch &&
        console.warn('THREE.ImageBitmapLoader: fetch() not supported.'),
            this.options = {
                premultiplyAlpha: 'none'
            }
    }
    setOptions(e) {
        return this.options = e,
            this
    }
    load(e, t, n, r) {
        void 0 === e &&
        (e = ''),
        void 0 !== this.path &&
        (e = this.path + e),
            e = this.manager.resolveURL(e);
        const i = this,
            a = Cache.get(e);
        if (void 0 !== a) return i.manager.itemStart(e),
            setTimeout((function () {
                t &&
                t(a),
                    i.manager.itemEnd(e)
            }), 0),
            a;
        const s = {};
        s.credentials = 'anonymous' === this.crossOrigin ? 'same-origin' : 'include',
            s.headers = this.requestHeader,
            fetch(e, s).then((function (e) {
                return e.blob()
            })).then(
                (
                    function (e) {
                        return createImageBitmap(e, Object.assign(i.options, {
                            colorSpaceConversion: 'none'
                        }))
                    }
                )
            ).then((function (n) {
                Cache.add(e, n),
                t &&
                t(n),
                    i.manager.itemEnd(e)
            })).catch(
                (
                    function (t) {
                        r &&
                        r(t),
                            i.manager.itemError(e),
                            i.manager.itemEnd(e)
                    }
                )
            ),
            i.manager.itemStart(e)
    }
}
let _context;
ImageBitmapLoader.prototype.isImageBitmapLoader = !0;
const AudioContext = {
    getContext: function () {
        return void 0 === _context &&
        (_context = new (window.AudioContext || window.webkitAudioContext)),
            _context
    },
    setContext: function (e) {
        _context = e
    }
};
class AudioLoader extends Loader {
    constructor(e) {
        super (e)
    }
    load(e, t, n, r) {
        const i = this,
            a = new FileLoader(this.manager);
        a.setResponseType('arraybuffer'),
            a.setPath(this.path),
            a.setRequestHeader(this.requestHeader),
            a.setWithCredentials(this.withCredentials),
            a.load(
                e,
                (
                    function (n) {
                        try {
                            const e = n.slice(0);
                            AudioContext.getContext().decodeAudioData(e, (function (e) {
                                t(e)
                            }))
                        } catch (t) {
                            r ? r(t) : console.error(t),
                                i.manager.itemError(e)
                        }
                    }
                ),
                n,
                r
            )
    }
}
class HemisphereLightProbe extends LightProbe {
    constructor(e, t, n = 1) {
        super (void 0, n);
        const r = (new Color).set(e),
            i = (new Color).set(t),
            a = new Vector3(r.r, r.g, r.b),
            s = new Vector3(i.r, i.g, i.b),
            o = Math.sqrt(Math.PI),
            l = o * Math.sqrt(0.75);
        this.sh.coefficients[0].copy(a).add(s).multiplyScalar(o),
            this.sh.coefficients[1].copy(a).sub(s).multiplyScalar(l)
    }
}
HemisphereLightProbe.prototype.isHemisphereLightProbe = !0;
class AmbientLightProbe extends LightProbe {
    constructor(e, t = 1) {
        super (void 0, t);
        const n = (new Color).set(e);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
}
AmbientLightProbe.prototype.isAmbientLightProbe = !0;
class Audio extends Object3D {
    constructor(e) {
        super (),
            this.type = 'Audio',
            this.listener = e,
            this.context = e.context,
            this.gain = this.context.createGain(),
            this.gain.connect(e.getInput()),
            this.autoplay = !1,
            this.buffer = null,
            this.detune = 0,
            this.loop = !1,
            this.loopStart = 0,
            this.loopEnd = 0,
            this.offset = 0,
            this.duration = void 0,
            this.playbackRate = 1,
            this.isPlaying = !1,
            this.hasPlaybackControl = !0,
            this.source = null,
            this.sourceType = 'empty',
            this._startedAt = 0,
            this._progress = 0,
            this._connected = !1,
            this.filters = []
    }
    getOutput() {
        return this.gain
    }
    setNodeSource(e) {
        return this.hasPlaybackControl = !1,
            this.sourceType = 'audioNode',
            this.source = e,
            this.connect(),
            this
    }
    setMediaElementSource(e) {
        return this.hasPlaybackControl = !1,
            this.sourceType = 'mediaNode',
            this.source = this.context.createMediaElementSource(e),
            this.connect(),
            this
    }
    setMediaStreamSource(e) {
        return this.hasPlaybackControl = !1,
            this.sourceType = 'mediaStreamNode',
            this.source = this.context.createMediaStreamSource(e),
            this.connect(),
            this
    }
    setBuffer(e) {
        return this.buffer = e,
            this.sourceType = 'buffer',
        this.autoplay &&
        this.play(),
            this
    }
    play(e = 0) {
        if (!0 === this.isPlaying) return void console.warn('THREE.Audio: Audio is already playing.');
        if (!1 === this.hasPlaybackControl) return void console.warn('THREE.Audio: this Audio has no playback control.');
        this._startedAt = this.context.currentTime + e;
        const t = this.context.createBufferSource();
        return t.buffer = this.buffer,
            t.loop = this.loop,
            t.loopStart = this.loopStart,
            t.loopEnd = this.loopEnd,
            t.onended = this.onEnded.bind(this),
            t.start(this._startedAt, this._progress + this.offset, this.duration),
            this.isPlaying = !0,
            this.source = t,
            this.setDetune(this.detune),
            this.setPlaybackRate(this.playbackRate),
            this.connect()
    }
    pause() {
        if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying &&
        (
            this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate,
            !0 === this.loop &&
            (
                this._progress = this._progress % (this.duration || this.buffer.duration)
            ),
                this.source.stop(),
                this.source.onended = null,
                this.isPlaying = !1
        ),
            this;
        console.warn('THREE.Audio: this Audio has no playback control.')
    }
    stop() {
        if (!1 !== this.hasPlaybackControl) return this._progress = 0,
            this.source.stop(),
            this.source.onended = null,
            this.isPlaying = !1,
            this;
        console.warn('THREE.Audio: this Audio has no playback control.')
    }
    connect() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
        } else this.source.connect(this.getOutput());
        return this._connected = !0,
            this
    }
    disconnect() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else this.source.disconnect(this.getOutput());
        return this._connected = !1,
            this
    }
    getFilters() {
        return this.filters
    }
    setFilters(e) {
        return e ||
        (e = []),
            !0 === this._connected ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(),
            this
    }
    setDetune(e) {
        if (this.detune = e, void 0 !== this.source.detune) return !0 === this.isPlaying &&
        this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01),
            this
    }
    getDetune() {
        return this.detune
    }
    getFilter() {
        return this.getFilters() [0]
    }
    setFilter(e) {
        return this.setFilters(e ? [
            e
        ] : [])
    }
    setPlaybackRate(e) {
        if (!1 !== this.hasPlaybackControl) return this.playbackRate = e,
        !0 === this.isPlaying &&
        this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01),
            this;
        console.warn('THREE.Audio: this Audio has no playback control.')
    }
    getPlaybackRate() {
        return this.playbackRate
    }
    onEnded() {
        this.isPlaying = !1
    }
    getLoop() {
        return !1 === this.hasPlaybackControl ? (
            console.warn('THREE.Audio: this Audio has no playback control.'),
                !1
        ) : this.loop
    }
    setLoop(e) {
        if (!1 !== this.hasPlaybackControl) return this.loop = e,
        !0 === this.isPlaying &&
        (this.source.loop = this.loop),
            this;
        console.warn('THREE.Audio: this Audio has no playback control.')
    }
    setLoopStart(e) {
        return this.loopStart = e,
            this
    }
    setLoopEnd(e) {
        return this.loopEnd = e,
            this
    }
    getVolume() {
        return this.gain.gain.value
    }
    setVolume(e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01),
            this
    }
}
class PropertyMixer {
    constructor(e, t, n) {
        let r,
            i,
            a;
        switch (this.binding = e, this.valueSize = n, t) {
            case 'quaternion':
                r = this._slerp,
                    i = this._slerpAdditive,
                    a = this._setAdditiveIdentityQuaternion,
                    this.buffer = new Float64Array(6 * n),
                    this._workIndex = 5;
                break;
            case 'string':
            case 'bool':
                r = this._select,
                    i = this._select,
                    a = this._setAdditiveIdentityOther,
                    this.buffer = new Array(5 * n);
                break;
            default:
                r = this._lerp,
                    i = this._lerpAdditive,
                    a = this._setAdditiveIdentityNumeric,
                    this.buffer = new Float64Array(5 * n)
        }
        this._mixBufferRegion = r,
            this._mixBufferRegionAdditive = i,
            this._setIdentity = a,
            this._origIndex = 3,
            this._addIndex = 4,
            this.cumulativeWeight = 0,
            this.cumulativeWeightAdditive = 0,
            this.useCount = 0,
            this.referenceCount = 0
    }
    accumulate(e, t) {
        const n = this.buffer,
            r = this.valueSize,
            i = e * r + r;
        let a = this.cumulativeWeight;
        if (0 === a) {
            for (let e = 0; e !== r; ++e) n[i + e] = n[e];
            a = t
        } else {
            a += t;
            const e = t / a;
            this._mixBufferRegion(n, i, 0, e, r)
        }
        this.cumulativeWeight = a
    }
    accumulateAdditive(e) {
        const t = this.buffer,
            n = this.valueSize,
            r = n * this._addIndex;
        0 === this.cumulativeWeightAdditive &&
        this._setIdentity(),
            this._mixBufferRegionAdditive(t, r, 0, e, n),
            this.cumulativeWeightAdditive += e
    }
    apply(e) {
        const t = this.valueSize,
            n = this.buffer,
            r = e * t + t,
            i = this.cumulativeWeight,
            a = this.cumulativeWeightAdditive,
            s = this.binding;
        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, i < 1) {
            const e = t * this._origIndex;
            this._mixBufferRegion(n, r, e, 1 - i, t)
        }
        a > 0 &&
        this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t);
        for (let e = t, i = t + t; e !== i; ++e) if (n[e] !== n[e + t]) {
            s.setValue(n, r);
            break
        }
    }
    saveOriginalState() {
        const e = this.binding,
            t = this.buffer,
            n = this.valueSize,
            r = n * this._origIndex;
        e.getValue(t, r);
        for (let e = n, i = r; e !== i; ++e) t[e] = t[r + e % n];
        this._setIdentity(),
            this.cumulativeWeight = 0,
            this.cumulativeWeightAdditive = 0
    }
    restoreOriginalState() {
        const e = 3 * this.valueSize;
        this.binding.setValue(this.buffer, e)
    }
    _setAdditiveIdentityNumeric() {
        const e = this._addIndex * this.valueSize,
            t = e + this.valueSize;
        for (let n = e; n < t; n++) this.buffer[n] = 0
    }
    _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(),
            this.buffer[this._addIndex * this.valueSize + 3] = 1
    }
    _setAdditiveIdentityOther() {
        const e = this._origIndex * this.valueSize,
            t = this._addIndex * this.valueSize;
        for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n]
    }
    _select(e, t, n, r, i) {
        if (r >= 0.5) for (let r = 0; r !== i; ++r) e[t + r] = e[n + r]
    }
    _slerp(e, t, n, r) {
        Quaternion.slerpFlat(e, t, e, t, e, n, r)
    }
    _slerpAdditive(e, t, n, r, i) {
        const a = this._workIndex * i;
        Quaternion.multiplyQuaternionsFlat(e, a, e, t, e, n),
            Quaternion.slerpFlat(e, t, e, t, e, a, r)
    }
    _lerp(e, t, n, r, i) {
        const a = 1 - r;
        for (let s = 0; s !== i; ++s) {
            const i = t + s;
            e[i] = e[i] * a + e[n + s] * r
        }
    }
    _lerpAdditive(e, t, n, r, i) {
        for (let a = 0; a !== i; ++a) {
            const i = t + a;
            e[i] = e[i] + e[n + a] * r
        }
    }
}
const _RESERVED_CHARS_RE = '\\[\\]\\.:\\/',
    _reservedRe = new RegExp('[\\[\\]\\.:\\/]', 'g'),
    _wordChar = '[^\\[\\]\\.:\\/]',
    _wordCharOrDot = '[^' + '\\[\\]\\.:\\/'.replace('\\.', '') + ']',
    _directoryRe = /((?:WC+[\/:])*)/.source.replace('WC', _wordChar),
    _nodeRe = /(WCOD+)?/.source.replace('WCOD', _wordCharOrDot),
    _objectRe = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace('WC', _wordChar),
    _propertyRe = /\.(WC+)(?:\[(.+)\])?/.source.replace('WC', _wordChar),
    _trackRe = new RegExp('^' + _directoryRe + _nodeRe + _objectRe + _propertyRe + '$'),
    _supportedObjectNames = [
        'material',
        'materials',
        'bones'
    ];
class Composite {
    constructor(e, t, n) {
        const r = n ||
            PropertyBinding.parseTrackName(t);
        this._targetGroup = e,
            this._bindings = e.subscribe_(t, r)
    }
    getValue(e, t) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_,
            r = this._bindings[n];
        void 0 !== r &&
        r.getValue(e, t)
    }
    setValue(e, t) {
        const n = this._bindings;
        for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t)
    }
    bind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
    }
    unbind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
    }
}
class PropertyBinding {
    constructor(e, t, n) {
        this.path = t,
            this.parsedPath = n ||
                PropertyBinding.parseTrackName(t),
            this.node = PropertyBinding.findNode(e, this.parsedPath.nodeName) ||
                e,
            this.rootNode = e,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e &&
        e.isAnimationObjectGroup ? new PropertyBinding.Composite(e, t, n) : new PropertyBinding(e, t, n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, '_').replace(_reservedRe, '')
    }
    static parseTrackName(e) {
        const t = _trackRe.exec(e);
        if (!t) throw new Error('PropertyBinding: Cannot parse trackName: ' + e);
        const n = {
                nodeName: t[2],
                objectName: t[3],
                objectIndex: t[4],
                propertyName: t[5],
                propertyIndex: t[6]
            },
            r = n.nodeName &&
                n.nodeName.lastIndexOf('.');
        if (void 0 !== r && - 1 !== r) {
            const e = n.nodeName.substring(r + 1);
            - 1 !== _supportedObjectNames.indexOf(e) &&
            (n.nodeName = n.nodeName.substring(0, r), n.objectName = e)
        }
        if (null === n.propertyName || 0 === n.propertyName.length) throw new Error(
            'PropertyBinding: can not parse propertyName from trackName: ' + e
        );
        return n
    }
    static findNode(e, t) {
        if (!t || '' === t || '.' === t || - 1 === t || t === e.name || t === e.uuid) return e;
        if (e.skeleton) {
            const n = e.skeleton.getBoneByName(t);
            if (void 0 !== n) return n
        }
        if (e.children) {
            const n = function (e) {
                    for (let r = 0; r < e.length; r++) {
                        const i = e[r];
                        if (i.name === t || i.uuid === t) return i;
                        const a = n(i.children);
                        if (a) return a
                    }
                    return null
                },
                r = n(e.children);
            if (r) return r
        }
        return null
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(e, t) {
        e[t] = this.node[this.propertyName]
    }
    _getValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
            this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
            this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
            this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
            this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
            this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
            this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(),
            this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(),
            this.setValue(e, t)
    }
    bind() {
        let e = this.node;
        const t = this.parsedPath,
            n = t.objectName,
            r = t.propertyName;
        let i = t.propertyIndex;
        if (
            e ||
            (
                e = PropertyBinding.findNode(this.rootNode, t.nodeName) ||
                    this.rootNode,
                    this.node = e
            ),
                this.getValue = this._getValue_unavailable,
                this.setValue = this._setValue_unavailable,
                !e
        ) return void console.error(
            'THREE.PropertyBinding: Trying to update node for track: ' + this.path + ' but it wasn\'t found.'
        );
        if (n) {
            let r = t.objectIndex;
            switch (n) {
                case 'materials':
                    if (!e.material) return void console.error(
                        'THREE.PropertyBinding: Can not bind to material as node does not have a material.',
                        this
                    );
                    if (!e.material.materials) return void console.error(
                        'THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.',
                        this
                    );
                    e = e.material.materials;
                    break;
                case 'bones':
                    if (!e.skeleton) return void console.error(
                        'THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.',
                        this
                    );
                    e = e.skeleton.bones;
                    for (let t = 0; t < e.length; t++) if (e[t].name === r) {
                        r = t;
                        break
                    }
                    break;
                default:
                    if (void 0 === e[n]) return void console.error(
                        'THREE.PropertyBinding: Can not bind to objectName of node undefined.',
                        this
                    );
                    e = e[n]
            }
            if (void 0 !== r) {
                if (void 0 === e[r]) return void console.error(
                    'THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.',
                    this,
                    e
                );
                e = e[r]
            }
        }
        const a = e[r];
        if (void 0 === a) {
            const n = t.nodeName;
            return void console.error(
                'THREE.PropertyBinding: Trying to update property for track: ' + n + '.' + r + ' but it wasn\'t found.',
                e
            )
        }
        let s = this.Versioning.None;
        this.targetObject = e,
            void 0 !== e.needsUpdate ? s = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate &&
                (s = this.Versioning.MatrixWorldNeedsUpdate);
        let o = this.BindingType.Direct;
        if (void 0 !== i) {
            if ('morphTargetInfluences' === r) {
                if (!e.geometry) return void console.error(
                    'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.',
                    this
                );
                if (!e.geometry.isBufferGeometry) return void console.error(
                    'THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.',
                    this
                );
                if (!e.geometry.morphAttributes) return void console.error(
                    'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.',
                    this
                );
                void 0 !== e.morphTargetDictionary[i] &&
                (i = e.morphTargetDictionary[i])
            }
            o = this.BindingType.ArrayElement,
                this.resolvedProperty = a,
                this.propertyIndex = i
        } else void 0 !== a.fromArray &&
        void 0 !== a.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (o = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
        this.getValue = this.GetterByBindingType[o],
            this.setValue = this.SetterByBindingTypeAndVersioning[o][s]
    }
    unbind() {
        this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
    }
}
PropertyBinding.Composite = Composite,
    PropertyBinding.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    },
    PropertyBinding.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    },
    PropertyBinding.prototype.GetterByBindingType = [
        PropertyBinding.prototype._getValue_direct,
        PropertyBinding.prototype._getValue_array,
        PropertyBinding.prototype._getValue_arrayElement,
        PropertyBinding.prototype._getValue_toArray
    ],
    PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
        [PropertyBinding.prototype._setValue_direct,
            PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
            PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
        [
            PropertyBinding.prototype._setValue_array,
            PropertyBinding.prototype._setValue_array_setNeedsUpdate,
            PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            PropertyBinding.prototype._setValue_arrayElement,
            PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
            PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            PropertyBinding.prototype._setValue_fromArray,
            PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
            PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
class AnimationAction {
    constructor(e, t, n = null, r = t.blendMode) {
        this._mixer = e,
            this._clip = t,
            this._localRoot = n,
            this.blendMode = r;
        const i = t.tracks,
            a = i.length,
            s = new Array(a),
            o = {
                endingStart: 2400,
                endingEnd: 2400
            };
        for (let e = 0; e !== a; ++e) {
            const t = i[e].createInterpolant(null);
            s[e] = t,
                t.settings = o
        }
        this._interpolantSettings = o,
            this._interpolants = s,
            this._propertyBindings = new Array(a),
            this._cacheIndex = null,
            this._byClipCacheIndex = null,
            this._timeScaleInterpolant = null,
            this._weightInterpolant = null,
            this.loop = 2201,
            this._loopCount = - 1,
            this._startTime = null,
            this.time = 0,
            this.timeScale = 1,
            this._effectiveTimeScale = 1,
            this.weight = 1,
            this._effectiveWeight = 1,
            this.repetitions = 1 / 0,
            this.paused = !1,
            this.enabled = !0,
            this.clampWhenFinished = !1,
            this.zeroSlopeAtStart = !0,
            this.zeroSlopeAtEnd = !0
    }
    play() {
        return this._mixer._activateAction(this),
            this
    }
    stop() {
        return this._mixer._deactivateAction(this),
            this.reset()
    }
    reset() {
        return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = - 1,
            this._startTime = null,
            this.stopFading().stopWarping()
    }
    isRunning() {
        return this.enabled &&
            !this.paused &&
            0 !== this.timeScale &&
            null === this._startTime &&
            this._mixer._isActiveAction(this)
    }
    isScheduled() {
        return this._mixer._isActiveAction(this)
    }
    startAt(e) {
        return this._startTime = e,
            this
    }
    setLoop(e, t) {
        return this.loop = e,
            this.repetitions = t,
            this
    }
    setEffectiveWeight(e) {
        return this.weight = e,
            this._effectiveWeight = this.enabled ? e : 0,
            this.stopFading()
    }
    getEffectiveWeight() {
        return this._effectiveWeight
    }
    fadeIn(e) {
        return this._scheduleFading(e, 0, 1)
    }
    fadeOut(e) {
        return this._scheduleFading(e, 1, 0)
    }
    crossFadeFrom(e, t, n) {
        if (e.fadeOut(t), this.fadeIn(t), n) {
            const n = this._clip.duration,
                r = e._clip.duration,
                i = r / n,
                a = n / r;
            e.warp(1, i, t),
                this.warp(a, 1, t)
        }
        return this
    }
    crossFadeTo(e, t, n) {
        return e.crossFadeFrom(this, t, n)
    }
    stopFading() {
        const e = this._weightInterpolant;
        return null !== e &&
        (
            this._weightInterpolant = null,
                this._mixer._takeBackControlInterpolant(e)
        ),
            this
    }
    setEffectiveTimeScale(e) {
        return this.timeScale = e,
            this._effectiveTimeScale = this.paused ? 0 : e,
            this.stopWarping()
    }
    getEffectiveTimeScale() {
        return this._effectiveTimeScale
    }
    setDuration(e) {
        return this.timeScale = this._clip.duration / e,
            this.stopWarping()
    }
    syncWith(e) {
        return this.time = e.time,
            this.timeScale = e.timeScale,
            this.stopWarping()
    }
    halt(e) {
        return this.warp(this._effectiveTimeScale, 0, e)
    }
    warp(e, t, n) {
        const r = this._mixer,
            i = r.time,
            a = this.timeScale;
        let s = this._timeScaleInterpolant;
        null === s &&
        (s = r._lendControlInterpolant(), this._timeScaleInterpolant = s);
        const o = s.parameterPositions,
            l = s.sampleValues;
        return o[0] = i,
            o[1] = i + n,
            l[0] = e / a,
            l[1] = t / a,
            this
    }
    stopWarping() {
        const e = this._timeScaleInterpolant;
        return null !== e &&
        (
            this._timeScaleInterpolant = null,
                this._mixer._takeBackControlInterpolant(e)
        ),
            this
    }
    getMixer() {
        return this._mixer
    }
    getClip() {
        return this._clip
    }
    getRoot() {
        return this._localRoot ||
            this._mixer._root
    }
    _update(e, t, n, r) {
        if (!this.enabled) return void this._updateWeight(e);
        const i = this._startTime;
        if (null !== i) {
            const r = (e - i) * n;
            if (r < 0 || 0 === n) return;
            this._startTime = null,
                t = n * r
        }
        t *= this._updateTimeScale(e);
        const a = this._updateTime(t),
            s = this._updateWeight(e);
        if (s > 0) {
            const e = this._interpolants,
                t = this._propertyBindings;
            if (2501 === this.blendMode) for (let n = 0, r = e.length; n !== r; ++n) e[n].evaluate(a),
                t[n].accumulateAdditive(s);
            else for (let n = 0, i = e.length; n !== i; ++n) e[n].evaluate(a),
                t[n].accumulate(r, s)
        }
    }
    _updateWeight(e) {
        let t = 0;
        if (this.enabled) {
            t = this.weight;
            const n = this._weightInterpolant;
            if (null !== n) {
                const r = n.evaluate(e) [0];
                t *= r,
                e > n.parameterPositions[1] &&
                (this.stopFading(), 0 === r && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = t,
            t
    }
    _updateTimeScale(e) {
        let t = 0;
        if (!this.paused) {
            t = this.timeScale;
            const n = this._timeScaleInterpolant;
            if (null !== n) {
                t *= n.evaluate(e) [0],
                e > n.parameterPositions[1] &&
                (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
            }
        }
        return this._effectiveTimeScale = t,
            t
    }
    _updateTime(e) {
        const t = this._clip.duration,
            n = this.loop;
        let r = this.time + e,
            i = this._loopCount;
        const a = 2202 === n;
        if (0 === e) return - 1 === i ? r : a &&
        1 == (1 & i) ? t - r : r;
        if (2200 === n) {
            - 1 === i &&
            (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: {
                if (r >= t) r = t;
                else {
                    if (!(r < 0)) {
                        this.time = r;
                        break e
                    }
                    r = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this.time = r,
                    this._mixer.dispatchEvent({
                        type: 'finished',
                        action: this,
                        direction: e < 0 ? - 1 : 1
                    })
            }
        } else {
            if (
                - 1 === i &&
                (
                    e >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)
                ),
                r >= t ||
                r < 0
            ) {
                const n = Math.floor(r / t);
                r -= t * n,
                    i += Math.abs(n);
                const s = this.repetitions - i;
                if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    r = e > 0 ? t : 0,
                    this.time = r,
                    this._mixer.dispatchEvent({
                        type: 'finished',
                        action: this,
                        direction: e > 0 ? 1 : - 1
                    });
                else {
                    if (1 === s) {
                        const t = e < 0;
                        this._setEndings(t, !t, a)
                    } else this._setEndings(!1, !1, a);
                    this._loopCount = i,
                        this.time = r,
                        this._mixer.dispatchEvent({
                            type: 'loop',
                            action: this,
                            loopDelta: n
                        })
                }
            } else this.time = r;
            if (a && 1 == (1 & i)) return t - r
        }
        return r
    }
    _setEndings(e, t, n) {
        const r = this._interpolantSettings;
        n ? (r.endingStart = 2401, r.endingEnd = 2401) : (
            r.endingStart = e ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402,
                r.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402
        )
    }
    _scheduleFading(e, t, n) {
        const r = this._mixer,
            i = r.time;
        let a = this._weightInterpolant;
        null === a &&
        (a = r._lendControlInterpolant(), this._weightInterpolant = a);
        const s = a.parameterPositions,
            o = a.sampleValues;
        return s[0] = i,
            o[0] = t,
            s[1] = i + e,
            o[1] = n,
            this
    }
}
class AnimationMixer extends EventDispatcher {
    constructor(e) {
        super (),
            this._root = e,
            this._initMemoryManager(),
            this._accuIndex = 0,
            this.time = 0,
            this.timeScale = 1
    }
    _bindAction(e, t) {
        const n = e._localRoot ||
                this._root,
            r = e._clip.tracks,
            i = r.length,
            a = e._propertyBindings,
            s = e._interpolants,
            o = n.uuid,
            l = this._bindingsByRootAndName;
        let c = l[o];
        void 0 === c &&
        (c = {}, l[o] = c);
        for (let e = 0; e !== i; ++e) {
            const i = r[e],
                l = i.name;
            let h = c[l];
            if (void 0 !== h) a[e] = h;
            else {
                if (h = a[e], void 0 !== h) {
                    null === h._cacheIndex &&
                    (++h.referenceCount, this._addInactiveBinding(h, o, l));
                    continue
                }
                const r = t &&
                    t._propertyBindings[e].binding.parsedPath;
                h = new PropertyMixer(
                    PropertyBinding.create(n, l, r),
                    i.ValueTypeName,
                    i.getValueSize()
                ),
                    ++h.referenceCount,
                    this._addInactiveBinding(h, o, l),
                    a[e] = h
            }
            s[e].resultBuffer = h.buffer
        }
    }
    _activateAction(e) {
        if (!this._isActiveAction(e)) {
            if (null === e._cacheIndex) {
                const t = (e._localRoot || this._root).uuid,
                    n = e._clip.uuid,
                    r = this._actionsByClip[n];
                this._bindAction(e, r && r.knownActions[0]),
                    this._addInactiveAction(e, n, t)
            }
            const t = e._propertyBindings;
            for (let e = 0, n = t.length; e !== n; ++e) {
                const n = t[e];
                0 == n.useCount++ &&
                (this._lendBinding(n), n.saveOriginalState())
            }
            this._lendAction(e)
        }
    }
    _deactivateAction(e) {
        if (this._isActiveAction(e)) {
            const t = e._propertyBindings;
            for (let e = 0, n = t.length; e !== n; ++e) {
                const n = t[e];
                0 == --n.useCount &&
                (n.restoreOriginalState(), this._takeBackBinding(n))
            }
            this._takeBackAction(e)
        }
    }
    _initMemoryManager() {
        this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
        const e = this;
        this.stats = {
            actions: {
                get total() {
                    return e._actions.length
                },
                get inUse() {
                    return e._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return e._bindings.length
                },
                get inUse() {
                    return e._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return e._controlInterpolants.length
                },
                get inUse() {
                    return e._nActiveControlInterpolants
                }
            }
        }
    }
    _isActiveAction(e) {
        const t = e._cacheIndex;
        return null !== t &&
            t < this._nActiveActions
    }
    _addInactiveAction(e, t, n) {
        const r = this._actions,
            i = this._actionsByClip;
        let a = i[t];
        if (void 0 === a) a = {
            knownActions: [
                e
            ],
            actionByRoot: {
            }
        },
            e._byClipCacheIndex = 0,
            i[t] = a;
        else {
            const t = a.knownActions;
            e._byClipCacheIndex = t.length,
                t.push(e)
        }
        e._cacheIndex = r.length,
            r.push(e),
            a.actionByRoot[n] = e
    }
    _removeInactiveAction(e) {
        const t = this._actions,
            n = t[t.length - 1],
            r = e._cacheIndex;
        n._cacheIndex = r,
            t[r] = n,
            t.pop(),
            e._cacheIndex = null;
        const i = e._clip.uuid,
            a = this._actionsByClip,
            s = a[i],
            o = s.knownActions,
            l = o[o.length - 1],
            c = e._byClipCacheIndex;
        l._byClipCacheIndex = c,
            o[c] = l,
            o.pop(),
            e._byClipCacheIndex = null;
        delete s.actionByRoot[(e._localRoot || this._root).uuid],
        0 === o.length &&
        delete a[i],
            this._removeInactiveBindingsForAction(e)
    }
    _removeInactiveBindingsForAction(e) {
        const t = e._propertyBindings;
        for (let e = 0, n = t.length; e !== n; ++e) {
            const n = t[e];
            0 == --n.referenceCount &&
            this._removeInactiveBinding(n)
        }
    }
    _lendAction(e) {
        const t = this._actions,
            n = e._cacheIndex,
            r = this._nActiveActions++,
            i = t[r];
        e._cacheIndex = r,
            t[r] = e,
            i._cacheIndex = n,
            t[n] = i
    }
    _takeBackAction(e) {
        const t = this._actions,
            n = e._cacheIndex,
            r = --this._nActiveActions,
            i = t[r];
        e._cacheIndex = r,
            t[r] = e,
            i._cacheIndex = n,
            t[n] = i
    }
    _addInactiveBinding(e, t, n) {
        const r = this._bindingsByRootAndName,
            i = this._bindings;
        let a = r[t];
        void 0 === a &&
        (a = {}, r[t] = a),
            a[n] = e,
            e._cacheIndex = i.length,
            i.push(e)
    }
    _removeInactiveBinding(e) {
        const t = this._bindings,
            n = e.binding,
            r = n.rootNode.uuid,
            i = n.path,
            a = this._bindingsByRootAndName,
            s = a[r],
            o = t[t.length - 1],
            l = e._cacheIndex;
        o._cacheIndex = l,
            t[l] = o,
            t.pop(),
            delete s[i],
        0 === Object.keys(s).length &&
        delete a[r]
    }
    _lendBinding(e) {
        const t = this._bindings,
            n = e._cacheIndex,
            r = this._nActiveBindings++,
            i = t[r];
        e._cacheIndex = r,
            t[r] = e,
            i._cacheIndex = n,
            t[n] = i
    }
    _takeBackBinding(e) {
        const t = this._bindings,
            n = e._cacheIndex,
            r = --this._nActiveBindings,
            i = t[r];
        e._cacheIndex = r,
            t[r] = e,
            i._cacheIndex = n,
            t[n] = i
    }
    _lendControlInterpolant() {
        const e = this._controlInterpolants,
            t = this._nActiveControlInterpolants++;
        let n = e[t];
        return void 0 === n &&
        (
            n = new LinearInterpolant(
                new Float32Array(2),
                new Float32Array(2),
                1,
                this._controlInterpolantsResultBuffer
            ),
                n.__cacheIndex = t,
                e[t] = n
        ),
            n
    }
    _takeBackControlInterpolant(e) {
        const t = this._controlInterpolants,
            n = e.__cacheIndex,
            r = --this._nActiveControlInterpolants,
            i = t[r];
        e.__cacheIndex = r,
            t[r] = e,
            i.__cacheIndex = n,
            t[n] = i
    }
    clipAction(e, t, n) {
        const r = t ||
                this._root,
            i = r.uuid;
        let a = 'string' == typeof e ? AnimationClip.findByName(r, e) : e;
        const s = null !== a ? a.uuid : e,
            o = this._actionsByClip[s];
        let l = null;
        if (void 0 === n && (n = null !== a ? a.blendMode : 2500), void 0 !== o) {
            const e = o.actionByRoot[i];
            if (void 0 !== e && e.blendMode === n) return e;
            l = o.knownActions[0],
            null === a &&
            (a = l._clip)
        }
        if (null === a) return null;
        const c = new AnimationAction(this, a, t, n);
        return this._bindAction(c, l),
            this._addInactiveAction(c, s, i),
            c
    }
    existingAction(e, t) {
        const n = t ||
                this._root,
            r = n.uuid,
            i = 'string' == typeof e ? AnimationClip.findByName(n, e) : e,
            a = i ? i.uuid : e,
            s = this._actionsByClip[a];
        return void 0 !== s &&
            s.actionByRoot[r] ||
            null
    }
    stopAllAction() {
        const e = this._actions;
        for (let t = this._nActiveActions - 1; t >= 0; --t) e[t].stop();
        return this
    }
    update(e) {
        e *= this.timeScale;
        const t = this._actions,
            n = this._nActiveActions,
            r = this.time += e,
            i = Math.sign(e),
            a = this._accuIndex ^= 1;
        for (let s = 0; s !== n; ++s) {
            t[s]._update(r, e, i, a)
        }
        const s = this._bindings,
            o = this._nActiveBindings;
        for (let e = 0; e !== o; ++e) s[e].apply(a);
        return this
    }
    setTime(e) {
        this.time = 0;
        for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
        return this.update(e)
    }
    getRoot() {
        return this._root
    }
    uncacheClip(e) {
        const t = this._actions,
            n = e.uuid,
            r = this._actionsByClip,
            i = r[n];
        if (void 0 !== i) {
            const e = i.knownActions;
            for (let n = 0, r = e.length; n !== r; ++n) {
                const r = e[n];
                this._deactivateAction(r);
                const i = r._cacheIndex,
                    a = t[t.length - 1];
                r._cacheIndex = null,
                    r._byClipCacheIndex = null,
                    a._cacheIndex = i,
                    t[i] = a,
                    t.pop(),
                    this._removeInactiveBindingsForAction(r)
            }
            delete r[n]
        }
    }
    uncacheRoot(e) {
        const t = e.uuid,
            n = this._actionsByClip;
        for (const e in n) {
            const r = n[e].actionByRoot[t];
            void 0 !== r &&
            (this._deactivateAction(r), this._removeInactiveAction(r))
        }
        const r = this._bindingsByRootAndName[t];
        if (void 0 !== r) for (const e in r) {
            const t = r[e];
            t.restoreOriginalState(),
                this._removeInactiveBinding(t)
        }
    }
    uncacheAction(e, t) {
        const n = this.existingAction(e, t);
        null !== n &&
        (this._deactivateAction(n), this._removeInactiveAction(n))
    }
}
AnimationMixer.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class InstancedInterleavedBuffer extends InterleavedBuffer {
    constructor(e, t, n = 1) {
        super (e, t),
            this.meshPerAttribute = n ||
                1
    }
    copy(e) {
        return super.copy(e),
            this.meshPerAttribute = e.meshPerAttribute,
            this
    }
    clone(e) {
        const t = super.clone(e);
        return t.meshPerAttribute = this.meshPerAttribute,
            t
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.isInstancedInterleavedBuffer = !0,
            t.meshPerAttribute = this.meshPerAttribute,
            t
    }
}
InstancedInterleavedBuffer.prototype.isInstancedInterleavedBuffer = !0;
const _startP = new Vector3,
    _startEnd = new Vector3;
class Line3 {
    constructor(e = new Vector3, t = new Vector3) {
        this.start = e,
            this.end = t
    }
    set(e, t) {
        return this.start.copy(e),
            this.end.copy(t),
            this
    }
    copy(e) {
        return this.start.copy(e.start),
            this.end.copy(e.end),
            this
    }
    getCenter(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Line3: .getCenter() target is now required'),
                e = new Vector3
        ),
            e.addVectors(this.start, this.end).multiplyScalar(0.5)
    }
    delta(e) {
        return void 0 === e &&
        (
            console.warn('THREE.Line3: .delta() target is now required'),
                e = new Vector3
        ),
            e.subVectors(this.end, this.start)
    }
    distanceSq() {
        return this.start.distanceToSquared(this.end)
    }
    distance() {
        return this.start.distanceTo(this.end)
    }
    at(e, t) {
        return void 0 === t &&
        (
            console.warn('THREE.Line3: .at() target is now required'),
                t = new Vector3
        ),
            this.delta(t).multiplyScalar(e).add(this.start)
    }
    closestPointToPointParameter(e, t) {
        _startP.subVectors(e, this.start),
            _startEnd.subVectors(this.end, this.start);
        const n = _startEnd.dot(_startEnd);
        let r = _startEnd.dot(_startP) / n;
        return t &&
        (r = clamp$1(r, 0, 1)),
            r
    }
    closestPointToPoint(e, t, n) {
        const r = this.closestPointToPointParameter(e, t);
        return void 0 === n &&
        (
            console.warn('THREE.Line3: .closestPointToPoint() target is now required'),
                n = new Vector3
        ),
            this.delta(n).multiplyScalar(r).add(this.start)
    }
    applyMatrix4(e) {
        return this.start.applyMatrix4(e),
            this.end.applyMatrix4(e),
            this
    }
    equals(e) {
        return e.start.equals(this.start) &&
            e.end.equals(this.end)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class ImmediateRenderObject extends Object3D {
    constructor(e) {
        super (),
            this.material = e,
            this.render = function () {
            },
            this.hasPositions = !1,
            this.hasNormals = !1,
            this.hasColors = !1,
            this.hasUvs = !1,
            this.positionArray = null,
            this.normalArray = null,
            this.colorArray = null,
            this.uvArray = null,
            this.count = 0
    }
}
ImmediateRenderObject.prototype.isImmediateRenderObject = !0;
const _vector$2 = new Vector3,
    _boneMatrix = new Matrix4,
    _matrixWorldInv = new Matrix4;
class SkeletonHelper extends LineSegments {
    constructor(e) {
        const t = getBoneList(e),
            n = new BufferGeometry,
            r = [],
            i = [],
            a = new Color(0, 0, 1),
            s = new Color(0, 1, 0);
        for (let e = 0; e < t.length; e++) {
            const n = t[e];
            n.parent &&
            n.parent.isBone &&
            (
                r.push(0, 0, 0),
                    r.push(0, 0, 0),
                    i.push(a.r, a.g, a.b),
                    i.push(s.r, s.g, s.b)
            )
        }
        n.setAttribute('position', new Float32BufferAttribute(r, 3)),
            n.setAttribute('color', new Float32BufferAttribute(i, 3));
        super (
            n,
            new LineBasicMaterial({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })
        ),
            this.type = 'SkeletonHelper',
            this.isSkeletonHelper = !0,
            this.root = e,
            this.bones = t,
            this.matrix = e.matrixWorld,
            this.matrixAutoUpdate = !1
    }
    updateMatrixWorld(e) {
        const t = this.bones,
            n = this.geometry,
            r = n.getAttribute('position');
        _matrixWorldInv.copy(this.root.matrixWorld).invert();
        for (let e = 0, n = 0; e < t.length; e++) {
            const i = t[e];
            i.parent &&
            i.parent.isBone &&
            (
                _boneMatrix.multiplyMatrices(_matrixWorldInv, i.matrixWorld),
                    _vector$2.setFromMatrixPosition(_boneMatrix),
                    r.setXYZ(n, _vector$2.x, _vector$2.y, _vector$2.z),
                    _boneMatrix.multiplyMatrices(_matrixWorldInv, i.parent.matrixWorld),
                    _vector$2.setFromMatrixPosition(_boneMatrix),
                    r.setXYZ(n + 1, _vector$2.x, _vector$2.y, _vector$2.z),
                    n += 2
            )
        }
        n.getAttribute('position').needsUpdate = !0,
            super.updateMatrixWorld(e)
    }
}
function getBoneList(e) {
    const t = [];
    e &&
    e.isBone &&
    t.push(e);
    for (let n = 0; n < e.children.length; n++) t.push.apply(t, getBoneList(e.children[n]));
    return t
}
class GridHelper extends LineSegments {
    constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
        n = new Color(n),
            r = new Color(r);
        const i = t / 2,
            a = e / t,
            s = e / 2,
            o = [],
            l = [];
        for (let e = 0, c = 0, h = - s; e <= t; e++, h += a) {
            o.push( - s, 0, h, s, 0, h),
                o.push(h, 0, - s, h, 0, s);
            const t = e === i ? n : r;
            t.toArray(l, c),
                c += 3,
                t.toArray(l, c),
                c += 3,
                t.toArray(l, c),
                c += 3,
                t.toArray(l, c),
                c += 3
        }
        const c = new BufferGeometry;
        c.setAttribute('position', new Float32BufferAttribute(o, 3)),
            c.setAttribute('color', new Float32BufferAttribute(l, 3));
        super (c, new LineBasicMaterial({
            vertexColors: !0,
            toneMapped: !1
        })),
            this.type = 'GridHelper'
    }
}
const _floatView = new Float32Array(1);
new Int32Array(_floatView.buffer);
const backgroundMaterial = new MeshBasicMaterial({
    side: 1,
    depthWrite: !1,
    depthTest: !1
});
function mod(e, t) {
    return (e % t + t) % t
}
function modMinMax(e, t, n) {
    return mod(e - t, n - t) + t
}
function lerp(e, t, n) {
    return e + n * (t - e)
}
function iLerp(e, t, n) {
    return (n - e) / (t - e)
}
function mapValue(e, t, n, r, i, a = !1) {
    let s = iLerp(e, t, i);
    return a &&
    (s = clamp01(s)),
        lerp(n, r, s)
}
function clamp(e, t, n) {
    return Math.max(t, Math.min(n, e))
}
function smoothClamp01(e, t = 1) {
    const n = 1 / Math.log(2),
        r = 2 / Math.log(2),
        i = Math.max(r / t, r),
        a = Math.log2(n / i) / i,
        s = e => Math.pow(2, e * i),
        o = s(a),
        l = e => s(e + a - o),
        c = Math.min(2 / (t + 1), 1);
    return (h = (e - 0.5) * c + 0.5) < o ? l(h) : h > 1 - o ? (e => 1 - l(1 - e)) (h) : (e => clamp01(e)) (h);
    var h
}
function smoothClamp(e, t, n, r = 1) {
    return e = lerp(t, n, e = smoothClamp01(e = iLerp(t, n, e), r))
}
function clamp01(e) {
    return clamp(e, 0, 1)
}
new Mesh(new BoxGeometry, backgroundMaterial),
    Curve.create = function (e, t) {
        return console.log('THREE.Curve.create() has been deprecated'),
            e.prototype = Object.create(Curve.prototype),
            e.prototype.constructor = e,
            e.prototype.getPoint = t,
            e
    },
    Path.prototype.fromPoints = function (e) {
        return console.warn(
            'THREE.Path: .fromPoints() has been renamed to .setFromPoints().'
        ),
            this.setFromPoints(e)
    },
    GridHelper.prototype.setColors = function () {
        console.error(
            'THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.'
        )
    },
    SkeletonHelper.prototype.update = function () {
        console.error(
            'THREE.SkeletonHelper: update() no longer needs to be called.'
        )
    },
    Loader.prototype.extractUrlBase = function (e) {
        return console.warn(
            'THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.'
        ),
            LoaderUtils.extractUrlBase(e)
    },
    Loader.Handlers = {
        add: function () {
            console.error(
                'THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.'
            )
        },
        get: function () {
            console.error(
                'THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.'
            )
        }
    },
    Box3.prototype.center = function (e) {
        return console.warn('THREE.Box3: .center() has been renamed to .getCenter().'),
            this.getCenter(e)
    },
    Box3.prototype.empty = function () {
        return console.warn('THREE.Box3: .empty() has been renamed to .isEmpty().'),
            this.isEmpty()
    },
    Box3.prototype.isIntersectionBox = function (e) {
        return console.warn(
            'THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().'
        ),
            this.intersectsBox(e)
    },
    Box3.prototype.isIntersectionSphere = function (e) {
        return console.warn(
            'THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().'
        ),
            this.intersectsSphere(e)
    },
    Box3.prototype.size = function (e) {
        return console.warn('THREE.Box3: .size() has been renamed to .getSize().'),
            this.getSize(e)
    },
    Sphere.prototype.empty = function () {
        return console.warn('THREE.Sphere: .empty() has been renamed to .isEmpty().'),
            this.isEmpty()
    },
    Frustum.prototype.setFromMatrix = function (e) {
        return console.warn(
            'THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().'
        ),
            this.setFromProjectionMatrix(e)
    },
    Line3.prototype.center = function (e) {
        return console.warn('THREE.Line3: .center() has been renamed to .getCenter().'),
            this.getCenter(e)
    },
    Matrix3.prototype.flattenToArrayOffset = function (e, t) {
        return console.warn(
            'THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'
        ),
            this.toArray(e, t)
    },
    Matrix3.prototype.multiplyVector3 = function (e) {
        return console.warn(
            'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.'
        ),
            e.applyMatrix3(this)
    },
    Matrix3.prototype.multiplyVector3Array = function () {
        console.error('THREE.Matrix3: .multiplyVector3Array() has been removed.')
    },
    Matrix3.prototype.applyToBufferAttribute = function (e) {
        return console.warn(
            'THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.'
        ),
            e.applyMatrix3(this)
    },
    Matrix3.prototype.applyToVector3Array = function () {
        console.error('THREE.Matrix3: .applyToVector3Array() has been removed.')
    },
    Matrix3.prototype.getInverse = function (e) {
        return console.warn(
            'THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.'
        ),
            this.copy(e).invert()
    },
    Matrix4.prototype.extractPosition = function (e) {
        return console.warn(
            'THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().'
        ),
            this.copyPosition(e)
    },
    Matrix4.prototype.flattenToArrayOffset = function (e, t) {
        return console.warn(
            'THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'
        ),
            this.toArray(e, t)
    },
    Matrix4.prototype.getPosition = function () {
        return console.warn(
            'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.'
        ),
            (new Vector3).setFromMatrixColumn(this, 3)
    },
    Matrix4.prototype.setRotationFromQuaternion = function (e) {
        return console.warn(
            'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().'
        ),
            this.makeRotationFromQuaternion(e)
    },
    Matrix4.prototype.multiplyToArray = function () {
        console.warn('THREE.Matrix4: .multiplyToArray() has been removed.')
    },
    Matrix4.prototype.multiplyVector3 = function (e) {
        return console.warn(
            'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.'
        ),
            e.applyMatrix4(this)
    },
    Matrix4.prototype.multiplyVector4 = function (e) {
        return console.warn(
            'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.'
        ),
            e.applyMatrix4(this)
    },
    Matrix4.prototype.multiplyVector3Array = function () {
        console.error('THREE.Matrix4: .multiplyVector3Array() has been removed.')
    },
    Matrix4.prototype.rotateAxis = function (e) {
        console.warn(
            'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.'
        ),
            e.transformDirection(this)
    },
    Matrix4.prototype.crossVector = function (e) {
        return console.warn(
            'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.'
        ),
            e.applyMatrix4(this)
    },
    Matrix4.prototype.translate = function () {
        console.error('THREE.Matrix4: .translate() has been removed.')
    },
    Matrix4.prototype.rotateX = function () {
        console.error('THREE.Matrix4: .rotateX() has been removed.')
    },
    Matrix4.prototype.rotateY = function () {
        console.error('THREE.Matrix4: .rotateY() has been removed.')
    },
    Matrix4.prototype.rotateZ = function () {
        console.error('THREE.Matrix4: .rotateZ() has been removed.')
    },
    Matrix4.prototype.rotateByAxis = function () {
        console.error('THREE.Matrix4: .rotateByAxis() has been removed.')
    },
    Matrix4.prototype.applyToBufferAttribute = function (e) {
        return console.warn(
            'THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.'
        ),
            e.applyMatrix4(this)
    },
    Matrix4.prototype.applyToVector3Array = function () {
        console.error('THREE.Matrix4: .applyToVector3Array() has been removed.')
    },
    Matrix4.prototype.makeFrustum = function (e, t, n, r, i, a) {
        return console.warn(
            'THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.'
        ),
            this.makePerspective(e, t, r, n, i, a)
    },
    Matrix4.prototype.getInverse = function (e) {
        return console.warn(
            'THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.'
        ),
            this.copy(e).invert()
    },
    Plane.prototype.isIntersectionLine = function (e) {
        return console.warn(
            'THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().'
        ),
            this.intersectsLine(e)
    },
    Quaternion.prototype.multiplyVector3 = function (e) {
        return console.warn(
            'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.'
        ),
            e.applyQuaternion(this)
    },
    Quaternion.prototype.inverse = function () {
        return console.warn('THREE.Quaternion: .inverse() has been renamed to invert().'),
            this.invert()
    },
    Ray.prototype.isIntersectionBox = function (e) {
        return console.warn(
            'THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().'
        ),
            this.intersectsBox(e)
    },
    Ray.prototype.isIntersectionPlane = function (e) {
        return console.warn(
            'THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().'
        ),
            this.intersectsPlane(e)
    },
    Ray.prototype.isIntersectionSphere = function (e) {
        return console.warn(
            'THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().'
        ),
            this.intersectsSphere(e)
    },
    Triangle.prototype.area = function () {
        return console.warn('THREE.Triangle: .area() has been renamed to .getArea().'),
            this.getArea()
    },
    Triangle.prototype.barycoordFromPoint = function (e, t) {
        return console.warn(
            'THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'
        ),
            this.getBarycoord(e, t)
    },
    Triangle.prototype.midpoint = function (e) {
        return console.warn(
            'THREE.Triangle: .midpoint() has been renamed to .getMidpoint().'
        ),
            this.getMidpoint(e)
    },
    Triangle.prototypenormal = function (e) {
        return console.warn(
            'THREE.Triangle: .normal() has been renamed to .getNormal().'
        ),
            this.getNormal(e)
    },
    Triangle.prototype.plane = function (e) {
        return console.warn('THREE.Triangle: .plane() has been renamed to .getPlane().'),
            this.getPlane(e)
    },
    Triangle.barycoordFromPoint = function (e, t, n, r, i) {
        return console.warn(
            'THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'
        ),
            Triangle.getBarycoord(e, t, n, r, i)
    },
    Triangle.normal = function (e, t, n, r) {
        return console.warn(
            'THREE.Triangle: .normal() has been renamed to .getNormal().'
        ),
            Triangle.getNormal(e, t, n, r)
    },
    Shape.prototype.extractAllPoints = function (e) {
        return console.warn(
            'THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.'
        ),
            this.extractPoints(e)
    },
    Shape.prototype.extrude = function (e) {
        return console.warn(
            'THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.'
        ),
            new ExtrudeGeometry(this, e)
    },
    Shape.prototype.makeGeometry = function (e) {
        return console.warn(
            'THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.'
        ),
            new ShapeGeometry(this, e)
    },
    Vector2.prototype.fromAttribute = function (e, t, n) {
        return console.warn(
            'THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().'
        ),
            this.fromBufferAttribute(e, t, n)
    },
    Vector2.prototype.distanceToManhattan = function (e) {
        return console.warn(
            'THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'
        ),
            this.manhattanDistanceTo(e)
    },
    Vector2.prototype.lengthManhattan = function () {
        return console.warn(
            'THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().'
        ),
            this.manhattanLength()
    },
    Vector3.prototype.setEulerFromRotationMatrix = function () {
        console.error(
            'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.'
        )
    },
    Vector3.prototype.setEulerFromQuaternion = function () {
        console.error(
            'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.'
        )
    },
    Vector3.prototype.getPositionFromMatrix = function (e) {
        return console.warn(
            'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().'
        ),
            this.setFromMatrixPosition(e)
    },
    Vector3.prototype.getScaleFromMatrix = function (e) {
        return console.warn(
            'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().'
        ),
            this.setFromMatrixScale(e)
    },
    Vector3.prototype.getColumnFromMatrix = function (e, t) {
        return console.warn(
            'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().'
        ),
            this.setFromMatrixColumn(t, e)
    },
    Vector3.prototype.applyProjection = function (e) {
        return console.warn(
            'THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.'
        ),
            this.applyMatrix4(e)
    },
    Vector3.prototype.fromAttribute = function (e, t, n) {
        return console.warn(
            'THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().'
        ),
            this.fromBufferAttribute(e, t, n)
    },
    Vector3.prototype.distanceToManhattan = function (e) {
        return console.warn(
            'THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'
        ),
            this.manhattanDistanceTo(e)
    },
    Vector3.prototype.lengthManhattan = function () {
        return console.warn(
            'THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().'
        ),
            this.manhattanLength()
    },
    Vector4.prototype.fromAttribute = function (e, t, n) {
        return console.warn(
            'THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().'
        ),
            this.fromBufferAttribute(e, t, n)
    },
    Vector4.prototype.lengthManhattan = function () {
        return console.warn(
            'THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().'
        ),
            this.manhattanLength()
    },
    Object3D.prototype.getChildByName = function (e) {
        return console.warn(
            'THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().'
        ),
            this.getObjectByName(e)
    },
    Object3D.prototype.renderDepth = function () {
        console.warn(
            'THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.'
        )
    },
    Object3D.prototype.translate = function (e, t) {
        return console.warn(
            'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.'
        ),
            this.translateOnAxis(t, e)
    },
    Object3D.prototype.getWorldRotation = function () {
        console.error(
            'THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.'
        )
    },
    Object3D.prototype.applyMatrix = function (e) {
        return console.warn(
            'THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().'
        ),
            this.applyMatrix4(e)
    },
    Object.defineProperties(
        Object3D.prototype,
        {
            eulerOrder: {
                get: function () {
                    return console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'),
                        this.rotation.order
                },
                set: function (e) {
                    console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'),
                        this.rotation.order = e
                }
            },
            useQuaternion: {
                get: function () {
                    console.warn(
                        'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
                    )
                },
                set: function () {
                    console.warn(
                        'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
                    )
                }
            }
        }
    ),
    Mesh.prototype.setDrawMode = function () {
        console.error(
            'THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.'
        )
    },
    Object.defineProperties(
        Mesh.prototype,
        {
            drawMode: {
                get: function () {
                    return console.error(
                        'THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.'
                    ),
                        0
                },
                set: function () {
                    console.error(
                        'THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.'
                    )
                }
            }
        }
    ),
    SkinnedMesh.prototype.initBones = function () {
        console.error('THREE.SkinnedMesh: initBones() has been removed.')
    },
    PerspectiveCamera.prototype.setLens = function (e, t) {
        console.warn(
            'THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.'
        ),
        void 0 !== t &&
        (this.filmGauge = t),
            this.setFocalLength(e)
    },
    Object.defineProperties(
        Light.prototype,
        {
            onlyShadow: {
                set: function () {
                    console.warn('THREE.Light: .onlyShadow has been removed.')
                }
            },
            shadowCameraFov: {
                set: function (e) {
                    console.warn('THREE.Light: .shadowCameraFov is now .shadow.camera.fov.'),
                        this.shadow.camera.fov = e
                }
            },
            shadowCameraLeft: {
                set: function (e) {
                    console.warn('THREE.Light: .shadowCameraLeft is now .shadow.camera.left.'),
                        this.shadow.camera.left = e
                }
            },
            shadowCameraRight: {
                set: function (e) {
                    console.warn(
                        'THREE.Light: .shadowCameraRight is now .shadow.camera.right.'
                    ),
                        this.shadow.camera.right = e
                }
            },
            shadowCameraTop: {
                set: function (e) {
                    console.warn('THREE.Light: .shadowCameraTop is now .shadow.camera.top.'),
                        this.shadow.camera.top = e
                }
            },
            shadowCameraBottom: {
                set: function (e) {
                    console.warn(
                        'THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.'
                    ),
                        this.shadow.camera.bottom = e
                }
            },
            shadowCameraNear: {
                set: function (e) {
                    console.warn('THREE.Light: .shadowCameraNear is now .shadow.camera.near.'),
                        this.shadow.camera.near = e
                }
            },
            shadowCameraFar: {
                set: function (e) {
                    console.warn('THREE.Light: .shadowCameraFar is now .shadow.camera.far.'),
                        this.shadow.camera.far = e
                }
            },
            shadowCameraVisible: {
                set: function () {
                    console.warn(
                        'THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.'
                    )
                }
            },
            shadowBias: {
                set: function (e) {
                    console.warn('THREE.Light: .shadowBias is now .shadow.bias.'),
                        this.shadow.bias = e
                }
            },
            shadowDarkness: {
                set: function () {
                    console.warn('THREE.Light: .shadowDarkness has been removed.')
                }
            },
            shadowMapWidth: {
                set: function (e) {
                    console.warn('THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.'),
                        this.shadow.mapSize.width = e
                }
            },
            shadowMapHeight: {
                set: function (e) {
                    console.warn(
                        'THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.'
                    ),
                        this.shadow.mapSize.height = e
                }
            }
        }
    ),
    Object.defineProperties(
        BufferAttribute.prototype,
        {
            length: {
                get: function () {
                    return console.warn(
                        'THREE.BufferAttribute: .length has been deprecated. Use .count instead.'
                    ),
                        this.array.length
                }
            },
            dynamic: {
                get: function () {
                    return console.warn(
                        'THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'
                    ),
                    35048 === this.usage
                },
                set: function () {
                    console.warn(
                        'THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'
                    ),
                        this.setUsage(35048)
                }
            }
        }
    ),
    BufferAttribute.prototype.setDynamic = function (e) {
        return console.warn(
            'THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.'
        ),
            this.setUsage(!0 === e ? 35048 : 35044),
            this
    },
    BufferAttribute.prototype.copyIndicesArray = function () {
        console.error(
            'THREE.BufferAttribute: .copyIndicesArray() has been removed.'
        )
    },
    BufferAttribute.prototype.setArray = function () {
        console.error(
            'THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers'
        )
    },
    BufferGeometry.prototype.addIndex = function (e) {
        console.warn(
            'THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().'
        ),
            this.setIndex(e)
    },
    BufferGeometry.prototype.addAttribute = function (e, t) {
        return console.warn(
            'THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().'
        ),
            t &&
            t.isBufferAttribute ||
            t &&
            t.isInterleavedBufferAttribute ? 'index' === e ? (
                console.warn(
                    'THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.'
                ),
                    this.setIndex(t),
                    this
            ) : this.setAttribute(e, t) : (
                console.warn(
                    'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).'
                ),
                    this.setAttribute(e, new BufferAttribute(arguments[1], arguments[2]))
            )
    },
    BufferGeometry.prototype.addDrawCall = function (e, t, n) {
        void 0 !== n &&
        console.warn(
            'THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.'
        ),
            console.warn('THREE.BufferGeometry: .addDrawCall() is now .addGroup().'),
            this.addGroup(e, t)
    },
    BufferGeometry.prototype.clearDrawCalls = function () {
        console.warn(
            'THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().'
        ),
            this.clearGroups()
    },
    BufferGeometry.prototype.computeOffsets = function () {
        console.warn('THREE.BufferGeometry: .computeOffsets() has been removed.')
    },
    BufferGeometry.prototype.removeAttribute = function (e) {
        return console.warn(
            'THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().'
        ),
            this.deleteAttribute(e)
    },
    BufferGeometry.prototype.applyMatrix = function (e) {
        return console.warn(
            'THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().'
        ),
            this.applyMatrix4(e)
    },
    Object.defineProperties(
        BufferGeometry.prototype,
        {
            drawcalls: {
                get: function () {
                    return console.error(
                        'THREE.BufferGeometry: .drawcalls has been renamed to .groups.'
                    ),
                        this.groups
                }
            },
            offsets: {
                get: function () {
                    return console.warn(
                        'THREE.BufferGeometry: .offsets has been renamed to .groups.'
                    ),
                        this.groups
                }
            }
        }
    ),
    InterleavedBuffer.prototype.setDynamic = function (e) {
        return console.warn(
            'THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.'
        ),
            this.setUsage(!0 === e ? 35048 : 35044),
            this
    },
    InterleavedBuffer.prototype.setArray = function () {
        console.error(
            'THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers'
        )
    },
    ExtrudeGeometry.prototype.getArrays = function () {
        console.error('THREE.ExtrudeGeometry: .getArrays() has been removed.')
    },
    ExtrudeGeometry.prototype.addShapeList = function () {
        console.error('THREE.ExtrudeGeometry: .addShapeList() has been removed.')
    },
    ExtrudeGeometry.prototype.addShape = function () {
        console.error('THREE.ExtrudeGeometry: .addShape() has been removed.')
    },
    Scene.prototype.dispose = function () {
        console.error('THREE.Scene: .dispose() has been removed.')
    },
    Object.defineProperties(
        Material.prototype,
        {
            wrapAround: {
                get: function () {
                    console.warn('THREE.Material: .wrapAround has been removed.')
                },
                set: function () {
                    console.warn('THREE.Material: .wrapAround has been removed.')
                }
            },
            overdraw: {
                get: function () {
                    console.warn('THREE.Material: .overdraw has been removed.')
                },
                set: function () {
                    console.warn('THREE.Material: .overdraw has been removed.')
                }
            },
            wrapRGB: {
                get: function () {
                    return console.warn('THREE.Material: .wrapRGB has been removed.'),
                        new Color
                }
            },
            shading: {
                get: function () {
                    console.error(
                        'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.'
                    )
                },
                set: function (e) {
                    console.warn(
                        'THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.'
                    ),
                        this.flatShading = 1 === e
                }
            },
            stencilMask: {
                get: function () {
                    return console.warn(
                        'THREE.' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.'
                    ),
                        this.stencilFuncMask
                },
                set: function (e) {
                    console.warn(
                        'THREE.' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.'
                    ),
                        this.stencilFuncMask = e
                }
            }
        }
    ),
    Object.defineProperties(
        ShaderMaterial.prototype,
        {
            derivatives: {
                get: function () {
                    return console.warn(
                        'THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'
                    ),
                        this.extensions.derivatives
                },
                set: function (e) {
                    console.warn(
                        'THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'
                    ),
                        this.extensions.derivatives = e
                }
            }
        }
    ),
WebGLRenderer.prototype.clearTarget = function (e, t, n, r) {
    console.warn(
        'THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.'
    ),
        this.setRenderTarget(e),
        this.clear(t, n, r)
},
WebGLRenderer.prototype.animate = function (e) {
    console.warn(
        'THREE.WebGLRenderer: .animate() is now .setAnimationLoop().'
    ),
        this.setAnimationLoop(e)
},
WebGLRenderer.prototype.getCurrentRenderTarget = function () {
    return console.warn(
        'THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().'
    ),
        this.getRenderTarget()
},
WebGLRenderer.prototype.getMaxAnisotropy = function () {
    return console.warn(
        'THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().'
    ),
        this.capabilities.getMaxAnisotropy()
},
WebGLRenderer.prototype.getPrecision = function () {
    return console.warn(
        'THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.'
    ),
        this.capabilities.precision
},
WebGLRenderer.prototype.resetGLState = function () {
    return console.warn(
        'THREE.WebGLRenderer: .resetGLState() is now .state.reset().'
    ),
        this.state.reset()
},
WebGLRenderer.prototype.supportsFloatTextures = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( \'OES_texture_float\' ).'
    ),
        this.extensions.get('OES_texture_float')
},
WebGLRenderer.prototype.supportsHalfFloatTextures = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( \'OES_texture_half_float\' ).'
    ),
        this.extensions.get('OES_texture_half_float')
},
WebGLRenderer.prototype.supportsStandardDerivatives = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( \'OES_standard_derivatives\' ).'
    ),
        this.extensions.get('OES_standard_derivatives')
},
WebGLRenderer.prototype.supportsCompressedTextureS3TC = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( \'WEBGL_compressed_texture_s3tc\' ).'
    ),
        this.extensions.get('WEBGL_compressed_texture_s3tc')
},
WebGLRenderer.prototype.supportsCompressedTexturePVRTC = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( \'WEBGL_compressed_texture_pvrtc\' ).'
    ),
        this.extensions.get('WEBGL_compressed_texture_pvrtc')
},
WebGLRenderer.prototype.supportsBlendMinMax = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( \'EXT_blend_minmax\' ).'
    ),
        this.extensions.get('EXT_blend_minmax')
},
WebGLRenderer.prototype.supportsVertexTextures = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.'
    ),
        this.capabilities.vertexTextures
},
WebGLRenderer.prototype.supportsInstancedArrays = function () {
    return console.warn(
        'THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( \'ANGLE_instanced_arrays\' ).'
    ),
        this.extensions.get('ANGLE_instanced_arrays')
},
WebGLRenderer.prototype.enableScissorTest = function (e) {
    console.warn(
        'THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().'
    ),
        this.setScissorTest(e)
},
WebGLRenderer.prototype.initMaterial = function () {
    console.warn('THREE.WebGLRenderer: .initMaterial() has been removed.')
},
WebGLRenderer.prototype.addPrePlugin = function () {
    console.warn('THREE.WebGLRenderer: .addPrePlugin() has been removed.')
},
WebGLRenderer.prototype.addPostPlugin = function () {
    console.warn('THREE.WebGLRenderer: .addPostPlugin() has been removed.')
},
WebGLRenderer.prototype.updateShadowMap = function () {
    console.warn('THREE.WebGLRenderer: .updateShadowMap() has been removed.')
},
WebGLRenderer.prototype.setFaceCulling = function () {
    console.warn('THREE.WebGLRenderer: .setFaceCulling() has been removed.')
},
WebGLRenderer.prototype.allocTextureUnit = function () {
    console.warn('THREE.WebGLRenderer: .allocTextureUnit() has been removed.')
},
WebGLRenderer.prototype.setTexture = function () {
    console.warn('THREE.WebGLRenderer: .setTexture() has been removed.')
},
WebGLRenderer.prototype.setTexture2D = function () {
    console.warn('THREE.WebGLRenderer: .setTexture2D() has been removed.')
},
WebGLRenderer.prototype.setTextureCube = function () {
    console.warn('THREE.WebGLRenderer: .setTextureCube() has been removed.')
},
WebGLRenderer.prototype.getActiveMipMapLevel = function () {
    return console.warn(
        'THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().'
    ),
        this.getActiveMipmapLevel()
},
Object.defineProperties(
    WebGLRenderer.prototype,
    {
        shadowMapEnabled: {
            get: function () {
                return this.shadowMap.enabled
            },
            set: function (e) {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.'
                ),
                    this.shadowMap.enabled = e
            }
        },
        shadowMapType: {
            get: function () {
                return this.shadowMap.type
            },
            set: function (e) {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.'
                ),
                    this.shadowMap.type = e
            }
        },
        shadowMapCullFace: {
            get: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'
                )
            },
            set: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'
                )
            }
        },
        context: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.'
                ),
                    this.getContext()
            }
        },
        vr: {
            get: function () {
                return console.warn('THREE.WebGLRenderer: .vr has been renamed to .xr'),
                    this.xr
            }
        },
        gammaInput: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.'
                ),
                    !1
            },
            set: function () {
                console.warn(
                    'THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.'
                )
            }
        },
        gammaOutput: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.'
                ),
                    !1
            },
            set: function (e) {
                console.warn(
                    'THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.'
                ),
                    this.outputEncoding = !0 === e ? 3001 : 3000
            }
        },
        toneMappingWhitePoint: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.'
                ),
                    1
            },
            set: function () {
                console.warn(
                    'THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.'
                )
            }
        }
    }
),
Object.defineProperties(
    WebGLShadowMap.prototype,
    {
        cullFace: {
            get: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'
                )
            },
            set: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'
                )
            }
        },
        renderReverseSided: {
            get: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'
                )
            },
            set: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'
                )
            }
        },
        renderSingleSided: {
            get: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'
                )
            },
            set: function () {
                console.warn(
                    'THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'
                )
            }
        }
    }
),
Object.defineProperties(
    WebGLRenderTarget.prototype,
    {
        wrapS: {
            get: function () {
                return console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'),
                    this.texture.wrapS
            },
            set: function (e) {
                console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'),
                    this.texture.wrapS = e
            }
        },
        wrapT: {
            get: function () {
                return console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'),
                    this.texture.wrapT
            },
            set: function (e) {
                console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'),
                    this.texture.wrapT = e
            }
        },
        magFilter: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'
                ),
                    this.texture.magFilter
            },
            set: function (e) {
                console.warn(
                    'THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'
                ),
                    this.texture.magFilter = e
            }
        },
        minFilter: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'
                ),
                    this.texture.minFilter
            },
            set: function (e) {
                console.warn(
                    'THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'
                ),
                    this.texture.minFilter = e
            }
        },
        anisotropy: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'
                ),
                    this.texture.anisotropy
            },
            set: function (e) {
                console.warn(
                    'THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'
                ),
                    this.texture.anisotropy = e
            }
        },
        offset: {
            get: function () {
                return console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'),
                    this.texture.offset
            },
            set: function (e) {
                console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'),
                    this.texture.offset = e
            }
        },
        repeat: {
            get: function () {
                return console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'),
                    this.texture.repeat
            },
            set: function (e) {
                console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'),
                    this.texture.repeat = e
            }
        },
        format: {
            get: function () {
                return console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'),
                    this.texture.format
            },
            set: function (e) {
                console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'),
                    this.texture.format = e
            }
        },
        type: {
            get: function () {
                return console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'),
                    this.texture.type
            },
            set: function (e) {
                console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'),
                    this.texture.type = e
            }
        },
        generateMipmaps: {
            get: function () {
                return console.warn(
                    'THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'
                ),
                    this.texture.generateMipmaps
            },
            set: function (e) {
                console.warn(
                    'THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'
                ),
                    this.texture.generateMipmaps = e
            }
        }
    }
),
Audio.prototype.load = function (e) {
    console.warn(
        'THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.'
    );
    const t = this;
    return (new AudioLoader).load(e, (function (e) {
        t.setBuffer(e)
    })),
        this
},
CubeCamera.prototype.updateCubeMap = function (e, t) {
    return console.warn('THREE.CubeCamera: .updateCubeMap() is now .update().'),
        this.update(e, t)
},
CubeCamera.prototype.clear = function (e, t, n, r) {
    return console.warn('THREE.CubeCamera: .clear() is now .renderTarget.clear().'),
        this.renderTarget.clear(e, t, n, r)
},
ImageUtils.crossOrigin = void 0,
ImageUtils.loadTexture = function (e, t, n, r) {
    console.warn(
        'THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.'
    );
    const i = new TextureLoader;
    i.setCrossOrigin(this.crossOrigin);
    const a = i.load(e, n, void 0, r);
    return t &&
    (a.mapping = t),
        a
},
ImageUtils.loadTextureCube = function (e, t, n, r) {
    console.warn(
        'THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.'
    );
    const i = new CubeTextureLoader;
    i.setCrossOrigin(this.crossOrigin);
    const a = i.load(e, n, void 0, r);
    return t &&
    (a.mapping = t),
        a
},
ImageUtils.loadCompressedTexture = function () {
    console.error(
        'THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.'
    )
},
ImageUtils.loadCompressedTextureCube = function () {
    console.error(
        'THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.'
    )
},
'undefined' != typeof __THREE_DEVTOOLS__ &&
__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', {
    detail: {
        revision: '128'
    }
})),
'undefined' != typeof window &&
(
    window.__THREE__ ? console.warn('WARNING: Multiple instances of Three.js being imported.') : window.__THREE__ = '128'
);
class GLTFLoader extends Loader {
    constructor(e) {
        super (e),
            this.dracoLoader = null,
            this.ktx2Loader = null,
            this.meshoptDecoder = null,
            this.pluginCallbacks = [],
            this.register((function (e) {
                return new GLTFMaterialsClearcoatExtension(e)
            })),
            this.register((function (e) {
                return new GLTFTextureBasisUExtension(e)
            })),
            this.register((function (e) {
                return new GLTFTextureWebPExtension(e)
            })),
            this.register(
                (function (e) {
                    return new GLTFMaterialsTransmissionExtension(e)
                })
            ),
            this.register((function (e) {
                return new GLTFLightsExtension(e)
            })),
            this.register((function (e) {
                return new GLTFMeshoptCompression(e)
            }))
    }
    load(e, t, n, r) {
        const i = this;
        let a;
        a = '' !== this.resourcePath ? this.resourcePath : '' !== this.path ? this.path : LoaderUtils.extractUrlBase(e),
            this.manager.itemStart(e);
        const s = function (t) {
                r ? r(t) : console.error(t),
                    i.manager.itemError(e),
                    i.manager.itemEnd(e)
            },
            o = new FileLoader(this.manager);
        o.setPath(this.path),
            o.setResponseType('arraybuffer'),
            o.setRequestHeader(this.requestHeader),
            o.setWithCredentials(this.withCredentials),
            o.load(
                e,
                (
                    function (n) {
                        try {
                            i.parse(n, a, (function (n) {
                                t(n),
                                    i.manager.itemEnd(e)
                            }), s)
                        } catch (e) {
                            s(e)
                        }
                    }
                ),
                n,
                s
            )
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e,
            this
    }
    setDDSLoader() {
        throw new Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
        )
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e,
            this
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e,
            this
    }
    register(e) {
        return - 1 === this.pluginCallbacks.indexOf(e) &&
        this.pluginCallbacks.push(e),
            this
    }
    unregister(e) {
        return - 1 !== this.pluginCallbacks.indexOf(e) &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
    }
    parse(e, t, n, r) {
        let i;
        const a = {},
            s = {};
        if ('string' == typeof e) i = e;
        else {
            if (
                LoaderUtils.decodeText(new Uint8Array(e, 0, 4)) === BINARY_EXTENSION_HEADER_MAGIC
            ) {
                try {
                    a[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(e)
                } catch (e) {
                    return void (r && r(e))
                }
                i = a[EXTENSIONS.KHR_BINARY_GLTF].content
            } else i = LoaderUtils.decodeText(new Uint8Array(e))
        }
        const o = JSON.parse(i);
        if (void 0 === o.asset || o.asset.version[0] < 2) return void (
            r &&
            r(
                new Error(
                    'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.'
                )
            )
        );
        const l = new GLTFParser(
            o,
            {
                path: t ||
                    this.resourcePath ||
                    '',
                crossOrigin: this.crossOrigin,
                requestHeader: this.requestHeader,
                manager: this.manager,
                ktx2Loader: this.ktx2Loader,
                meshoptDecoder: this.meshoptDecoder
            }
        );
        l.fileLoader.setRequestHeader(this.requestHeader);
        for (let e = 0; e < this.pluginCallbacks.length; e++) {
            const t = this.pluginCallbacks[e](l);
            s[t.name] = t,
                a[t.name] = !0
        }
        if (o.extensionsUsed) for (let e = 0; e < o.extensionsUsed.length; ++e) {
            const t = o.extensionsUsed[e],
                n = o.extensionsRequired ||
                    [];
            switch (t) {
                case EXTENSIONS.KHR_MATERIALS_UNLIT:
                    a[t] = new GLTFMaterialsUnlitExtension;
                    break;
                case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                    a[t] = new GLTFMaterialsPbrSpecularGlossinessExtension;
                    break;
                case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
                    a[t] = new GLTFDracoMeshCompressionExtension(o, this.dracoLoader);
                    break;
                case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
                    a[t] = new GLTFTextureTransformExtension;
                    break;
                case EXTENSIONS.KHR_MESH_QUANTIZATION:
                    a[t] = new GLTFMeshQuantizationExtension;
                    break;
                default:
                    n.indexOf(t) >= 0 &&
                    void 0 === s[t] &&
                    console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
            }
        }
        l.setExtensions(a),
            l.setPlugins(s),
            l.parse(n, r)
    }
}
function GLTFRegistry() {
    let e = {};
    return {
        get: function (t) {
            return e[t]
        },
        add: function (t, n) {
            e[t] = n
        },
        remove: function (t) {
            delete e[t]
        },
        removeAll: function () {
            e = {}
        }
    }
}
const EXTENSIONS = {
    KHR_BINARY_GLTF: 'KHR_binary_glTF',
    KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
    KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
    KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
    KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
    KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
    KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
    KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
    KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
    EXT_TEXTURE_WEBP: 'EXT_texture_webp',
    EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression'
};
class GLTFLightsExtension {
    constructor(e) {
        this.parser = e,
            this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL,
            this.cache = {
                refs: {
                },
                uses: {
                }
            }
    }
    _markDefs() {
        const e = this.parser,
            t = this.parser.json.nodes ||
                [];
        for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n];
            r.extensions &&
            r.extensions[this.name] &&
            void 0 !== r.extensions[this.name].light &&
            e._addNodeRef(this.cache, r.extensions[this.name].light)
        }
    }
    _loadLight(e) {
        const t = this.parser,
            n = 'light:' + e;
        let r = t.cache.get(n);
        if (r) return r;
        const i = t.json,
            a = ((i.extensions && i.extensions[this.name] || {
            }).lights || []) [e];
        let s;
        const o = new Color(16777215);
        void 0 !== a.color &&
        o.fromArray(a.color);
        const l = void 0 !== a.range ? a.range : 0;
        switch (a.type) {
            case 'directional':
                s = new DirectionalLight(o),
                    s.target.position.set(0, 0, - 1),
                    s.add(s.target);
                break;
            case 'point':
                s = new PointLight(o),
                    s.distance = l;
                break;
            case 'spot':
                s = new SpotLight(o),
                    s.distance = l,
                    a.spot = a.spot ||
                        {
                        },
                    a.spot.innerConeAngle = void 0 !== a.spot.innerConeAngle ? a.spot.innerConeAngle : 0,
                    a.spot.outerConeAngle = void 0 !== a.spot.outerConeAngle ? a.spot.outerConeAngle : Math.PI / 4,
                    s.angle = a.spot.outerConeAngle,
                    s.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle,
                    s.target.position.set(0, 0, - 1),
                    s.add(s.target);
                break;
            default:
                throw new Error('THREE.GLTFLoader: Unexpected light type: ' + a.type)
        }
        return s.position.set(0, 0, 0),
            s.decay = 2,
        void 0 !== a.intensity &&
        (s.intensity = a.intensity),
            s.name = t.createUniqueName(a.name || 'light_' + e),
            r = Promise.resolve(s),
            t.cache.add(n, r),
            r
    }
    createNodeAttachment(e) {
        const t = this,
            n = this.parser,
            r = n.json.nodes[e],
            i = (r.extensions && r.extensions[this.name] || {
            }).light;
        return void 0 === i ? null : this._loadLight(i).then((function (e) {
            return n._getNodeRef(t.cache, i, e)
        }))
    }
}
class GLTFMaterialsUnlitExtension {
    constructor() {
        this.name = EXTENSIONS.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return MeshBasicMaterial
    }
    extendParams(e, t, n) {
        const r = [];
        e.color = new Color(1, 1, 1),
            e.opacity = 1;
        const i = t.pbrMetallicRoughness;
        if (i) {
            if (Array.isArray(i.baseColorFactor)) {
                const t = i.baseColorFactor;
                e.color.fromArray(t),
                    e.opacity = t[3]
            }
            void 0 !== i.baseColorTexture &&
            r.push(n.assignTexture(e, 'map', i.baseColorTexture))
        }
        return Promise.all(r)
    }
}
class GLTFMaterialsClearcoatExtension {
    constructor(e) {
        this.parser = e,
            this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions &&
        t.extensions[this.name] ? MeshPhysicalMaterial : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            r = n.json.materials[e];
        if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
        const i = [],
            a = r.extensions[this.name];
        if (
            void 0 !== a.clearcoatFactor &&
            (t.clearcoat = a.clearcoatFactor),
            void 0 !== a.clearcoatTexture &&
            i.push(n.assignTexture(t, 'clearcoatMap', a.clearcoatTexture)),
            void 0 !== a.clearcoatRoughnessFactor &&
            (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
            void 0 !== a.clearcoatRoughnessTexture &&
            i.push(
                n.assignTexture(t, 'clearcoatRoughnessMap', a.clearcoatRoughnessTexture)
            ),
            void 0 !== a.clearcoatNormalTexture &&
            (
                i.push(
                    n.assignTexture(t, 'clearcoatNormalMap', a.clearcoatNormalTexture)
                ),
                void 0 !== a.clearcoatNormalTexture.scale
            )
        ) {
            const e = a.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new Vector2(e, - e)
        }
        return Promise.all(i)
    }
}
class GLTFMaterialsTransmissionExtension {
    constructor(e) {
        this.parser = e,
            this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions &&
        t.extensions[this.name] ? MeshPhysicalMaterial : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            r = n.json.materials[e];
        if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
        const i = [],
            a = r.extensions[this.name];
        return void 0 !== a.transmissionFactor &&
        (t.transmission = a.transmissionFactor),
        void 0 !== a.transmissionTexture &&
        i.push(n.assignTexture(t, 'transmissionMap', a.transmissionTexture)),
            Promise.all(i)
    }
}
class GLTFTextureBasisUExtension {
    constructor(e) {
        this.parser = e,
            this.name = EXTENSIONS.KHR_TEXTURE_BASISU
    }
    loadTexture(e) {
        const t = this.parser,
            n = t.json,
            r = n.textures[e];
        if (!r.extensions || !r.extensions[this.name]) return null;
        const i = r.extensions[this.name],
            a = n.images[i.source],
            s = t.options.ktx2Loader;
        if (!s) {
            if (
                n.extensionsRequired &&
                n.extensionsRequired.indexOf(this.name) >= 0
            ) throw new Error(
                'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures'
            );
            return null
        }
        return t.loadTextureImage(e, a, s)
    }
}
class GLTFTextureWebPExtension {
    constructor(e) {
        this.parser = e,
            this.name = EXTENSIONS.EXT_TEXTURE_WEBP,
            this.isSupported = null
    }
    loadTexture(e) {
        const t = this.name,
            n = this.parser,
            r = n.json,
            i = r.textures[e];
        if (!i.extensions || !i.extensions[t]) return null;
        const a = i.extensions[t],
            s = r.images[a.source];
        let o = n.textureLoader;
        if (s.uri) {
            const e = n.options.manager.getHandler(s.uri);
            null !== e &&
            (o = e)
        }
        return this.detectSupport().then(
            (
                function (i) {
                    if (i) return n.loadTextureImage(e, s, o);
                    if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw new Error('THREE.GLTFLoader: WebP required by asset but unsupported.');
                    return n.loadTexture(e)
                }
            )
        )
    }
    detectSupport() {
        return this.isSupported ||
        (
            this.isSupported = new Promise(
                (
                    function (e) {
                        const t = new Image;
                        t.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
                            t.onload = t.onerror = function () {
                                e(1 === t.height)
                            }
                    }
                )
            )
        ),
            this.isSupported
    }
}
class GLTFMeshoptCompression {
    constructor(e) {
        this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION,
            this.parser = e
    }
    loadBufferView(e) {
        const t = this.parser.json,
            n = t.bufferViews[e];
        if (n.extensions && n.extensions[this.name]) {
            const e = n.extensions[this.name],
                r = this.parser.getDependency('buffer', e.buffer),
                i = this.parser.options.meshoptDecoder;
            if (!i || !i.supported) {
                if (
                    t.extensionsRequired &&
                    t.extensionsRequired.indexOf(this.name) >= 0
                ) throw new Error(
                    'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files'
                );
                return null
            }
            return Promise.all([r,
                i.ready]).then(
                (
                    function (t) {
                        const n = e.byteOffset ||
                                0,
                            r = e.byteLength ||
                                0,
                            a = e.count,
                            s = e.byteStride,
                            o = new ArrayBuffer(a * s),
                            l = new Uint8Array(t[0], n, r);
                        return i.decodeGltfBuffer(new Uint8Array(o), a, s, l, e.mode, e.filter),
                            o
                    }
                )
            )
        }
        return null
    }
}
const BINARY_EXTENSION_HEADER_MAGIC = 'glTF',
    BINARY_EXTENSION_HEADER_LENGTH = 12,
    BINARY_EXTENSION_CHUNK_TYPES = {
        JSON: 1313821514,
        BIN: 5130562
    };
class GLTFBinaryExtension {
    constructor(e) {
        this.name = EXTENSIONS.KHR_BINARY_GLTF,
            this.content = null,
            this.body = null;
        const t = new DataView(e, 0, 12);
        if (
            this.header = {
                magic: LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            },
            this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC
        ) throw new Error('THREE.GLTFLoader: Unsupported glTF-Binary header.');
        if (this.header.version < 2) throw new Error('THREE.GLTFLoader: Legacy binary file detected.');
        const n = this.header.length - 12,
            r = new DataView(e, 12);
        let i = 0;
        for (; i < n; ) {
            const t = r.getUint32(i, !0);
            i += 4;
            const n = r.getUint32(i, !0);
            if (i += 4, n === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
                const n = new Uint8Array(e, 12 + i, t);
                this.content = LoaderUtils.decodeText(n)
            } else if (n === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
                const n = 12 + i;
                this.body = e.slice(n, n + t)
            }
            i += t
        }
        if (null === this.content) throw new Error('THREE.GLTFLoader: JSON content not found.')
    }
}
class GLTFDracoMeshCompressionExtension {
    constructor(e, t) {
        if (!t) throw new Error('THREE.GLTFLoader: No DRACOLoader instance provided.');
        this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION,
            this.json = e,
            this.dracoLoader = t,
            this.dracoLoader.preload()
    }
    decodePrimitive(e, t) {
        const n = this.json,
            r = this.dracoLoader,
            i = e.extensions[this.name].bufferView,
            a = e.extensions[this.name].attributes,
            s = {},
            o = {},
            l = {};
        for (const e in a) {
            const t = ATTRIBUTES[e] ||
                e.toLowerCase();
            s[t] = a[e]
        }
        for (const t in e.attributes) {
            const r = ATTRIBUTES[t] ||
                t.toLowerCase();
            if (void 0 !== a[t]) {
                const i = n.accessors[e.attributes[t]],
                    a = WEBGL_COMPONENT_TYPES[i.componentType];
                l[r] = a,
                    o[r] = !0 === i.normalized
            }
        }
        return t.getDependency('bufferView', i).then(
            (
                function (e) {
                    return new Promise(
                        (
                            function (t) {
                                r.decodeDracoFile(
                                    e,
                                    (
                                        function (e) {
                                            for (const t in e.attributes) {
                                                const n = e.attributes[t],
                                                    r = o[t];
                                                void 0 !== r &&
                                                (n.normalized = r)
                                            }
                                            t(e)
                                        }
                                    ),
                                    s,
                                    l
                                )
                            }
                        )
                    )
                }
            )
        )
    }
}
class GLTFTextureTransformExtension {
    constructor() {
        this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
        return e = e.clone(),
        void 0 !== t.offset &&
        e.offset.fromArray(t.offset),
        void 0 !== t.rotation &&
        (e.rotation = t.rotation),
        void 0 !== t.scale &&
        e.repeat.fromArray(t.scale),
        void 0 !== t.texCoord &&
        console.warn(
            'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'
        ),
            e.needsUpdate = !0,
            e
    }
}
class GLTFMeshStandardSGMaterial extends MeshStandardMaterial {
    constructor(e) {
        super (),
            this.isGLTFSpecularGlossinessMaterial = !0;
        const t = [
                '#ifdef USE_SPECULARMAP',
                '\tuniform sampler2D specularMap;',
                '#endif'
            ].join('\n'),
            n = [
                '#ifdef USE_GLOSSINESSMAP',
                '\tuniform sampler2D glossinessMap;',
                '#endif'
            ].join('\n'),
            r = [
                'vec3 specularFactor = specular;',
                '#ifdef USE_SPECULARMAP',
                '\tvec4 texelSpecular = texture2D( specularMap, vUv );',
                '\ttexelSpecular = sRGBToLinear( texelSpecular );',
                '\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
                '\tspecularFactor *= texelSpecular.rgb;',
                '#endif'
            ].join('\n'),
            i = [
                'float glossinessFactor = glossiness;',
                '#ifdef USE_GLOSSINESSMAP',
                '\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );',
                '\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
                '\tglossinessFactor *= texelGlossiness.a;',
                '#endif'
            ].join('\n'),
            a = [
                'PhysicalMaterial material;',
                'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
                'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
                'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
                'material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
                'material.specularRoughness += geometryRoughness;',
                'material.specularRoughness = min( material.specularRoughness, 1.0 );',
                'material.specularColor = specularFactor;'
            ].join('\n'),
            s = {
                specular: {
                    value: (new Color).setHex(16777215)
                },
                glossiness: {
                    value: 1
                },
                specularMap: {
                    value: null
                },
                glossinessMap: {
                    value: null
                }
            };
        this._extraUniforms = s,
            this.onBeforeCompile = function (e) {
                for (const t in s) e.uniforms[t] = s[t];
                e.fragmentShader = e.fragmentShader.replace('uniform float roughness;', 'uniform vec3 specular;').replace('uniform float metalness;', 'uniform float glossiness;').replace('#include <roughnessmap_pars_fragment>', t).replace('#include <metalnessmap_pars_fragment>', n).replace('#include <roughnessmap_fragment>', r).replace('#include <metalnessmap_fragment>', i).replace('#include <lights_physical_fragment>', a)
            },
            Object.defineProperties(
                this,
                {
                    specular: {
                        get: function () {
                            return s.specular.value
                        },
                        set: function (e) {
                            s.specular.value = e
                        }
                    },
                    specularMap: {
                        get: function () {
                            return s.specularMap.value
                        },
                        set: function (e) {
                            s.specularMap.value = e,
                                e ? this.defines.USE_SPECULARMAP = '' : delete this.defines.USE_SPECULARMAP
                        }
                    },
                    glossiness: {
                        get: function () {
                            return s.glossiness.value
                        },
                        set: function (e) {
                            s.glossiness.value = e
                        }
                    },
                    glossinessMap: {
                        get: function () {
                            return s.glossinessMap.value
                        },
                        set: function (e) {
                            s.glossinessMap.value = e,
                                e ? (this.defines.USE_GLOSSINESSMAP = '', this.defines.USE_UV = '') : (
                                    delete this.defines.USE_GLOSSINESSMAP,
                                        delete this.defines.USE_UV
                                )
                        }
                    }
                }
            ),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
            this.specularMap = e.specularMap,
            this.specular.copy(e.specular),
            this.glossinessMap = e.glossinessMap,
            this.glossiness = e.glossiness,
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this
    }
}
class GLTFMaterialsPbrSpecularGlossinessExtension {
    constructor() {
        this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
            this.specularGlossinessParams = [
                'color',
                'map',
                'lightMap',
                'lightMapIntensity',
                'aoMap',
                'aoMapIntensity',
                'emissive',
                'emissiveIntensity',
                'emissiveMap',
                'bumpMap',
                'bumpScale',
                'normalMap',
                'normalMapType',
                'displacementMap',
                'displacementScale',
                'displacementBias',
                'specularMap',
                'specular',
                'glossinessMap',
                'glossiness',
                'alphaMap',
                'envMap',
                'envMapIntensity',
                'refractionRatio'
            ]
    }
    getMaterialType() {
        return GLTFMeshStandardSGMaterial
    }
    extendParams(e, t, n) {
        const r = t.extensions[this.name];
        e.color = new Color(1, 1, 1),
            e.opacity = 1;
        const i = [];
        if (Array.isArray(r.diffuseFactor)) {
            const t = r.diffuseFactor;
            e.color.fromArray(t),
                e.opacity = t[3]
        }
        if (
            void 0 !== r.diffuseTexture &&
            i.push(n.assignTexture(e, 'map', r.diffuseTexture)),
                e.emissive = new Color(0, 0, 0),
                e.glossiness = void 0 !== r.glossinessFactor ? r.glossinessFactor : 1,
                e.specular = new Color(1, 1, 1),
            Array.isArray(r.specularFactor) &&
            e.specular.fromArray(r.specularFactor),
            void 0 !== r.specularGlossinessTexture
        ) {
            const t = r.specularGlossinessTexture;
            i.push(n.assignTexture(e, 'glossinessMap', t)),
                i.push(n.assignTexture(e, 'specularMap', t))
        }
        return Promise.all(i)
    }
    createMaterial(e) {
        const t = new GLTFMeshStandardSGMaterial(e);
        return t.fog = !0,
            t.color = e.color,
            t.map = void 0 === e.map ? null : e.map,
            t.lightMap = null,
            t.lightMapIntensity = 1,
            t.aoMap = void 0 === e.aoMap ? null : e.aoMap,
            t.aoMapIntensity = 1,
            t.emissive = e.emissive,
            t.emissiveIntensity = 1,
            t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap,
            t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap,
            t.bumpScale = 1,
            t.normalMap = void 0 === e.normalMap ? null : e.normalMap,
            t.normalMapType = 0,
        e.normalScale &&
        (t.normalScale = e.normalScale),
            t.displacementMap = null,
            t.displacementScale = 1,
            t.displacementBias = 0,
            t.specularMap = void 0 === e.specularMap ? null : e.specularMap,
            t.specular = e.specular,
            t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap,
            t.glossiness = e.glossiness,
            t.alphaMap = null,
            t.envMap = void 0 === e.envMap ? null : e.envMap,
            t.envMapIntensity = 1,
            t.refractionRatio = 0.98,
            t
    }
}
class GLTFMeshQuantizationExtension {
    constructor() {
        this.name = EXTENSIONS.KHR_MESH_QUANTIZATION
    }
}
class GLTFCubicSplineInterpolant extends Interpolant {
    constructor(e, t, n, r) {
        super (e, t, n, r)
    }
    copySampleValue_(e) {
        const t = this.resultBuffer,
            n = this.sampleValues,
            r = this.valueSize,
            i = e * r * 3 + r;
        for (let e = 0; e !== r; e++) t[e] = n[i + e];
        return t
    }
}
GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_,
    GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_,
    GLTFCubicSplineInterpolant.prototype.interpolate_ = function (e, t, n, r) {
        const i = this.resultBuffer,
            a = this.sampleValues,
            s = this.valueSize,
            o = 2 * s,
            l = 3 * s,
            c = r - t,
            h = (n - t) / c,
            u = h * h,
            d = u * h,
            p = e * l,
            m = p - l,
            f = - 2 * d + 3 * u,
            g = d - u,
            v = 1 - f,
            _ = g - u + h;
        for (let e = 0; e !== s; e++) {
            const t = a[m + e + s],
                n = a[m + e + o] * c,
                r = a[p + e + s],
                l = a[p + e] * c;
            i[e] = v * t + _ * n + f * r + g * l
        }
        return i
    };
const WEBGL_CONSTANTS = {
        FLOAT: 5126,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        LINEAR: 9729,
        REPEAT: 10497,
        SAMPLER_2D: 35678,
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
        UNSIGNED_BYTE: 5121,
        UNSIGNED_SHORT: 5123
    },
    WEBGL_COMPONENT_TYPES = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    },
    WEBGL_FILTERS = {
        9728: 1003,
        9729: 1006,
        9984: 1004,
        9985: 1007,
        9986: 1005,
        9987: 1008
    },
    WEBGL_WRAPPINGS = {
        33071: 1001,
        33648: 1002,
        10497: 1000
    },
    WEBGL_TYPE_SIZES = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    },
    ATTRIBUTES = {
        POSITION: 'position',
        NORMAL: 'normal',
        TANGENT: 'tangent',
        TEXCOORD_0: 'uv',
        TEXCOORD_1: 'uv2',
        COLOR_0: 'color',
        WEIGHTS_0: 'skinWeight',
        JOINTS_0: 'skinIndex'
    },
    PATH_PROPERTIES = {
        scale: 'scale',
        translation: 'position',
        rotation: 'quaternion',
        weights: 'morphTargetInfluences'
    },
    INTERPOLATION = {
        CUBICSPLINE: void 0,
        LINEAR: 2301,
        STEP: 2300
    },
    ALPHA_MODES = {
        OPAQUE: 'OPAQUE',
        MASK: 'MASK',
        BLEND: 'BLEND'
    };
function resolveURL(e, t) {
    return 'string' != typeof e ||
    '' === e ? '' : (
        /^https?:\/\//i.test(t) &&
        /^\//.test(e) &&
        (t = t.replace(/(^https?:\/\/[^\/]+).*/i, '$1')),
            /^(https?:)?\/\//i.test(e) ||
            /^data:.*,.*$/i.test(e) ||
            /^blob:.*$/i.test(e) ? e : t + e
    )
}
function createDefaultMaterial(e) {
    return void 0 === e.DefaultMaterial &&
    (
        e.DefaultMaterial = new MeshStandardMaterial({
            color: 16777215,
            emissive: 0,
            metalness: 1,
            roughness: 1,
            transparent: !1,
            depthTest: !0,
            side: 0
        })
    ),
        e.DefaultMaterial
}
function addUnknownExtensionsToUserData(e, t, n) {
    for (const r in n.extensions) void 0 === e[r] &&
    (
        t.userData.gltfExtensions = t.userData.gltfExtensions ||
            {
            },
            t.userData.gltfExtensions[r] = n.extensions[r]
    )
}
function assignExtrasToUserData(e, t) {
    void 0 !== t.extras &&
    (
        'object' == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn(
            'THREE.GLTFLoader: Ignoring primitive type .extras, ' + t.extras
        )
    )
}
function addMorphTargets(e, t, n) {
    let r = !1,
        i = !1;
    for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e];
        if (void 0 !== n.POSITION && (r = !0), void 0 !== n.NORMAL && (i = !0), r && i) break
    }
    if (!r && !i) return Promise.resolve(e);
    const a = [],
        s = [];
    for (let o = 0, l = t.length; o < l; o++) {
        const l = t[o];
        if (r) {
            const t = void 0 !== l.POSITION ? n.getDependency('accessor', l.POSITION) : e.attributes.position;
            a.push(t)
        }
        if (i) {
            const t = void 0 !== l.NORMAL ? n.getDependency('accessor', l.NORMAL) : e.attributes.normal;
            s.push(t)
        }
    }
    return Promise.all([Promise.all(a),
        Promise.all(s)]).then(
        (
            function (t) {
                const n = t[0],
                    a = t[1];
                return r &&
                (e.morphAttributes.position = n),
                i &&
                (e.morphAttributes.normal = a),
                    e.morphTargetsRelative = !0,
                    e
            }
        )
    )
}
function updateMorphTargets(e, t) {
    if (e.updateMorphTargets(), void 0 !== t.weights) for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
        const n = t.extras.targetNames;
        if (e.morphTargetInfluences.length === n.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t
        } else console.warn(
            'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.'
        )
    }
}
function createPrimitiveKey(e) {
    const t = e.extensions &&
        e.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    let n;
    return n = t ? 'draco:' + t.bufferView + ':' + t.indices + ':' + createAttributesKey(t.attributes) : e.indices + ':' + createAttributesKey(e.attributes) + ':' + e.mode,
        n
}
function createAttributesKey(e) {
    let t = '';
    const n = Object.keys(e).sort();
    for (let r = 0, i = n.length; r < i; r++) t += n[r] + ':' + e[n[r]] + ';';
    return t
}
function getNormalizedComponentScale(e) {
    switch (e) {
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error(
                'THREE.GLTFLoader: Unsupported normalized accessor component type.'
            )
    }
}
class GLTFParser {
    constructor(e = {}, t = {}) {
        this.json = e,
            this.extensions = {},
            this.plugins = {},
            this.options = t,
            this.cache = new GLTFRegistry,
            this.associations = new Map,
            this.primitiveCache = {},
            this.meshCache = {
                refs: {
                },
                uses: {
                }
            },
            this.cameraCache = {
                refs: {
                },
                uses: {
                }
            },
            this.lightCache = {
                refs: {
                },
                uses: {
                }
            },
            this.nodeNamesUsed = {},
            'undefined' != typeof createImageBitmap &&
            !1 === /Firefox/.test(navigator.userAgent) ? this.textureLoader = new ImageBitmapLoader(this.options.manager) : this.textureLoader = new TextureLoader(this.options.manager),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            this.fileLoader = new FileLoader(this.options.manager),
            this.fileLoader.setResponseType('arraybuffer'),
        'use-credentials' === this.options.crossOrigin &&
        this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(e) {
        this.extensions = e
    }
    setPlugins(e) {
        this.plugins = e
    }
    parse(e, t) {
        const n = this,
            r = this.json,
            i = this.extensions;
        this.cache.removeAll(),
            this._invokeAll((function (e) {
                return e._markDefs &&
                    e._markDefs()
            })),
            Promise.all(
                this._invokeAll((function (e) {
                    return e.beforeRoot &&
                        e.beforeRoot()
                }))
            ).then(
                (
                    function () {
                        return Promise.all(
                            [n.getDependencies('scene'),
                                n.getDependencies('animation'),
                                n.getDependencies('camera')]
                        )
                    }
                )
            ).then(
                (
                    function (t) {
                        const a = {
                            scene: t[0][r.scene ||
                            0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: r.asset,
                            parser: n,
                            userData: {
                            }
                        };
                        addUnknownExtensionsToUserData(i, a, r),
                            assignExtrasToUserData(a, r),
                            Promise.all(
                                n._invokeAll((function (e) {
                                    return e.afterRoot &&
                                        e.afterRoot(a)
                                }))
                            ).then((function () {
                                e(a)
                            }))
                    }
                )
            ).catch(t)
    }
    _markDefs() {
        const e = this.json.nodes ||
                [],
            t = this.json.skins ||
                [],
            n = this.json.meshes ||
                [];
        for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n].joints;
            for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0
        }
        for (let t = 0, r = e.length; t < r; t++) {
            const r = e[t];
            void 0 !== r.mesh &&
            (
                this._addNodeRef(this.meshCache, r.mesh),
                void 0 !== r.skin &&
                (n[r.mesh].isSkinnedMesh = !0)
            ),
            void 0 !== r.camera &&
            this._addNodeRef(this.cameraCache, r.camera)
        }
    }
    _addNodeRef(e, t) {
        void 0 !== t &&
        (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
    }
    _getNodeRef(e, t, n) {
        if (e.refs[t] <= 1) return n;
        const r = n.clone();
        return r.name += '_instance_' + e.uses[t]++,
            r
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let n = 0; n < t.length; n++) {
            const r = e(t[n]);
            if (r) return r
        }
        return null
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const n = [];
        for (let r = 0; r < t.length; r++) {
            const i = e(t[r]);
            i &&
            n.push(i)
        }
        return n
    }
    getDependency(e, t) {
        const n = e + ':' + t;
        let r = this.cache.get(n);
        if (!r) {
            switch (e) {
                case 'scene':
                    r = this.loadScene(t);
                    break;
                case 'node':
                    r = this.loadNode(t);
                    break;
                case 'mesh':
                    r = this._invokeOne((function (e) {
                        return e.loadMesh &&
                            e.loadMesh(t)
                    }));
                    break;
                case 'accessor':
                    r = this.loadAccessor(t);
                    break;
                case 'bufferView':
                    r = this._invokeOne((function (e) {
                        return e.loadBufferView &&
                            e.loadBufferView(t)
                    }));
                    break;
                case 'buffer':
                    r = this.loadBuffer(t);
                    break;
                case 'material':
                    r = this._invokeOne((function (e) {
                        return e.loadMaterial &&
                            e.loadMaterial(t)
                    }));
                    break;
                case 'texture':
                    r = this._invokeOne((function (e) {
                        return e.loadTexture &&
                            e.loadTexture(t)
                    }));
                    break;
                case 'skin':
                    r = this.loadSkin(t);
                    break;
                case 'animation':
                    r = this.loadAnimation(t);
                    break;
                case 'camera':
                    r = this.loadCamera(t);
                    break;
                default:
                    throw new Error('Unknown type: ' + e)
            }
            this.cache.add(n, r)
        }
        return r
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const n = this,
                r = this.json[e + ('mesh' === e ? 'es' : 's')] ||
                    [];
            t = Promise.all(r.map((function (t, r) {
                return n.getDependency(e, r)
            }))),
                this.cache.add(e, t)
        }
        return t
    }
    loadBuffer(e) {
        const t = this.json.buffers[e],
            n = this.fileLoader;
        if (t.type && 'arraybuffer' !== t.type) throw new Error('THREE.GLTFLoader: ' + t.type + ' buffer type is not supported.');
        if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
        const r = this.options;
        return new Promise(
            (
                function (e, i) {
                    n.load(
                        resolveURL(t.uri, r.path),
                        e,
                        void 0,
                        (
                            function () {
                                i(
                                    new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
                                )
                            }
                        )
                    )
                }
            )
        )
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency('buffer', t.buffer).then(
            (
                function (e) {
                    const n = t.byteLength ||
                            0,
                        r = t.byteOffset ||
                            0;
                    return e.slice(r, r + n)
                }
            )
        )
    }
    loadAccessor(e) {
        const t = this,
            n = this.json,
            r = this.json.accessors[e];
        if (void 0 === r.bufferView && void 0 === r.sparse) return Promise.resolve(null);
        const i = [];
        return void 0 !== r.bufferView ? i.push(this.getDependency('bufferView', r.bufferView)) : i.push(null),
        void 0 !== r.sparse &&
        (
            i.push(this.getDependency('bufferView', r.sparse.indices.bufferView)),
                i.push(this.getDependency('bufferView', r.sparse.values.bufferView))
        ),
            Promise.all(i).then(
                (
                    function (e) {
                        const i = e[0],
                            a = WEBGL_TYPE_SIZES[r.type],
                            s = WEBGL_COMPONENT_TYPES[r.componentType],
                            o = s.BYTES_PER_ELEMENT,
                            l = o * a,
                            c = r.byteOffset ||
                                0,
                            h = void 0 !== r.bufferView ? n.bufferViews[r.bufferView].byteStride : void 0,
                            u = !0 === r.normalized;
                        let d,
                            p;
                        if (h && h !== l) {
                            const e = Math.floor(c / h),
                                n = 'InterleavedBuffer:' + r.bufferView + ':' + r.componentType + ':' + e + ':' + r.count;
                            let l = t.cache.get(n);
                            l ||
                            (
                                d = new s(i, e * h, r.count * h / o),
                                    l = new InterleavedBuffer(d, h / o),
                                    t.cache.add(n, l)
                            ),
                                p = new InterleavedBufferAttribute(l, a, c % h / o, u)
                        } else d = null === i ? new s(r.count * a) : new s(i, c, r.count * a),
                            p = new BufferAttribute(d, a, u);
                        if (void 0 !== r.sparse) {
                            const t = WEBGL_TYPE_SIZES.SCALAR,
                                n = WEBGL_COMPONENT_TYPES[r.sparse.indices.componentType],
                                o = r.sparse.indices.byteOffset ||
                                    0,
                                l = r.sparse.values.byteOffset ||
                                    0,
                                c = new n(e[1], o, r.sparse.count * t),
                                h = new s(e[2], l, r.sparse.count * a);
                            null !== i &&
                            (
                                p = new BufferAttribute(p.array.slice(), p.itemSize, p.normalized)
                            );
                            for (let e = 0, t = c.length; e < t; e++) {
                                const t = c[e];
                                if (
                                    p.setX(t, h[e * a]),
                                    a >= 2 &&
                                    p.setY(t, h[e * a + 1]),
                                    a >= 3 &&
                                    p.setZ(t, h[e * a + 2]),
                                    a >= 4 &&
                                    p.setW(t, h[e * a + 3]),
                                    a >= 5
                                ) throw new Error(
                                    'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.'
                                )
                            }
                        }
                        return p
                    }
                )
            )
    }
    loadTexture(e) {
        const t = this.json,
            n = this.options,
            r = t.textures[e],
            i = t.images[r.source];
        let a = this.textureLoader;
        if (i.uri) {
            const e = n.manager.getHandler(i.uri);
            null !== e &&
            (a = e)
        }
        return this.loadTextureImage(e, i, a)
    }
    loadTextureImage(e, t, n) {
        const r = this,
            i = this.json,
            a = this.options,
            s = i.textures[e],
            o = self.URL ||
                self.webkitURL;
        let l = t.uri,
            c = !1,
            h = !0;
        if ('image/jpeg' === t.mimeType && (h = !1), void 0 !== t.bufferView) l = r.getDependency('bufferView', t.bufferView).then(
            (
                function (e) {
                    if ('image/png' === t.mimeType) {
                        const t = new DataView(e, 25, 1).getUint8(0, !1);
                        h = 6 === t ||
                            4 === t ||
                            3 === t
                    }
                    c = !0;
                    const n = new Blob([e], {
                        type: t.mimeType
                    });
                    return l = o.createObjectURL(n),
                        l
                }
            )
        );
        else if (void 0 === t.uri) throw new Error(
            'THREE.GLTFLoader: Image ' + e + ' is missing URI and bufferView'
        );
        return Promise.resolve(l).then(
            (
                function (e) {
                    return new Promise(
                        (
                            function (t, r) {
                                let i = t;
                                !0 === n.isImageBitmapLoader &&
                                (i = function (e) {
                                    t(new CanvasTexture(e))
                                }),
                                    n.load(resolveURL(e, a.path), i, void 0, r)
                            }
                        )
                    )
                }
            )
        ).then(
            (
                function (t) {
                    !0 === c &&
                    o.revokeObjectURL(l),
                        t.flipY = !1,
                    s.name &&
                    (t.name = s.name),
                    h ||
                    (t.format = 1022);
                    const n = (i.samplers || {
                        }) [s.sampler] ||
                        {
                        };
                    return t.magFilter = WEBGL_FILTERS[n.magFilter] ||
                        1006,
                        t.minFilter = WEBGL_FILTERS[n.minFilter] ||
                            1008,
                        t.wrapS = WEBGL_WRAPPINGS[n.wrapS] ||
                            1000,
                        t.wrapT = WEBGL_WRAPPINGS[n.wrapT] ||
                            1000,
                        r.associations.set(t, {
                            type: 'textures',
                            index: e
                        }),
                        t
                }
            )
        )
    }
    assignTexture(e, t, n) {
        const r = this;
        return this.getDependency('texture', n.index).then(
            (
                function (i) {
                    if (
                        void 0 === n.texCoord ||
                        0 == n.texCoord ||
                        'aoMap' === t &&
                        1 == n.texCoord ||
                        console.warn(
                            'THREE.GLTFLoader: Custom UV set ' + n.texCoord + ' for texture ' + t + ' not yet supported.'
                        ),
                            r.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]
                    ) {
                        const e = void 0 !== n.extensions ? n.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
                        if (e) {
                            const t = r.associations.get(i);
                            i = r.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(i, e),
                                r.associations.set(i, t)
                        }
                    }
                    e[t] = i
                }
            )
        )
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let n = e.material;
        const r = void 0 !== t.attributes.tangent,
            i = void 0 !== t.attributes.color,
            a = void 0 === t.attributes.normal,
            s = !0 === e.isSkinnedMesh,
            o = Object.keys(t.morphAttributes).length > 0,
            l = o &&
                void 0 !== t.morphAttributes.normal;
        if (e.isPoints) {
            const e = 'PointsMaterial:' + n.uuid;
            let t = this.cache.get(e);
            t ||
            (
                t = new PointsMaterial,
                    Material.prototype.copy.call(t, n),
                    t.color.copy(n.color),
                    t.map = n.map,
                    t.sizeAttenuation = !1,
                    this.cache.add(e, t)
            ),
                n = t
        } else if (e.isLine) {
            const e = 'LineBasicMaterial:' + n.uuid;
            let t = this.cache.get(e);
            t ||
            (
                t = new LineBasicMaterial,
                    Material.prototype.copy.call(t, n),
                    t.color.copy(n.color),
                    this.cache.add(e, t)
            ),
                n = t
        }
        if (r || i || a || s || o) {
            let e = 'ClonedMaterial:' + n.uuid + ':';
            n.isGLTFSpecularGlossinessMaterial &&
            (e += 'specular-glossiness:'),
            s &&
            (e += 'skinning:'),
            r &&
            (e += 'vertex-tangents:'),
            i &&
            (e += 'vertex-colors:'),
            a &&
            (e += 'flat-shading:'),
            o &&
            (e += 'morph-targets:'),
            l &&
            (e += 'morph-normals:');
            let t = this.cache.get(e);
            t ||
            (
                t = n.clone(),
                s &&
                (t.skinning = !0),
                i &&
                (t.vertexColors = !0),
                a &&
                (t.flatShading = !0),
                o &&
                (t.morphTargets = !0),
                l &&
                (t.morphNormals = !0),
                r &&
                (
                    t.vertexTangents = !0,
                    t.normalScale &&
                    (t.normalScale.y *= - 1),
                    t.clearcoatNormalScale &&
                    (t.clearcoatNormalScale.y *= - 1)
                ),
                    this.cache.add(e, t),
                    this.associations.set(t, this.associations.get(n))
            ),
                n = t
        }
        n.aoMap &&
        void 0 === t.attributes.uv2 &&
        void 0 !== t.attributes.uv &&
        t.setAttribute('uv2', t.attributes.uv),
            e.material = n
    }
    getMaterialType() {
        return MeshStandardMaterial
    }
    loadMaterial(e) {
        const t = this,
            n = this.json,
            r = this.extensions,
            i = n.materials[e];
        let a;
        const s = {},
            o = i.extensions ||
                {
                },
            l = [];
        if (o[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const e = r[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            a = e.getMaterialType(),
                l.push(e.extendParams(s, i, t))
        } else if (o[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
            const e = r[EXTENSIONS.KHR_MATERIALS_UNLIT];
            a = e.getMaterialType(),
                l.push(e.extendParams(s, i, t))
        } else {
            const n = i.pbrMetallicRoughness ||
                {
                };
            if (
                s.color = new Color(1, 1, 1),
                    s.opacity = 1,
                    Array.isArray(n.baseColorFactor)
            ) {
                const e = n.baseColorFactor;
                s.color.fromArray(e),
                    s.opacity = e[3]
            }
            void 0 !== n.baseColorTexture &&
            l.push(t.assignTexture(s, 'map', n.baseColorTexture)),
                s.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1,
                s.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1,
            void 0 !== n.metallicRoughnessTexture &&
            (
                l.push(t.assignTexture(s, 'metalnessMap', n.metallicRoughnessTexture)),
                    l.push(t.assignTexture(s, 'roughnessMap', n.metallicRoughnessTexture))
            ),
                a = this._invokeOne((function (t) {
                    return t.getMaterialType &&
                        t.getMaterialType(e)
                })),
                l.push(
                    Promise.all(
                        this._invokeAll(
                            (
                                function (t) {
                                    return t.extendMaterialParams &&
                                        t.extendMaterialParams(e, s)
                                }
                            )
                        )
                    )
                )
        }
        !0 === i.doubleSided &&
        (s.side = 2);
        const c = i.alphaMode ||
            ALPHA_MODES.OPAQUE;
        return c === ALPHA_MODES.BLEND ? (s.transparent = !0, s.depthWrite = !1) : (
            s.transparent = !1,
            c === ALPHA_MODES.MASK &&
            (s.alphaTest = void 0 !== i.alphaCutoff ? i.alphaCutoff : 0.5)
        ),
        void 0 !== i.normalTexture &&
        a !== MeshBasicMaterial &&
        (
            l.push(t.assignTexture(s, 'normalMap', i.normalTexture)),
                s.normalScale = new Vector2(1, - 1),
            void 0 !== i.normalTexture.scale &&
            s.normalScale.set(i.normalTexture.scale, - i.normalTexture.scale)
        ),
        void 0 !== i.occlusionTexture &&
        a !== MeshBasicMaterial &&
        (
            l.push(t.assignTexture(s, 'aoMap', i.occlusionTexture)),
            void 0 !== i.occlusionTexture.strength &&
            (s.aoMapIntensity = i.occlusionTexture.strength)
        ),
        void 0 !== i.emissiveFactor &&
        a !== MeshBasicMaterial &&
        (s.emissive = (new Color).fromArray(i.emissiveFactor)),
        void 0 !== i.emissiveTexture &&
        a !== MeshBasicMaterial &&
        l.push(t.assignTexture(s, 'emissiveMap', i.emissiveTexture)),
            Promise.all(l).then(
                (
                    function () {
                        let n;
                        return n = a === GLTFMeshStandardSGMaterial ? r[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(s) : new a(s),
                        i.name &&
                        (n.name = i.name),
                        n.map &&
                        (n.map.encoding = 3001),
                        n.emissiveMap &&
                        (n.emissiveMap.encoding = 3001),
                            assignExtrasToUserData(n, i),
                            t.associations.set(n, {
                                type: 'materials',
                                index: e
                            }),
                        i.extensions &&
                        addUnknownExtensionsToUserData(r, n, i),
                            n
                    }
                )
            )
    }
    createUniqueName(e) {
        const t = PropertyBinding.sanitizeNodeName(e || '');
        let n = t;
        for (let e = 1; this.nodeNamesUsed[n]; ++e) n = t + '_' + e;
        return this.nodeNamesUsed[n] = !0,
            n
    }
    loadGeometries(e) {
        const t = this,
            n = this.extensions,
            r = this.primitiveCache;
        function i(e) {
            return n[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function (n) {
                return addPrimitiveAttributes(n, e, t)
            }))
        }
        const a = [];
        for (let n = 0, s = e.length; n < s; n++) {
            const s = e[n],
                o = createPrimitiveKey(s),
                l = r[o];
            if (l) a.push(l.promise);
            else {
                let e;
                e = s.extensions &&
                s.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION] ? i(s) : addPrimitiveAttributes(new BufferGeometry, s, t),
                    r[o] = {
                        primitive: s,
                        promise: e
                    },
                    a.push(e)
            }
        }
        return Promise.all(a)
    }
    loadMesh(e) {
        const t = this,
            n = this.json,
            r = this.extensions,
            i = n.meshes[e],
            a = i.primitives,
            s = [];
        for (let e = 0, t = a.length; e < t; e++) {
            const t = void 0 === a[e].material ? createDefaultMaterial(this.cache) : this.getDependency('material', a[e].material);
            s.push(t)
        }
        return s.push(t.loadGeometries(a)),
            Promise.all(s).then(
                (
                    function (n) {
                        const s = n.slice(0, n.length - 1),
                            o = n[n.length - 1],
                            l = [];
                        for (let n = 0, c = o.length; n < c; n++) {
                            const c = o[n],
                                h = a[n];
                            let u;
                            const d = s[n];
                            if (
                                h.mode === WEBGL_CONSTANTS.TRIANGLES ||
                                h.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
                                h.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
                                void 0 === h.mode
                            ) u = !0 === i.isSkinnedMesh ? new SkinnedMesh(c, d) : new Mesh(c, d),
                            !0 !== u.isSkinnedMesh ||
                            u.geometry.attributes.skinWeight.normalized ||
                            u.normalizeSkinWeights(),
                                h.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ? u.geometry = toTrianglesDrawMode(u.geometry, 1) : h.mode === WEBGL_CONSTANTS.TRIANGLE_FAN &&
                                    (u.geometry = toTrianglesDrawMode(u.geometry, 2));
                            else if (h.mode === WEBGL_CONSTANTS.LINES) u = new LineSegments(c, d);
                            else if (h.mode === WEBGL_CONSTANTS.LINE_STRIP) u = new Line(c, d);
                            else if (h.mode === WEBGL_CONSTANTS.LINE_LOOP) u = new LineLoop(c, d);
                            else {
                                if (h.mode !== WEBGL_CONSTANTS.POINTS) throw new Error('THREE.GLTFLoader: Primitive mode unsupported: ' + h.mode);
                                u = new Points(c, d)
                            }
                            Object.keys(u.geometry.morphAttributes).length > 0 &&
                            updateMorphTargets(u, i),
                                u.name = t.createUniqueName(i.name || 'mesh_' + e),
                                assignExtrasToUserData(u, i),
                            h.extensions &&
                            addUnknownExtensionsToUserData(r, u, h),
                                t.assignFinalMaterial(u),
                                l.push(u)
                        }
                        if (1 === l.length) return l[0];
                        const c = new Group;
                        for (let e = 0, t = l.length; e < t; e++) c.add(l[e]);
                        return c
                    }
                )
            )
    }
    loadCamera(e) {
        let t;
        const n = this.json.cameras[e],
            r = n[n.type];
        if (r) return 'perspective' === n.type ? t = new PerspectiveCamera(
            MathUtils.radToDeg(r.yfov),
            r.aspectRatio ||
            1,
            r.znear ||
            1,
            r.zfar ||
            2000000
        ) : 'orthographic' === n.type &&
            (
                t = new OrthographicCamera( - r.xmag, r.xmag, r.ymag, - r.ymag, r.znear, r.zfar)
            ),
        n.name &&
        (t.name = this.createUniqueName(n.name)),
            assignExtrasToUserData(t, n),
            Promise.resolve(t);
        console.warn('THREE.GLTFLoader: Missing camera parameters.')
    }
    loadSkin(e) {
        const t = this.json.skins[e],
            n = {
                joints: t.joints
            };
        return void 0 === t.inverseBindMatrices ? Promise.resolve(n) : this.getDependency('accessor', t.inverseBindMatrices).then((function (e) {
            return n.inverseBindMatrices = e,
                n
        }))
    }
    loadAnimation(e) {
        const t = this.json.animations[e],
            n = [],
            r = [],
            i = [],
            a = [],
            s = [];
        for (let e = 0, o = t.channels.length; e < o; e++) {
            const o = t.channels[e],
                l = t.samplers[o.sampler],
                c = o.target,
                h = void 0 !== c.node ? c.node : c.id,
                u = void 0 !== t.parameters ? t.parameters[l.input] : l.input,
                d = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
            n.push(this.getDependency('node', h)),
                r.push(this.getDependency('accessor', u)),
                i.push(this.getDependency('accessor', d)),
                a.push(l),
                s.push(c)
        }
        return Promise.all(
            [Promise.all(n),
                Promise.all(r),
                Promise.all(i),
                Promise.all(a),
                Promise.all(s)]
        ).then(
            (
                function (n) {
                    const r = n[0],
                        i = n[1],
                        a = n[2],
                        s = n[3],
                        o = n[4],
                        l = [];
                    for (let e = 0, t = r.length; e < t; e++) {
                        const t = r[e],
                            n = i[e],
                            c = a[e],
                            h = s[e],
                            u = o[e];
                        if (void 0 === t) continue;
                        let d;
                        switch (
                            t.updateMatrix(),
                                t.matrixAutoUpdate = !0,
                                PATH_PROPERTIES[u.path]
                            ) {
                            case PATH_PROPERTIES.weights:
                                d = NumberKeyframeTrack;
                                break;
                            case PATH_PROPERTIES.rotation:
                                d = QuaternionKeyframeTrack;
                                break;
                            default:
                                d = VectorKeyframeTrack
                        }
                        const p = t.name ? t.name : t.uuid,
                            m = void 0 !== h.interpolation ? INTERPOLATION[h.interpolation] : 2301,
                            f = [];
                        PATH_PROPERTIES[u.path] === PATH_PROPERTIES.weights ? t.traverse(
                            (
                                function (e) {
                                    !0 === e.isMesh &&
                                    e.morphTargetInfluences &&
                                    f.push(e.name ? e.name : e.uuid)
                                }
                            )
                        ) : f.push(p);
                        let g = c.array;
                        if (c.normalized) {
                            const e = getNormalizedComponentScale(g.constructor),
                                t = new Float32Array(g.length);
                            for (let n = 0, r = g.length; n < r; n++) t[n] = g[n] * e;
                            g = t
                        }
                        for (let e = 0, t = f.length; e < t; e++) {
                            const t = new d(f[e] + '.' + PATH_PROPERTIES[u.path], n.array, g, m);
                            'CUBICSPLINE' === h.interpolation &&
                            (
                                t.createInterpolant = function (e) {
                                    return new GLTFCubicSplineInterpolant(this.times, this.values, this.getValueSize() / 3, e)
                                },
                                    t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
                            ),
                                l.push(t)
                        }
                    }
                    const c = t.name ? t.name : 'animation_' + e;
                    return new AnimationClip(c, void 0, l)
                }
            )
        )
    }
    createNodeMesh(e) {
        const t = this.json,
            n = this,
            r = t.nodes[e];
        return void 0 === r.mesh ? null : n.getDependency('mesh', r.mesh).then(
            (
                function (e) {
                    const t = n._getNodeRef(n.meshCache, r.mesh, e);
                    return void 0 !== r.weights &&
                    t.traverse(
                        (
                            function (e) {
                                if (e.isMesh) for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t]
                            }
                        )
                    ),
                        t
                }
            )
        )
    }
    loadNode(e) {
        const t = this.json,
            n = this.extensions,
            r = this,
            i = t.nodes[e],
            a = i.name ? r.createUniqueName(i.name) : '';
        return function () {
            const t = [],
                n = r._invokeOne((function (t) {
                    return t.createNodeMesh &&
                        t.createNodeMesh(e)
                }));
            return n &&
            t.push(n),
            void 0 !== i.camera &&
            t.push(
                r.getDependency('camera', i.camera).then((function (e) {
                    return r._getNodeRef(r.cameraCache, i.camera, e)
                }))
            ),
                r._invokeAll(
                    (
                        function (t) {
                            return t.createNodeAttachment &&
                                t.createNodeAttachment(e)
                        }
                    )
                ).forEach((function (e) {
                    t.push(e)
                })),
                Promise.all(t)
        }().then(
            (
                function (t) {
                    let s;
                    if (
                        s = !0 === i.isBone ? new Bone : t.length > 1 ? new Group : 1 === t.length ? t[0] : new Object3D,
                        s !== t[0]
                    ) for (let e = 0, n = t.length; e < n; e++) s.add(t[e]);
                    if (
                        i.name &&
                        (s.userData.name = i.name, s.name = a),
                            assignExtrasToUserData(s, i),
                        i.extensions &&
                        addUnknownExtensionsToUserData(n, s, i),
                        void 0 !== i.matrix
                    ) {
                        const e = new Matrix4;
                        e.fromArray(i.matrix),
                            s.applyMatrix4(e)
                    } else void 0 !== i.translation &&
                    s.position.fromArray(i.translation),
                    void 0 !== i.rotation &&
                    s.quaternion.fromArray(i.rotation),
                    void 0 !== i.scale &&
                    s.scale.fromArray(i.scale);
                    return r.associations.set(s, {
                        type: 'nodes',
                        index: e
                    }),
                        s
                }
            )
        )
    }
    loadScene(e) {
        const t = this.json,
            n = this.extensions,
            r = this.json.scenes[e],
            i = this,
            a = new Group;
        r.name &&
        (a.name = i.createUniqueName(r.name)),
            assignExtrasToUserData(a, r),
        r.extensions &&
        addUnknownExtensionsToUserData(n, a, r);
        const s = r.nodes ||
                [],
            o = [];
        for (let e = 0, n = s.length; e < n; e++) o.push(buildNodeHierachy(s[e], a, t, i));
        return Promise.all(o).then((function () {
            return a
        }))
    }
}
function buildNodeHierachy(e, t, n, r) {
    const i = n.nodes[e];
    return r.getDependency('node', e).then(
        (
            function (e) {
                if (void 0 === i.skin) return e;
                let t;
                return r.getDependency('skin', i.skin).then(
                    (
                        function (e) {
                            t = e;
                            const n = [];
                            for (let e = 0, i = t.joints.length; e < i; e++) n.push(r.getDependency('node', t.joints[e]));
                            return Promise.all(n)
                        }
                    )
                ).then(
                    (
                        function (n) {
                            return e.traverse(
                                (
                                    function (e) {
                                        if (!e.isMesh) return;
                                        const r = [],
                                            i = [];
                                        for (let e = 0, a = n.length; e < a; e++) {
                                            const a = n[e];
                                            if (a) {
                                                r.push(a);
                                                const n = new Matrix4;
                                                void 0 !== t.inverseBindMatrices &&
                                                n.fromArray(t.inverseBindMatrices.array, 16 * e),
                                                    i.push(n)
                                            } else console.warn(
                                                'THREE.GLTFLoader: Joint "%s" could not be found.',
                                                t.joints[e]
                                            )
                                        }
                                        e.bind(new Skeleton(r, i), e.matrixWorld)
                                    }
                                )
                            ),
                                e
                        }
                    )
                )
            }
        )
    ).then(
        (
            function (e) {
                t.add(e);
                const a = [];
                if (i.children) {
                    const t = i.children;
                    for (let i = 0, s = t.length; i < s; i++) {
                        const s = t[i];
                        a.push(buildNodeHierachy(s, e, n, r))
                    }
                }
                return Promise.all(a)
            }
        )
    )
}
function computeBounds(e, t, n) {
    const r = t.attributes,
        i = new Box3;
    if (void 0 === r.POSITION) return;
    {
        const e = n.json.accessors[r.POSITION],
            t = e.min,
            a = e.max;
        if (void 0 === t || void 0 === a) return void console.warn(
            'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.'
        );
        if (
            i.set(new Vector3(t[0], t[1], t[2]), new Vector3(a[0], a[1], a[2])),
                e.normalized
        ) {
            const t = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[e.componentType]);
            i.min.multiplyScalar(t),
                i.max.multiplyScalar(t)
        }
    }
    const a = t.targets;
    if (void 0 !== a) {
        const e = new Vector3,
            t = new Vector3;
        for (let r = 0, i = a.length; r < i; r++) {
            const i = a[r];
            if (void 0 !== i.POSITION) {
                const r = n.json.accessors[i.POSITION],
                    a = r.min,
                    s = r.max;
                if (void 0 !== a && void 0 !== s) {
                    if (
                        t.setX(Math.max(Math.abs(a[0]), Math.abs(s[0]))),
                            t.setY(Math.max(Math.abs(a[1]), Math.abs(s[1]))),
                            t.setZ(Math.max(Math.abs(a[2]), Math.abs(s[2]))),
                            r.normalized
                    ) {
                        const e = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[r.componentType]);
                        t.multiplyScalar(e)
                    }
                    e.max(t)
                } else console.warn(
                    'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.'
                )
            }
        }
        i.expandByVector(e)
    }
    e.boundingBox = i;
    const s = new Sphere;
    i.getCenter(s.center),
        s.radius = i.min.distanceTo(i.max) / 2,
        e.boundingSphere = s
}
function addPrimitiveAttributes(e, t, n) {
    const r = t.attributes,
        i = [];
    function a(t, r) {
        return n.getDependency('accessor', t).then((function (t) {
            e.setAttribute(r, t)
        }))
    }
    for (const t in r) {
        const n = ATTRIBUTES[t] ||
            t.toLowerCase();
        n in e.attributes ||
        i.push(a(r[t], n))
    }
    if (void 0 !== t.indices && !e.index) {
        const r = n.getDependency('accessor', t.indices).then((function (t) {
            e.setIndex(t)
        }));
        i.push(r)
    }
    return assignExtrasToUserData(e, t),
        computeBounds(e, t, n),
        Promise.all(i).then(
            (
                function () {
                    return void 0 !== t.targets ? addMorphTargets(e, t.targets, n) : e
                }
            )
        )
}
function toTrianglesDrawMode(e, t) {
    let n = e.getIndex();
    if (null === n) {
        const t = [],
            r = e.getAttribute('position');
        if (void 0 === r) return console.error(
            'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.'
        ),
            e;
        for (let e = 0; e < r.count; e++) t.push(e);
        e.setIndex(t),
            n = e.getIndex()
    }
    const r = n.count - 2,
        i = [];
    if (2 === t) for (let e = 1; e <= r; e++) i.push(n.getX(0)),
        i.push(n.getX(e)),
        i.push(n.getX(e + 1));
    else for (let e = 0; e < r; e++) e % 2 == 0 ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2))) : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
    i.length / 3 !== r &&
    console.error(
        'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.'
    );
    const a = e.clone();
    return a.setIndex(i),
        a
}
class TypedMessenger {
    constructor({
                    returnTransferSupport: e = !1,
                    serializeErrorHook: t = null,
                    deserializeErrorHook: n = null
                }
                    = {}) {
        this.returnTransferSupport = e,
            this.lastRequestId = 0,
            this.sendHandler = null,
            this.responseHandlers = null,
            this.onRequestIdMessageCbs = new Map,
            this.serializeErrorHook = t,
            this.deserializeErrorHook = n;
        const r = new Proxy({
        }, {
            get: (e, t, n) => {
                if ('symbol' != typeof t) return async(...e) => await this._sendInternal(t, [], ...e)
            }
        });
        this.send = r;
        const i = new Proxy({
        }, {
            get: (e, t, n) => {
                if ('symbol' != typeof t) return async(...e) => {
                    const [n,
                        ...r] = e;
                    return await this._sendInternal(t, n, ...r)
                }
            }
        });
        this.sendWithTransfer = i
    }
    initialize(e, t) {
        e instanceof Worker ? (
            this.setSendHandler((t => {
                e.postMessage(t.sendData, t.transfer)
            })),
                e.addEventListener('message', (e => {
                    this.handleReceivedMessage(e.data)
                }))
        ) : (
            this.setSendHandler((t => {
                e.postMessage(t.sendData, {
                    transfer: t.transfer
                })
            })),
                e.addEventListener('message', (e => {
                    this.handleReceivedMessage(e.data)
                }))
        ),
            this.setResponseHandlers(t)
    }
    setSendHandler(e) {
        this.sendHandler = e
    }
    async handleReceivedMessage(e) {
        if ('request' == e.direction) {
            if (!this.responseHandlers) throw new Error(
                'Failed to handle message, no request handlers set. Make sure to call `setRequestHandlers` before handling messages.'
            );
            if (!this.sendHandler) throw new Error(
                'Failed to handle message, no send handler set. Make sure to call `setSendHandler` before handling messages.'
            );
            const t = this.responseHandlers[e.type];
            let n,
                r = [],
                i = !1;
            if (t) try {
                n = await t(...e.args)
            } catch (e) {
                n = e,
                this.serializeErrorHook &&
                (n = this.serializeErrorHook(n)),
                    i = !0
            }
            if (this.returnTransferSupport && n && !i) {
                const e = n;
                r = e.transfer ||
                    [],
                    n = e.returnValue
            }
            await this.sendHandler({
                sendData: {
                    direction: 'response',
                    id: e.id,
                    didThrow: i,
                    type: e.type,
                    returnValue: n
                },
                transfer: r
            })
        } else if ('response' == e.direction) {
            const t = this.onRequestIdMessageCbs.get(e.id);
            if (t) for (const n of t) n(e);
            this.onRequestIdMessageCbs.delete(e.id)
        }
    }
    setResponseHandlers(e) {
        this.responseHandlers = e
    }
    async _sendInternal(e, t, ...n) {
        if (!this.sendHandler) throw new Error(
            'Failed to send message, no send handler set. Make sure to call `setSendHandler` before sending messages.'
        );
        const r = this.lastRequestId++,
            i = new Promise(
                (
                    (e, t) => {
                        this.onResponseMessage(
                            r,
                            (
                                n => {
                                    if (n.didThrow) {
                                        let e = n.returnValue;
                                        this.deserializeErrorHook &&
                                        (e = this.deserializeErrorHook(e)),
                                            t(e)
                                    } else e(n.returnValue)
                                }
                            )
                        )
                    }
                )
            );
        return await this.sendHandler({
            sendData: {
                direction: 'request',
                id: r,
                type: e,
                args: n
            },
            transfer: t
        }),
            await i
    }
    onResponseMessage(e, t) {
        let n = this.onRequestIdMessageCbs.get(e);
        n ||
        (n = new Set, this.onRequestIdMessageCbs.set(e, n)),
            n.add(t)
    }
}
class MapLoadError extends Error {
    constructor(e, t) {
        super (e),
            this.name = t
    }
}
const objects = [
        {
            name: 'torso'
        },
        {
            name: 'head'
        },
        {
            name: 'quiver'
        },
        {
            name: 'lowerArm',
            needsFlip: !0
        },
        {
            name: 'upperArm',
            needsFlip: !0
        },
        {
            name: 'handArm',
            needsFlip: !0
        },
        {
            name: 'upperLeg',
            needsFlip: !0
        },
        {
            name: 'lowerLeg',
            needsFlip: !0
        },
        {
            name: 'footLeg',
            needsFlip: !0
        }
    ],
    rawSkinNames = objects.map((e => e.name)),
    flippedSkinNames = objects.filter((e => e.needsFlip)).map((e => e.name)),
    processedSkinNames = [];
for (const e of objects) e.needsFlip ? (
    processedSkinNames.push(e.name + 'L'),
        processedSkinNames.push(e.name + 'R')
) : processedSkinNames.push(e.name);
function * traverseObject(e, {
    skipObjsFn: t = null
}
    = {}) {
    if (!t || t(e)) {
        yield e;
        for (const n of e.children) for (const e of traverseObject(n, {
            skipObjsFn: t
        })) yield e
    }
}
const teamColors = [
    {
        name: 'unset',
        nameCapitalized: 'Unset',
        colorTransform: e => {
            e.h += 0.06,
                e.s *= 0.6,
                e.v *= 0.4
        },
        cssColor: '#bb6b29',
        cssColorLight: '#ffbc87',
        cssColorDark: '#6c3e19'
    },
    {
        name: 'red',
        nameCapitalized: 'Red',
        cssColor: '#e5302c',
        cssColorLight: '#ffd9d1',
        cssColorDark: '#a32321'
    },
    {
        name: 'blue',
        nameCapitalized: 'Blue',
        colorTransform: e => {
            e.h += 0.6
        },
        cssColor: '#24a3dd',
        cssColorLight: '#b0e6ff',
        cssColorDark: '#1d749e'
    }
];
function rgbToHsv(e, t, n) {
    e = clamp01(e),
        t = clamp01(t),
        n = clamp01(n);
    const r = Math.max(e, t, n),
        i = Math.min(e, t, n),
        a = r - i;
    let s = 0;
    const o = 0 == r ? 0 : a / r,
        l = r;
    switch (r) {
        case i:
            s = 0;
            break;
        case e:
            s = t - n + a * (t < n ? 6 : 0),
                s /= 6 * a;
            break;
        case t:
            s = n - e + 2 * a,
                s /= 6 * a;
            break;
        case n:
            s = e - t + 4 * a,
                s /= 6 * a
    }
    return [s,
        o,
        l]
}
function hsvToRgb(e, t, n) {
    e = mod(e, 1),
        t = clamp01(t),
        n = clamp01(n);
    const r = Math.floor(6 * e),
        i = 6 * e - r,
        a = n * (1 - t),
        s = n * (1 - i * t),
        o = n * (1 - (1 - i) * t);
    let l = 0,
        c = 0,
        h = 0;
    switch (r % 6) {
        case 0:
            l = n,
                c = o,
                h = a;
            break;
        case 1:
            l = s,
                c = n,
                h = a;
            break;
        case 2:
            l = a,
                c = n,
                h = o;
            break;
        case 3:
            l = a,
                c = s,
                h = n;
            break;
        case 4:
            l = o,
                c = a,
                h = n;
            break;
        case 5:
            l = n,
                c = a,
                h = s
    }
    return [l,
        c,
        h]
}
export {
    AdditiveBlending as A,
    BufferGeometry as B,
    Color as C,
    DoubleSide as D,
    Euler as E,
    FrontSide as F,
    sRGBEncoding as G,
    Loader as H,
    IcosahedronGeometry as I,
    FileLoader as J,
    GLTFLoader as K,
    Line3 as L,
    MapLoadError as M,
    NearestFilter as N,
    Object3D as O,
    PlaneGeometry as P,
    Quaternion as Q,
    MeshBasicMaterial as R,
    Scene as S,
    TypedMessenger as T,
    Uint32BufferAttribute as U,
    Vector3 as V,
    WebGLRenderer as W,
    rawSkinNames as X,
    flippedSkinNames as Y,
    clamp01 as a,
    BufferAttribute as b,
    clamp as c,
    Mesh as d,
    Matrix4 as e,
    BackSide as f,
    ShaderMaterial as g,
    Box3 as h,
    Sphere as i,
    Vector2 as j,
    PerspectiveCamera as k,
    lerp as l,
    mod as m,
    teamColors as n,
    modMinMax as o,
    processedSkinNames as p,
    mapValue as q,
    iLerp as r,
    LineBasicMaterial as s,
    traverseObject as t,
    Line as u,
    hsvToRgb as v,
    rgbToHsv as w,
    SphereGeometry as x,
    Texture as y,
    smoothClamp as z
};
