<template>
  <div>
    vue
    확장성을 고려해 작성
  </div>
  <div>
    vue router
    mode : 기본 값은 hash 모드 (history 모드를 사용하면 브라우저 히스토리 스택에 기록됨)
    redirect : 리다이렉팅 (주로 메인 페이지 등에 사용)
    routes : 페이지 라우팅 정보
    - path : 페이지 경로(url)
    - component : 해당 url 페이지에 사용 할 components
    - children : 중첩 라우팅을 위한 배열
  </div>
  <div>
    hash 모드 : 중간에 다른 url을 요청하면 전체 리소스 로딩없이 spa page 이동만 일어남
    history 모드 : page 재로딩이 다시 발생
    - 없는 page 경우 404 not found 에러가 뜸
  </div>
  <div>
    router-view
    - 화면에 보여지게 하는 역할
  </div>
  <div>
    <pre class="language-html">
      <code>
        <style scoped />
        scoped : 해당 컴포넌트에서만 독립하게 사용하는 스타일
      </code>
    </pre>
  </div>
  <div>
    <pre class="language-html">
      <code>
        components: {
          'uu-toast': uu-toast
        },

        const toast = ref<InstanceType<typeof uu-toast> | null>(null)
          - 토스트 컨퍼넌트를 전체를 새로 불러와서 쓸 수 있음
          - 토스트 컨퍼넌트에 들어있는 function 함수를 props 없이 쓸 수 있음

        토스트 팝업의 props 없이 함수를 쓴 경우
        onMounted(() => {
          toast.value?.showToast()
        })
      </instancetype<typeof></code>
    </pre>
  </div>
  <div>
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
          const state = reactive<stateType>({
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
          const state = reactive<stateType>({
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
      </statetype></statetype></code>
    </pre>
  </div>
  <div>
    <pre class="language-html">
      <code>
        공통 불러오는 방법

        1. 공통 함수 파일 import

        <script lang="ts">
          import { getRandomId } from '@/utils/common.function'
        </script>

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
    Array.prototype.includes()
    - 배열이 특정 요소를 포함하고 있는지 확인
  </div>
  <div>
    HTMLInputElement
    - input 요소를 다루는 인터페이스
    - 레이아웃 및 표시를 조작하기 위한 특수 속성 및 메서드 제공
  </div>
  <div>
    push()
    - 배열에 데이터 추가 (맨 끝 인덱스부터 추가됨)
    - 1개의 배열씩 추가
    splice()
    - 배열의 특정 인덱스에 있는 값을 변경 또는 삭제
    - 1개의 배열씩 삭제
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
