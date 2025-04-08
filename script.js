function showTab(tab) {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
  document.querySelector(`.tab-button[onclick="showTab('${tab}')"]`).classList.add('active');
  document.getElementById(tab).classList.add('active');
}

function formatNumber(num) {
  return Number(num).toLocaleString();
}

function createResultCard(title, vibe, e, v, u, details) {
  return `
    <div class="result-card">
      <h3>${title}</h3>
      <p><span class="highlight-yellow">참여율 (E): ${e}%</span></p>
      <p><span class="highlight-yellow">조회수 안정성 (V): ${v}%</span></p>
      <p><span class="highlight-yellow">업로드 빈도 (U): ${u}%</span></p>
      <p><span class="highlight-orange">VIBE Index: ${vibe}</span></p>
      <div class="details"><ul>
        <li>좋아요: ${formatNumber(details.likes)}</li>
        <li>댓글: ${formatNumber(details.comments)}</li>
        <li>조회수: ${formatNumber(details.views)}</li>
      </ul></div>
    </div>
  `;
}

function analyzeSingle() {
  const result = document.getElementById('singleResult');
  result.innerHTML = '<p>불러오는 중...</p>';
  setTimeout(() => {
    result.innerHTML = createResultCard('채널 A', '9.36', '6.59', '21.89', '30.00', {
      likes: 1204,
      comments: 193,
      views: 53483
    });
  }, 1000);
}

function analyzeMulti() {
  const result = document.getElementById('multiResults');
  result.innerHTML = '';
  const dummyData = [
    { title: '채널 1', vibe: '8.42', e: '4.21', v: '18.12', u: '27.50', details: { likes: 894, comments: 120, views: 41852 }},
    { title: '채널 2', vibe: '7.89', e: '3.78', v: '15.63', u: '23.10', details: { likes: 712, comments: 102, views: 37214 }},
    { title: '채널 3', vibe: '9.05', e: '5.90', v: '20.35', u: '29.80', details: { likes: 1023, comments: 156, views: 49820 }}
  ];
  dummyData.forEach(d => {
    result.innerHTML += createResultCard(d.title, d.vibe, d.e, d.v, d.u, d.details);
  });
}