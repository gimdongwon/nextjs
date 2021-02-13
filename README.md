# nextjs get started

## Navigate between pages

Next.js 문서에서 설명하기를 코드에 대해 자동으로 분할 처리를 하므로 각 페이지는 해당 페이지에 대해 필요한 정보만 로딩을 한다고 설명한다.

즉 페이지가 렌더링 될 때에는 다른 페이지의 코드가 로드되지 않으므로 수백만의 페이지를 추가하더라도 빠르고 즉각적으로 반응이 가능하게 된다.

## Assets, Metadata, CSS

public 파일은 / 밑으로 매칭이 되어 사용이 가능하다.

각 페이지별 MetaData 처리를 하고 싶으면 `import Head from "next/head"`의 Head 컴포넌트를 이용하여 처리가 가능하다.

css파일의 이름은 무조건 .module.css로 끝나야 한다.

전역 css 설정을 위해 _app.js를 만들고 최상위 컴포넌트로 이것을 이용하여 페이지 간 탐색할 때 상태 유지가 가능하다.

Layout 컴포넌트를 만들고 모든 컴포넌트 상단에 profile Layout 컴포넌트를 넣어줌.

## Pre-rendering and Data Fetching

Next.js를 사용하는 이유는 Pre-rendering을 쉽게 가능하게 해주며 Data Fetching한 내용을 바탕으로 Pre-rendering이 가능하게 된다.

React는 Script를 이용하여 아무것도 없는 상태에서 JS를 이용하여 Dom을 그리는 방식을 채택한다. 하지만 Next.js는 React를 사용하지만 컨텐츠에 대해 HTML을 일부 완성하여 전송하기 때문에 SEO 최적화에 대해 강점을 가지게 된다.

" 웹팩 에러로 디플로이 실패