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
</template>
