<template>
  <div>
    <h2>이론</h2>
    <div>
      vue
      - 사용자 인터페이스를 구축하기 위한 Javascript 프레임워크
      - 표준 html, css, javascript 기반으로 구축
      - 단순한 것 부터 복잡한 것 까지 사용자 인터페이스를 효율적으로 개발 할수 있는 컴포넌트 기반 프로그래밍 모델 제공
      - 확장성을 고려해 작성

      선언적 렌더링
      - javascript 상태를 기반으로 화면에 출력될 html이 어떻게 보이는지 설명
      ref
      - 모든 타입의 값을 사용할 수 있음
      Const test = ref()
      reactive
      - 객체(배열, Map, Set과 같은 빌트인 타입 포함)
      - 함수를 사용하여 객체 또는 배열을 반응형으로 만들 수 있음
      Const 이름 = reactive({
      test: 0,
      test1: null,
      test2: props.test
      })

      옵션 API
      - 옵션의 data, methods, mounted 같은 객체를 사용하여 컴포넌트의 로직을 정의

      컴포지션 API
      - import해서 가져온 API 함수들을 사용하여 컴포넌트의 로직을 정의
      script setup
      - vue가 더 적은 코드 문맥으로 컴포지션 API를 사용하고, 컴파일 시 의도한대로 올바르게 동작할 수 있게 코드를 변화

      v-
      - 컴포넌트의 상태에 접근할 수 있음
      v-bind :
      - 속성을 동적 값에 바인딩
      v-on @
      - DOM 이벤트를 수신할 수 있음

      form 입력 바인딩
      input, textarea : value, input
      checkbox, radio : checked, change
      select : change
      button : click

      @input - 요소의 값이 변경된 직후에 발생
      @change - 내용이 변경된 후 요소가 포커스를 잃었을 때 발생
      @input과 @change 차이점은 : @change이벤트도 동작 ex) select 요소

      v-show
      - css 기반으로 전환되므로, 초기 조건과 관계없이 항상 렌더링
      v-if
      - 초기 조건이 false면 아무 작업도 수행하지 않음
      - 조건부 블록은 true 될 때까지 렌더링되지 않음
      일반적으로 v-if 전환 비용이 더 높고, v-show 초기 렌더링 비용이 더 높음
      따라서 자주 전환해야 하는경우 v-show, 실행 중에 조건이 변경되지 않는 경우 v-if

      v-for
      - 디렉티브를 사용하여 배열을 리스트로 렌더링을할 수 있음
      - 각 항목에 대한 고유한 key 속성을 제공해야 함
      -> key : 문자열, 숫자, 심볼 형식의 값만 바인딩
      -> 노드의 ID를 추적하고 기존 엘리먼트를 재사용하고 재정렬할 수 있도록 힌트를 제공
      - item in items -> items : 배열, item : 아이템
      - index(순서), key(타이틀), value(값)
      - v-if가 v-for보다 우선순위가 높음(동시에 사용 불가능)

      computed()
      - 반응 데이터 소스를 기반으로 .value를 게산하는 계산된 참조(ref)를 만들 수 있음

      filter()
      - todos.value.filter((t) => !t.done)
      - 배열을 수정하지 않고 항상 새 배열을 반환
      - 원본 데이터를 수정하거나 교체하지 않고 필터링되거나 정렬된 결과를 표시

      ref
      - 엘리먼트 또는 자식 컴포넌트를 참조하기 위해 사용
      - null 값으로 초기화
      - 엘리먼트가 존재하지 않기 때문에 onMounted() 함수를 사용해야함

      watch()
      - 반응형 속성이 변경될 때마다 함수를 실행
      - ref(계산된 ref 포함), 반응형 객체, getter 함수 또는 여러 소스의 배열이 될 수 있음

      emit()
      - 이벤트를 발송
      - 자식 emit('const name', 이벤트)
      - 부모 @const name = "이벤트" -> 자식의 이벤트를 받아옴

      slot
      - 부모 컴포넌트는 자식에서 props를 사용하여 데이터를 전달하는 것 외에도, 슬롯을 사용하여 템플릿 조각을 전달 할 수 있음

      배열 관련 함수(Array)
      - push() : 배열의 끝에 아이템을 추가
      - pop() : 배열의 마지막 아이템을 제거
      - shift() : 배열의 첫번째 아이템을 제거
      - unshift() : 배열의 앞에 아이템을 추가
      - splice() : splice(pos, length), pos 번째부터 length 만큼 아이템 제거
      - slice() : 배열을 복제

      split() : 문자열을 한글자씩 분리
      reverse() : 데이터를 반대로 출력
      join() : 데이터 결합을 수행

      markdown : html 형식으로 변경해주는 라이브러리
      debounce
      - 특정시간이 지난 시점에서 이벤트가 하나만 발생하도록 제어
      - 연속적으로 호출되는 함수들 중 마지막 함수 또는 제일 처음만 호출되도록 하는 것
    </div>
    <div>
      v-model
      - 양식 입력 요소에 대한 양방향 데이터 바인딩을 활성화
      - value는 modelValue, event 전달은 update:modelValue
      - 부모 : v-model="modelValue"
      - 자식 : props: {modelValue: { type: String, default: '' } }, emits: ['update:modelValue'] 추가
      - v-model 이 있는 컴포넌트에 v-model 바인딩할 때 새 기본값을 사용
      - 입력값이 변경되면 구성 요소 내부의 상태에 값을 반영
      - 구성 요소의 상태가 변경되면 양식 입력 요소에 변경 사항이 반영

      props
      - 컴포넌트의 정보를 자식 컴포넌트로 전달하기 위해 사용하는 사용자 지정 특성
      - 부모 : @emitname="eventName"
      - 자식 : emits: ['emitname']

      emit
      - 다른 컴포넌트에게 현재 컴포넌트의 이벤트나 데이터를 전달하기 위해 사용
      - 직접 사용자 정의 이벤트를 내보낼 수 있음
      - v-model 데이터 흐름을 추적하기 쉽게 함
    </div>
    <div>
      vue router
      mode : 기본 값은 hash 모드 (history 모드를 사용하면 브라우저 히스토리 스택에 기록됨)
      redirect : 리다이렉팅 (주로 메인 페이지 등에 사용)
      routes : 페이지 라우팅 정보
      - path : 페이지 경로(url)
      - component : 해당 url 페이지에 사용 할 components
      - children : 중첩 라우팅을 위한 배열

      hash 모드 : 중간에 다른 url을 요청하면 전체 리소스 로딩없이 spa page 이동만 일어남
      history 모드 : page 재로딩이 다시 발생
      - 없는 page 경우 404 not found 에러가 뜸

      router-view
      - 화면에 보여지게 하는 역할
    </div>
    <div>
      Array.prototype.includes()
      - 배열이 특정 요소를 포함하고 있는지 확인
    </div>
    <div>
      HTMLInputElement
      - input 요소를 다루는 인터페이스
      - 레이아웃 및 표시를 조작하기 위한 특수 속성 및 메서드 제공
    </div>
    <div>
      indexOf()
      - 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
      - 문자열에서 원하는 문자열을 검색하여 찾거나 아니면 배열에서 원하는 특정 배열값의 존재여부 등을 확인
      - 배열의 경우 위치값을 인덱스로 반환하는 함수
      - 문자타입 뿐만아니라 배열에서도 사용가능
      - -1 값이 없음을 의미
      - string.indexOf(searchvalue, position)
      searchvalue : 필수 입력값, 찾을 문자열
      position : optional, 기본값은 0, string에서 searchvalue를 찾기 시작할 위치
    </div>
    <div>
      es6 스프레드 연산자
      ...
      - 배열, 문자열, 객체 등 몇개의 배열이 오는지 모를 때 사용가능
      - ex) [...props.modelValue]
    </div>
    <div>
      clientHeight : 요소의 내부 높이
      - 패딩, 스크롤바, 테두리 포함
      - 마진 제외
      offsetHeight : 요소의 높이
      - 패딩, 스크롤바, 테두리 포함
      - 마진 제외
      scrollHeight : 요소에 들어있는 컨텐츠의 전체 높이
      - 패딩, 테두리 포함
      - 마진 제외

      offsetTop : 현재 보이는 화면을 기준으로 하는 좌표값을 반환
      - 부모 요소에게서 상대적인 top 좌표를 반환
      - 부모 요소 position : relative인 부모 요소만을 찾아서 기준으로 삼음
      - 부모 요소에 position : relative 없다면 dom을 기준으로 좌표 반환
      - https://dane-itview.tistory.com/entry/%EA%B7%B8%EB%9E%98%EC%84%9C-Top-%EC%9D%B4-%EC%96%B4%EB%94%98%EB%8D%B0-getBoundingClientRecttop-elementoffsetTop-%EC%B0%A8%EC%9D%B4%EC%A0%90
      - https://bangj.tistory.com/111

      screen.height : 화면 높이를 픽셀 단위로 반환
    </div>
  </div>
  <div>
    <h2>예제</h2>
    <pre class="language-html">
      <code>
        &lt;style scoped /&gt;
        scoped : 해당 컴포넌트에서만 독립하게 사용하는 스타일
      </code>
    </pre>
    <pre class="language-html">
      <code>
        기본 사용법
        props 접근

        &lt;template&gt;
          &lt;button @click="count++"&gt;{{ count }}&lt;/button&gt;
        &lt;/template&gt;

        &lt;script&gt;
        import { ref, toRef } from 'vue'

        export default {
          props: {
            title: String
          }
          setup(props) {
            const count = ref(0)

            console.log(props.title)

            // refs 객체로 'props'를 변환한 후, 분해 할당
            const { title } = toRef(props)
            // 'title'은 'props.title'을 추적하는 ref
            console.log(title.value)
            // 하나의 'props' 속성만 ref로 변환
            const title = toRef(props, 'title')

            // 템플릿 및 기타 옵션 API 훅에 노출
            return {
              count
            }
          },

          mounted() {
            console.log(this.count) // 0
          }
        }
        &lt;/script&gt;
      </code>
    </pre>
    <pre class="language-html">
      <code>
        ref()
        - 전달된 값을 갖게 되고, 이것을 가리키는 단일 속성 .value가 잇는 변경 가능한 반응형 ref 객체를 반환

        function ref&lt;T&gt;(value: T): Ref&lt;UnwrapRef&lt;T&gt;&gt;

        interface Ref&lt;T&gt; {
          value: T
        }

        const count = ref(0)
      </code>
    </pre>
    <pre class="language-html">
      <code>
        computed()
        - getter 함수를 사용하며, getter로부터 반환된 값을 읽기 전용 반응형 ref 객체로 반환

        // 읽기 전용
        function computed&lt;T&gt;(
          getter: () =&gt; T,
          debuggerOptions?: DebuggerOptions
        ): Readonly&lt;Ref&lt;Readonly&lt;T&gt;&gt;&gt;

        // 쓰기 전용
        function computed&lt;T&gt;(
          options: {
            get: () =&gt; T
            set: (value: T) =&gt; void
          },
          debuggerOptions?: DebuggerOptions
        ): Ref&lt;T&gt;

        // 읽기 전용
        const count = ref(1)
        const plusOne = computed(() => count.value + 1)

        // 쓰기 전용
        const count = ref(1)
        const plusOne = computed({
          get: () => count.value + 1,
          set: (val) => {
            count.value = val - 1
          }
        })
      </code>
    </pre>
    <pre class="language-html">
      <code>
        reactive()
        - 객체의 반응형 proxy를 반환

        function reacitve&lt;T extends object&gt;(target: T): UnwrapNestedRefs&lt;T&gt;

        const obj = reacitve({ count: 0 })
        const obj = reacitve([ ref('') ])
        const obj = reacitve({})
      </code>
    </pre>
    <pre class="language-html">
      <code>
        toRef()
        - 반응형 객체의 속성에 대한 ref를 만드는 데 사용할 수 있음

        function toRef&lt;T extends object, K extends keyof T&gt;(
          object: T,
          key: K,
          defaultValue?: T[K]
        ): ToRef&lt;T[K]&gt;

        type ToRef&lt;T&gt; = T extends Ref ? T : Ref&lt;T&gt;

        const state = reactive({
          foo: 1,
          bar: 2
        })

        const fooRef = toRef(state, 'foo')
      </code>
    </pre>
    <pre class="language-html">
      <code>
        toRefs()
        - 반응형 객체를 일반 객체로 변환하고, 변환한 일반 객체의 각 속성은 원본 객체(반응형 객체)의 속성이 ref된 것

        function toRefs&lt;T extends object&gt;(
          object: t
        ): {
          [K in keyof T]: ToRef&lt;T[K]&gt;
        }

        type ToRef = T extends Ref ? T : Ref&lt;T&gt;

        const state = reactive({
          foo: 1,
          bar: 2
        })

        const stateAsRefs = toRefs(state)
      </code>
    </pre>
    <pre class="language-html">
      <code>
        onMounted()
        - 컴포넌트가 마운트된 후 호출될 콜백을 등록

        function onMounted(callback: () => void): void

        import { ref, onMounted } form 'vue'

        const el = ref()

        onMounted(() => {
          el.value
        })

        &lt;template&gt;
          &lt;div ref="el"&gt;&lt;/div&gt;
        &lt;/template&gt;
      </code>
    </pre>
    <pre class="language-html">
      <code>
        provide()
        - 하위 컴포넌트에 주입(Inject)할 수 있도록 값을 제공(Provide)

        function provide&lt;T&gt;(key: InjectionKey&lt;T&gt; | string, value: T): void

        import { ref, provide } from 'vue'
        import { fooSymbol } from './injectionSymbols'

        // 정적 값
        provide('foo', 'bar')

        // 반응형 값
        const count = ref(0)
        provide('count', count)

        // 심볼 키
        provide(fooSymbol, count)

        inject()
        - 상위 컴포넌트 또는 app.provied()를 통해 앱에서 제공된 값을 주입

        // 기본 값 없음
        function inject&lt;T&gt;(key: InjectionKey&lt;T&gt; | string): T | undefined

        // 기본 값 정의 있음
        function inject&lt;T&gt;(key: InjectionKey&lt;T&gt; | string, defaultValue: T): T

        // 팩토리 함수
        function inject&lt;T&gt;(
          key: InjectionKey&lt;T&gt; | string,
          defaultValue: () =&gt; T,
          treatDefaultAsFactory: true
        ): T

        import { inject } from 'vue'
        import { fooSymbol } from './injectionSymbols'

        // 정적 값
        const foo = inject('foo')

        // 반응형 값
        const count = inject('count')

        // 심볼 키를 사용
        const foo2 = inject(fooSymbol)

        // 기본 값 제공(제공되는 'foo'가 없는 경우 적용)
        const bar = inject('foo', 'default value')

        // 기본 값으로 팩토리 함수를 제공
        const baz = inject('foo', () => new Map())

        // 3번째 인자와 함께 기본값으로 함수 제공
        const fn = inject('function', () => {}, false)
      </code>
    </pre>
    <pre class="language-html">
      <code>
        data
        - 컴포넌트 인스턴스의 초기 반응형 상태를 반환하는 함수

        interface componentOptions {
          data?(
            this: ComponentPublicInstance,
            vm: ComponentPublicInstance
          ): object
        }

        export default {
          data() {
            return { a: 1 }
          },
          created() {
            console.log(this.a)
          }
        }

        props
        - 컴포넌트의 props를 선언

        interface componentOptions {
          props?: ArrayPropsOptions | ObjectPropsOtions
        }

        type ArrayPropsOptions = string[]

        type ObjectPropsOtions = { [key: string]: Prop }

        type Prop&lt;T = any&gt; = PropOptions&lt;T&gt; | PropType&lt;T&gt; | null

        interface PropOptions&lt;T&gt; {
          type?: PropType&lt;T&gt;
          required?: boolean
          default?: T | ((rawProps: object) =&gt; T)
          validator?: (value: unknown) =&gt; boolean
        }

        type PropTyep&lt;T&gt; = { new ():  T } | { new (): T }[]

        export default {
          props: ['size', 'myMessage']
        }

        export default {
          props: {
            // 타입 체크
            height: Number,
            // 타입 체크 및 유효성 검사
            age: {
              type: Number,
              default: 0,
              required: true,
              validator: (value) => {
                return value >= 0
              }
            }
          }
        }

        computed
        - 컴포넌트 인스턴스에 노출될 계산된 속성을 선언

        interface ComponentOptions {
          computed?: {
            [key: string]: ComputedGetter&lt;any&gt; | WritableComputedOption&lt;any&gt;
          }
        }

        type ComputedGetter&lt;T&gt; = (
          this: ComponentPublicInstance,
          vm: ComponentPublicInstance
        ) =&gt; T

        type ComputedGetter&lt;T&gt; = (
          this: ComponentPublicInstance,
          value: T
        ) =&gt; void

        type WritableComputedOption&lt;T&gt; = {
          get: ComputedGetter&lt;T&gt;
          set: ComputedGetter&lt;T&gt;
        }

        export default {
          computed: {
            aDouble: (vm) => vm.a * 2
          }
        }

        export default {
          data() {
            return { a: 1 }
          },
          computed: {
            // 읽기
            aDouble() {
              reutrn this.a * 2
            },
            // 쓰기
            aPlus: {
              get() {
                return this.a + 1
              },
              set(v) {
                this.a = v - 1
              }
            }
          },
          created() {
            console.log(this.aDouble)
          }
        }
      </code>
    </pre>
    <pre class="language-html">
      <code>
        components: {
          'uu-toast': uu-toast
        },

        const toast = ref&lt;InstanceType&lt;typeof uu-toast&gt; | null&gt;(null)
          - 토스트 컨퍼넌트를 전체를 새로 불러와서 쓸 수 있음
          - 토스트 컨퍼넌트에 들어있는 function 함수를 props 없이 쓸 수 있음

        토스트 팝업의 props 없이 함수를 쓴 경우
        onMounted(() =&gt; {
          toast.value?.showToast()
        })
      </code>
    </pre>
    <pre class="language-html">
      <code>
        방법 1
        interface stateType {
          // 일반 선언
          monthRange: {
            selectedStart: string,
            selectedEnd: string,
            isVisible: boolean,
          },
          // 배열
          modalTarget: HTMLInputElement[],
          // 배열에 타입 여러개
          radioGroup: {
            value: string,
            label: string,
            disabled: boolean
          }[]
        }

        setup () {
          const state = reactive&lt;stateType&gt;({
            // 일반
            monthRange: {
              selectedStart: '2022-01',
              selectedEnd: '2022-05',
              isVisible: false
            },
            // 배열
            modalTarget: [],
            // 배열에 타입 여러개
            radioGroup: [
              { value: 'value1', label: 'aaa', disabled: false },
              { value: 'value12', label: 'faaaa', disabled: false }
            ]
          })
        }
        방법 2
        타입 스크립트는 우선순위가 중요하다
        // 배열 타입 여러개
        interface radioGroups {
          value: string,
          label: string,
          disabled: boolean
        }
        interface stateType {
          // 일반 선언
          monthRange: {
            selectedStart: string,
            selectedEnd: string,
            isVisible: boolean,
          },
          // 배열
          modalTarget: HTMLInputElement[],
          // 배열에 타입 여러개
          radioGroup: radioGroups[]
        }

        setup () {
          const state = reactive&lt;stateType&gt;({
            // 일반
            monthRange: {
              selectedStart: '2022-01',
              selectedEnd: '2022-05',
              isVisible: false
            },
            // 배열
            modalTarget: [],
            // 배열에 타입 여러개
            radioGroup: [
              { value: 'value1', label: 'aaa', disabled: false },
              { value: 'value12', label: 'faaaa', disabled: false }
            ]
          })
        }
      </code>
    </pre>
    <pre class="language-html">
      <code>
        공통 불러오는 방법

        1. 공통 함수 파일 import

        &lt;script lang="ts"&gt;
          import { getRandomId } from '@/utils/common.function'
        &lt;/script&gt;

        2. setup() {} 안 에 정의하고 return

          setup () {
            const randomString = getRandomId()
            return {
              randomString
            }
          }

        3. 화면단에서 사용 * 고유식별자 필수 입력
        예시
        :id="'tab' + randomString + index"
      </code>
    </pre>
    <pre class="language-html">
      <code>
        swiper slide
        슬라이드 할 때 컨텐츠 내용 바뀜
        스와이퍼 영역과 컨텐츠 영역을 따로 나눠져 있어야함
        onMounted(() =&gt; {
          // querySelectorAll : class type-area 들어간것을 선택
          slideWrap.value?.querySelectorAll('.type-area')[0].classList.add('active00')
        })
        const slideWrap = ref&lt;HTMLDivElement | null&gt;(null)
        // swiper
        function slideChange (swiper: Swiper) {
          // type-area 선택된것 중에 for 문을 돌려 클래스 active0{number} 삭제
          slideWrap.value?.querySelectorAll('.type-area').forEach((item, index) =&gt; {
            item.classList.remove(`active0${index}`)
          })
          // type-area 선택된것 중에 for 문을 돌려 클래스 active0{number}추가
          slideWrap.value?.querySelectorAll('.type-area')[swiper.activeIndex].classList.add(`active0${swiper.activeIndex}`)
        }
        const options = reactive({
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 18
        })
      </code>
    </pre>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'

export default defineComponent({
  components: {
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })
    return {
    }
  }
})
</script>
