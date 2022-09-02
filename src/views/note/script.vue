<template>
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
</template>
