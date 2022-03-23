# 2022-1Software Capstonedesign

##### prof. Lee

---

<details><summary>#1 Project Setting documentation</summary>
  
  - [JS 개발 환경 설정_기본](https://webnautes.tistory.com/1473)
  
  </details>

<details><summary>#2 Front-MainPage</summary><div markdown="1">
  
  |문제점|해결방식|날짜|
  |--|--|--|
  |react의 페이지간 이동 기능을 알지 못헸음|Route로 경로를 정하고 Link로 경로로 이동시키면 된다는 것을 깨달음 |2022-03-21|
  |login, main, signup의 css가 모든 컴포넌트에 중첩 적용되어 문제|전역 css인 common2.css는 .scss로 변경 후 app.js에 적용하고 각 컴포넌트에 적용할 각 css들은 scss로 변경 후 최상위 태그에 적용|2022-03-21|
  
  </details>

<details><summary>#3 Front-User Profile</summary>
  
  </details>

<details><summary>#4 Front-Algorithm/Problem Suggestion</summary>
  
  </details>

<details><summary>#5 Front-BaekJoon Assignments</summary>
  
  </details>

<details><summary>#6 Collaborations</summary>
  
  </details>
  
<details><summary>#7 Back-Node/MySql connection</summary><div markdown="1">
  
  |문제점|해결방식|날짜|
  |--|--|--|
  |1번 문제 <br>mysql 연동 문제|검색을 해보니 connection.end()를 사용하면 안되었는데 <br>connection.end()를 사용하여서현재 json으로 <br>값이 도출이 되지 않았습니다 그래서 <br>.end()를 주석처리 하고 진행하였다.|2022-03-21|
  |2번 문제 <br>pullrequest|새로운 브랜치를 만든 후(github상에 있지 않는) github remote를 하고, <br>필요파일을 만든다 그 후에 git pull origin main을 한다 그 이후에 vscode를 이용해서 <br>github pullrequest라는 플러그인을 이용하여 해결|2022-03-21|
  |3번 문제 <br>pullrequest|inflearn공부를 통하여 실습한 sql connect 풀 리퀘스트를 하려하였지만, <br>git pull에서부터 문제가 생겨서 <br>git pull origin main --allow-unrelated-histories로  연결하여서 해결하였다.|2022-03-22|
  |||2022-03-22|

  </details>
  
<details><summary>#16 Back/Crawling_Practice</summary><div markdown="1">
  |문제점|해결방식|날짜|
  |--|--|--|
  |1번 문제 <br>크롤링 Jsoup<br>안될 때(Java)|mavenrepository.com<br>-> org.jsoup 검색<br>-> Jsoup Java HTML Parser의 jsoup <br>-> 최신 버전 클릭<br>-> Maven에 있는 것 복사한 후 pom.xml 파일에 아래 내용 삽입<br>->  <dependencies><br><dependency><br><groupId>org.jsoup</groupId><br><artifactId>jsoup</artifactId><br><version>1.14.3(버전은 그 버전에 맞게 수정)</version><br></dependency><br></dependencies>|2022-03-21|
  </details>
