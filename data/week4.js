const WEEK4 = [
{
  day: 22,
  title: { en: `Probabilistic Thinking for Startups`, zh: `创业中的概率思维` },
  content: {
    en: `<p>Founders constantly face questions with no historical dataset: "what's the probability this specific product, in this specific market, succeeds?" Pure frequentist probability doesn't apply — there's no repeatable trial. This is where Bayesian reasoning (Day 6) becomes essential: start with a reference-class base rate, then adjust based on specific evidence.</p>
    <p>Start with a <strong>reference class</strong>: what happens, on average, to startups that look roughly like yours (same stage, market, team profile)? Industry data suggests only 10-20% of funded startups return significant capital. That's your prior.</p>
    <p>Then adjust up or down based on genuinely diagnostic evidence: a founding team with a previous successful exit, unusually strong early retention, a validated willingness to pay. Avoid adjusting based on non-diagnostic evidence like founder charisma or how much you personally want it to succeed.</p>
    <div class="formula">P(success) ≈ reference-class base rate, adjusted by genuinely diagnostic evidence</div>`,
    zh: `<p>创业者经常面对没有历史数据可依据的问题："这个特定的产品，在这个特定的市场里，成功的概率是多少？"纯粹的频率派概率在这里并不适用——因为没有可重复的试验。这正是贝叶斯推理（第6天）变得至关重要的地方：先从一个参照类别的基础比率出发，再根据具体证据进行调整。</p>
    <p>首先确定一个<strong>参照类别</strong>：那些和你的公司大致相似（同阶段、同市场、类似团队背景）的创业公司，平均而言结果如何？行业数据显示，获得融资的创业公司中，只有10%-20%能带来可观的资本回报。这就是你的先验。</p>
    <p>然后根据真正具有诊断价值的证据向上或向下调整：创始团队有过成功退出的经历、早期留存率异常出色、经过验证的付费意愿。要避免依据那些不具诊断价值的证据来调整判断，比如创始人的个人魅力，或者你自己有多希望它成功。</p>
    <div class="formula">P(成功) ≈ 参照类别的基础比率，再根据真正具有诊断价值的证据进行调整</div>`
  },
  example: {
    en: `<p>A founder pitching a B2B SaaS tool at seed stage might start with a reference-class prior of ~15% chance of a meaningful outcome. Evidence of 3 paying enterprise pilots with 90% retention after 6 months is genuinely diagnostic and should push the estimate up significantly. A founder's conviction that "this time is different" is not diagnostic and shouldn't move the number much on its own.</p>`,
    zh: `<p>一位处于种子轮阶段、推销B2B SaaS产品的创始人，可以从参照类别约15%的先验成功概率出发。如果有3个付费企业试点客户，且6个月后留存率高达90%，这是真正具有诊断价值的证据，应该显著上调这个估计。而创始人自己坚信"这次不一样"，并不具有诊断价值，不应该单独据此大幅调整这个数字。</p>`
  },
  takeaway: {
    en: `Anchor startup success estimates on a reference-class base rate first, then adjust only using evidence that would genuinely differ between successful and unsuccessful companies.`,
    zh: `评估创业成功概率时，先锚定参照类别的基础比率，再仅根据那些在成功与不成功公司之间真正存在差异的证据进行调整。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Which piece of evidence is most "diagnostic" for adjusting a startup's success probability upward?`, zh: `以下哪项证据对上调一家创业公司成功概率最具"诊断价值"？` },
      options: [
        { en: `The founder's personal confidence`, zh: `创始人的个人信心` },
        { en: `Validated paying customers with strong retention`, zh: `经过验证的付费客户及其出色的留存率` },
        { en: `A slick pitch deck design`, zh: `一份设计精美的路演PPT` },
        { en: `The founder's age`, zh: `创始人的年龄` }
      ],
      answer: 1,
      explanation: { en: `Real, validated customer behavior is genuinely diagnostic — it differs systematically between companies that succeed and those that don't.`, zh: `真实、经过验证的客户行为才具有真正的诊断价值——它在成功和不成功的公司之间存在系统性差异。` }
    },
    {
      type: "mcq",
      question: { en: `Why is a "reference class" base rate useful for estimating a startup's chance of success?`, zh: `为什么"参照类别"基础比率对于估计创业公司成功概率是有用的？` },
      options: [
        { en: `It removes all uncertainty`, zh: `它能消除全部不确定性` },
        { en: `It gives a disciplined starting point instead of a pure gut guess with no anchor`, zh: `它提供了一个有纪律的起点，而不是毫无锚点的纯直觉猜测` },
        { en: `It guarantees the forecast is accurate`, zh: `它能保证预测的准确性` },
        { en: `It's only useful for publicly traded companies`, zh: `它只对上市公司有用` }
      ],
      answer: 1,
      explanation: { en: `A reference class gives you a defensible prior to adjust from, rather than starting from nothing (Day 6).`, zh: `参照类别为你提供了一个站得住脚的先验，可以在此基础上进行调整，而不是从零开始（第6天内容）。` }
    },
    {
      type: "short",
      question: { en: `True or False: Founder charisma alone is strong diagnostic evidence of startup success.`, zh: `判断对错：创始人个人魅力本身就是创业成功的强诊断证据。` },
      answer: "false",
      explanation: { en: `False — charisma is common among both successful and unsuccessful founders, so it carries little diagnostic value on its own.`, zh: `错误——无论成功还是不成功的创始人，都常常具有个人魅力，因此它本身几乎没有诊断价值。` }
    }
  ]
},
{
  day: 23,
  title: { en: `Decision Trees for Business Choices`, zh: `商业决策中的决策树` },
  content: {
    en: `<p>A <strong>decision tree</strong> maps out a sequence of decisions and uncertain events as branches, letting you calculate the expected value of each path and compare them systematically — instead of holding the whole problem in your head at once.</p>
    <p>Structure: decision nodes (your choices), chance nodes (uncertain events with probabilities), and end nodes (final payoffs). You work backward from the end nodes — at each chance node, compute the expected value; at each decision node, pick the branch with the highest expected value.</p>
    <div class="formula">At each chance node: EV = Σ (probability × outcome value). At each decision node: pick max(EV).</div>
    <p>Decision trees shine for multi-stage decisions: should we build an MVP first or go straight to full launch? Should we raise a big round now or bootstrap and raise later at better terms? Drawing the tree forces you to make your probability estimates and payoffs explicit, which alone often reveals the right answer.</p>`,
    zh: `<p><strong>决策树</strong>把一系列决策和不确定事件用分支的形式画出来，让你可以系统地计算每条路径的期望值并进行比较——而不是试图把整个问题一次性装在脑子里。</p>
    <p>决策树的结构包括：决策节点（你的选择）、机会节点（带有概率的不确定事件）、以及终端节点（最终的收益）。你需要从终端节点开始向前"回溯"计算——在每个机会节点，计算期望值；在每个决策节点，选择期望值最高的那个分支。</p>
    <div class="formula">在每个机会节点：期望值 = Σ (概率 × 结果价值)。在每个决策节点：选择期望值最大的分支。</div>
    <p>决策树在多阶段决策中特别有用：我们应该先做一个MVP，还是直接全面上线？我们应该现在就融一大笔资，还是先自力更生、以后以更好的条件再融资？画出这棵树会迫使你把概率估计和收益都明确写出来，这个过程本身往往就能揭示出正确答案。</p>`
  },
  example: {
    en: `<p>A founder is deciding whether to spend 2 months building a costly integration requested by one large prospect. Branch A (build it): 40% chance the deal closes ($200k), 60% chance it doesn't ($0), minus $30k in engineering cost — EV = 0.4×200k − 30k = $50k. Branch B (don't build, focus elsewhere): estimated EV = $70k from other pipeline. The tree makes the "obvious" choice (chase the big prospect) clearly the worse one.</p>`,
    zh: `<p>一位创始人正在考虑是否要花2个月时间，为一个大客户开发一项昂贵的定制集成功能。分支A（开发它）：40%的概率成交（20万美元），60%的概率不成交（0美元），再减去3万美元的工程成本——期望值 = 0.4×20万 − 3万 = 5万美元。分支B（不开发，专注其他渠道）：预估期望值为7万美元。这棵决策树清楚地表明，那个看似"显而易见"的选择（追逐这个大客户）反而是更差的选项。</p>`
  },
  takeaway: {
    en: `When a decision has multiple stages or branches, draw it out as a tree and compute expected value at each node — it often overturns the "obvious" choice.`,
    zh: `当一个决策涉及多个阶段或分支时，把它画成一棵决策树，并在每个节点计算期望值——这往往会推翻那个看似"显而易见"的选择。`
  },
  exercises: [
    {
      type: "numeric",
      question: { en: `A chance node has two branches: 30% chance of $1000, 70% chance of $200. What is the expected value?`, zh: `一个机会节点有两个分支：30%的概率获得1000美元，70%的概率获得200美元。期望值是多少？` },
      answer: "440",
      explanation: { en: `0.3 × 1000 + 0.7 × 200 = 300 + 140 = 440.`, zh: `0.3 × 1000 + 0.7 × 200 = 300 + 140 = 440。` }
    },
    {
      type: "mcq",
      question: { en: `In a decision tree, at each decision node you should:`, zh: `在决策树中，每个决策节点应该怎样处理？` },
      options: [
        { en: `Pick the branch with the highest expected value`, zh: `选择期望值最高的分支` },
        { en: `Always pick the branch with the lowest cost`, zh: `总是选择成本最低的分支` },
        { en: `Pick randomly`, zh: `随机选择` },
        { en: `Always pick the safest option regardless of expected value`, zh: `无论期望值如何，总是选择最安全的选项` }
      ],
      answer: 0,
      explanation: { en: `Rolling back the tree means choosing the maximum expected value at each decision node.`, zh: `回溯决策树的过程，就是在每个决策节点选择期望值最大的分支。` }
    },
    {
      type: "short",
      question: { en: `True or False: Decision trees are most useful for one-time, single-stage decisions with no uncertainty.`, zh: `判断对错：决策树最适用于一次性、单阶段且没有不确定性的决策。` },
      answer: "false",
      explanation: { en: `False — decision trees are most valuable for multi-stage decisions involving genuine uncertainty.`, zh: `错误——决策树在涉及真实不确定性的多阶段决策中最有价值。` }
    }
  ]
},
{
  day: 24,
  title: { en: `Bayesian Updating in Business Decisions`, zh: `商业决策中的贝叶斯更新` },
  content: {
    en: `<p>Day 6 introduced Bayes' theorem formally. In business, you rarely compute it with exact numbers — instead you practice <strong>Bayesian updating as a mindset</strong>: hold your current belief as a probability, then adjust it incrementally as each new piece of evidence arrives, rather than treating any single data point as final proof.</p>
    <p>This means resisting two opposite failure modes: <strong>over-updating</strong> (panicking or celebrating based on one week of data, ignoring your prior) and <strong>under-updating</strong> (clinging to your original plan despite mounting contrary evidence — sometimes called "confirmation bias in slow motion").</p>
    <div class="formula">New belief = old belief, nudged by how surprising and how reliable the new evidence is</div>
    <p>A useful habit: before checking any new metric (weekly signups, a customer call, a competitor's launch), silently write down your current belief as a percentage. After seeing the evidence, ask how much it should actually move that number — often much less than your gut reaction suggests.</p>`,
    zh: `<p>第6天正式介绍了贝叶斯定理。在商业实践中，你很少会用精确的数字去计算它——而是把<strong>贝叶斯更新当作一种思维方式</strong>来练习：把你当前的信念当作一个概率来持有，随着每一条新证据的出现逐步调整它，而不是把任何单一的数据点当作最终定论。</p>
    <p>这意味着要抵御两种相反的失败模式：<strong>过度更新</strong>（因为一周的数据就恐慌或狂喜，完全忽略先验）和<strong>更新不足</strong>（尽管反面证据不断累积，仍然固守最初的计划——有时被称为"慢动作版的确认偏误"）。</p>
    <div class="formula">新的信念 = 旧的信念，根据新证据的意外程度和可靠程度进行微调</div>
    <p>一个有用的习惯是：在查看任何新指标（每周新增用户数、一次客户访谈、竞争对手的新发布）之前，先在心里默默写下你当前的信念是多少百分比。看到证据之后，再问一问这个数字究竟应该移动多少——通常远比直觉反应要小。</p>`
  },
  example: {
    en: `<p>A product team believes there's a 60% chance a new feature will improve retention. Week 1 data shows a small positive signal. An over-updater jumps to 90% confidence and starts celebrating; an under-updater stays stubbornly at 60% no matter what. A well-calibrated team nudges to maybe 65-70% — real, but appropriately modest, movement.</p>`,
    zh: `<p>一个产品团队认为新功能有60%的概率能提升留存率。第一周的数据显示出一个较小的正向信号。过度更新的人会立刻跳到90%的信心并开始庆祝；更新不足的人则无论看到什么都固执地停留在60%。一个校准良好的团队则会把信心调整到大约65%-70%——这是真实的、但也是恰如其分的、适度的调整。</p>`
  },
  takeaway: {
    en: `Write down your belief as a number before looking at new evidence, then update it deliberately and proportionally — not by jumping to a new extreme or refusing to move at all.`,
    zh: `在查看新证据之前，先把你的信念写成一个数字，然后有意识地、按比例地更新它——而不是跳到一个新的极端，或者完全拒绝改变。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `A team sees one good week of data and immediately jumps from 50% to 95% confidence in a new feature. This is an example of:`, zh: `团队看到一周的好数据，就立刻把对新功能的信心从50%跳升到95%。这是什么现象的例子？` },
      options: [
        { en: `Proper Bayesian updating`, zh: `恰当的贝叶斯更新` },
        { en: `Over-updating on limited evidence`, zh: `基于有限证据的过度更新` },
        { en: `Under-updating`, zh: `更新不足` },
        { en: `The Law of Large Numbers`, zh: `大数定律` }
      ],
      answer: 1,
      explanation: { en: `A single noisy week of data shouldn't move a belief that dramatically — that's over-updating.`, zh: `仅仅一周充满噪音的数据，不应该让信念发生如此剧烈的变化——这就是过度更新。` }
    },
    {
      type: "mcq",
      question: { en: `Sticking rigidly to your original plan despite mounting contrary evidence is called:`, zh: `尽管反面证据不断累积，仍然固执地坚持最初的计划，这被称为：` },
      options: [
        { en: `Proper calibration`, zh: `恰当的校准` },
        { en: `Under-updating / confirmation bias`, zh: `更新不足 / 确认偏误` },
        { en: `The base rate fallacy`, zh: `基础比率谬误` },
        { en: `Diminishing marginal utility`, zh: `边际效用递减` }
      ],
      answer: 1,
      explanation: { en: `Refusing to adjust in the face of real evidence is the opposite failure mode from over-updating.`, zh: `面对真实证据仍拒绝调整，是与过度更新相反的另一种失败模式。` }
    },
    {
      type: "short",
      question: { en: `True or False: Good Bayesian updating means each new piece of evidence should nudge your belief proportionally to how strong and surprising it is.`, zh: `判断对错：良好的贝叶斯更新意味着每条新证据应该按其强度和意外程度成比例地调整你的信念。` },
      answer: "true",
      explanation: { en: `True — that's the essence of calibrated, proportional updating.`, zh: `正确——这正是校准良好、成比例更新的核心。` }
    }
  ]
},
{
  day: 25,
  title: { en: `Portfolio Thinking: Diversification & Risk`, zh: `组合思维：分散投资与风险` },
  content: {
    en: `<p>Diversification is applied probability: if you hold many imperfectly correlated bets instead of one big bet, the overall variance of your outcome shrinks even though each individual bet's risk stays the same. This is why "don't put all your eggs in one basket" is more than folk wisdom — it's a direct consequence of how variance combines across independent (or weakly correlated) events.</p>
    <div class="formula">Variance of a diversified portfolio grows slower than variance of concentrated bets, as correlation between bets decreases</div>
    <p>Portfolio thinking applies far beyond stocks: a career built around one single skill or one employer is a concentrated bet; a freelancer with five clients has a diversified income portfolio, even if the average expected income is similar. A product with one big customer is riskier than one with a hundred small customers of the same total revenue.</p>
    <p>The catch: diversification only reduces risk if the bets aren't all driven by the same underlying factor (recall Day 5's lesson on independence). Ten customers in the same industry, hit by the same recession, aren't truly diversified — that's an illusion of diversification.</p>`,
    zh: `<p>分散投资本质上是应用概率论：如果你持有多个不完全相关的投注，而不是一个大的单一投注，那么即使每个投注本身的风险不变，整体结果的方差也会缩小。这正是"不要把所有鸡蛋放在一个篮子里"不仅仅是一句民间智慧的原因——它是方差如何在独立（或弱相关）事件之间组合的直接结果。</p>
    <div class="formula">随着投注之间相关性的降低，分散投资组合的方差增长速度会慢于集中投注的方差</div>
    <p>组合思维的应用远不止于股票：一份只围绕单一技能或单一雇主构建的职业生涯，是一个集中投注；而一位拥有5个客户的自由职业者，即使平均预期收入相近，也拥有一个分散化的收入组合。一个只有一个大客户的产品，比拥有一百个总收入相同的小客户的产品风险更高。</p>
    <p>但有一个陷阱：只有当各个投注不是都由同一个潜在因素驱动时，分散投资才能真正降低风险（回想第5天关于独立性的内容）。十个处于同一行业、同时受到同一次经济衰退冲击的客户，并不是真正的分散——那只是一种分散的假象。</p>`
  },
  example: {
    en: `<p>A freelance designer with one large retainer client feels "secure" because the income is steady and large — but it's actually a concentrated bet: if that one client leaves, income drops to zero overnight. Five smaller clients with the same total revenue is a genuinely lower-risk position, even though it requires juggling more relationships.</p>`,
    zh: `<p>一位自由设计师只有一个大额的长期合约客户，感觉"很安稳"，因为收入稳定且金额可观——但这实际上是一个高度集中的投注：一旦这个客户流失，收入会瞬间归零。拥有五个总收入相同的较小客户，才是真正风险更低的状态，尽管这需要同时维护更多的客户关系。</p>`
  },
  takeaway: {
    en: `Concentration feels safe because it's simple, but diversification is what actually reduces variance — as long as your bets aren't secretly all correlated with the same underlying risk.`,
    zh: `集中投注因为简单而让人感觉安全，但真正能降低方差的其实是分散投资——前提是你的各个投注不是暗中都与同一个潜在风险相关。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Why does diversification reduce overall risk?`, zh: `为什么分散投资能降低整体风险？` },
      options: [
        { en: `It increases expected value`, zh: `它能提高期望值` },
        { en: `Combining imperfectly correlated bets shrinks the variance of the total outcome`, zh: `组合多个不完全相关的投注，会缩小总体结果的方差` },
        { en: `It eliminates all risk entirely`, zh: `它能彻底消除所有风险` },
        { en: `It guarantees every individual bet wins`, zh: `它能保证每一个单独的投注都会赢` }
      ],
      answer: 1,
      explanation: { en: `Diversification reduces total variance, not expected value — it's a risk-reduction tool, not a return-boosting one.`, zh: `分散投资降低的是总体方差，而不是期望值——它是一种降低风险的工具，而不是提升回报的工具。` }
    },
    {
      type: "mcq",
      question: { en: `Ten customers who are all large retailers hit hard by the same recession represent:`, zh: `十个客户全都是大型零售商，且都受到同一次经济衰退的严重冲击，这代表了什么？` },
      options: [
        { en: `True diversification`, zh: `真正的分散投资` },
        { en: `An illusion of diversification, because they're correlated through a shared risk factor`, zh: `一种分散投资的假象，因为它们通过一个共同的风险因素而相关` },
        { en: `Zero risk`, zh: `零风险` },
        { en: `A binomial distribution`, zh: `一个二项分布` }
      ],
      answer: 1,
      explanation: { en: `Shared exposure to the same underlying risk (the recession) means these bets move together, undermining true diversification.`, zh: `共同暴露于同一个潜在风险（经济衰退）之下，意味着这些投注会同向变化，这削弱了真正的分散效果。` }
    },
    {
      type: "short",
      question: { en: `True or False: Diversification only meaningfully reduces risk if the individual bets are not all driven by the same underlying factor.`, zh: `判断对错：只有当各个投注不是都由同一个潜在因素驱动时，分散投资才能真正有效地降低风险。` },
      answer: "true",
      explanation: { en: `True — this echoes Day 5's lesson: correlated bets don't diversify away risk the way independent ones do.`, zh: `正确——这呼应了第5天的内容：相关的投注无法像独立投注那样真正分散掉风险。` }
    }
  ]
},
{
  day: 26,
  title: { en: `Forecasting & Calibration`, zh: `预测与校准` },
  content: {
    en: `<p>A <strong>calibrated</strong> forecaster is one whose stated probabilities match reality over time: of all the times they say "80% confident," they should be right about 80% of the time — not 95% (overconfident) and not 50% (underconfident or hedging).</p>
    <p>Calibration is a skill you can train, and it's measurable. Track your predictions and their stated confidence, then check the outcomes later. Most people, untrained, are dramatically overconfident — events they call "90% certain" often happen closer to 70% of the time.</p>
    <div class="formula">Good forecasting = calibration (probabilities match outcome frequency) + resolution (confidently distinguishing likely from unlikely events)</div>
    <p>Two practical tips from forecasting research: break big questions into smaller, checkable sub-questions, and actively look for the strongest evidence against your current view before finalizing a number — this alone measurably improves calibration.</p>`,
    zh: `<p>一个<strong>校准良好</strong>的预测者，是指他所给出的概率能够长期与现实相符：在他所有说"有80%把握"的预测中，实际发生的比例也应该大约是80%——而不是95%（过度自信）或50%（信心不足/模棱两可）。</p>
    <p>校准是一种可以训练、也可以量化衡量的技能。记录你的预测以及你当时给出的信心水平，之后再核对实际结果。大多数未经训练的人都存在明显的过度自信——他们说"90%确定"的事件，实际发生的比例往往更接近70%。</p>
    <div class="formula">好的预测 = 校准度（概率与实际发生频率相符）+ 区分度（能够自信地区分可能与不可能发生的事件）</div>
    <p>预测研究给出的两个实用建议：把大问题拆解成更小、更容易验证的子问题；在最终确定一个数字之前，主动寻找反对你当前判断的最有力证据——仅这一点就能显著提升校准度。</p>`
  },
  example: {
    en: `<p>A founder says she's "90% confident" about hitting each quarterly target. After tracking 20 such predictions over two years, only 13 (65%) came true. That gap between stated confidence (90%) and actual hit rate (65%) reveals systematic overconfidence — a fixable pattern once she starts tracking it.</p>`,
    zh: `<p>一位创始人说她对每个季度目标的达成有"90%的把握"。两年下来追踪了20次这样的预测，结果只有13次（65%）真正实现。声称的信心水平（90%）与实际达成率（65%）之间的差距，暴露出系统性的过度自信——一旦开始追踪记录，这个模式是可以被纠正的。</p>`
  },
  takeaway: {
    en: `Track your predictions against outcomes over time. Most people are overconfident until they measure it — calibration is a trainable skill, not a fixed trait.`,
    zh: `长期追踪你的预测与实际结果之间的对比。大多数人在没有量化衡量之前都存在过度自信——校准是一种可以训练的技能，而不是天生固定的特质。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `A forecaster who says "90% confident" but is only right 60% of the time is:`, zh: `一位预测者声称"有90%的把握"，但实际正确率只有60%，这说明他：` },
      options: [
        { en: `Well-calibrated`, zh: `校准良好` },
        { en: `Overconfident`, zh: `过度自信` },
        { en: `Underconfident`, zh: `信心不足` },
        { en: `Using a binomial distribution incorrectly`, zh: `错误地使用了二项分布` }
      ],
      answer: 1,
      explanation: { en: `Stated confidence (90%) far exceeds actual accuracy (60%) — the textbook definition of overconfidence.`, zh: `声称的信心水平（90%）远超实际的准确率（60%）——这正是过度自信的典型定义。` }
    },
    {
      type: "mcq",
      question: { en: `Which practice most improves calibration, according to forecasting research?`, zh: `根据预测研究，以下哪种做法最能提升校准度？` },
      options: [
        { en: `Always going with your first gut number`, zh: `总是采用第一直觉给出的数字` },
        { en: `Actively seeking the strongest evidence against your current view before finalizing`, zh: `在最终确定判断之前，主动寻找反对当前观点的最有力证据` },
        { en: `Avoiding numerical probabilities entirely`, zh: `完全避免使用数字化的概率` },
        { en: `Only using round numbers like 50% or 100%`, zh: `只使用50%或100%这样的整数` }
      ],
      answer: 1,
      explanation: { en: `Actively seeking disconfirming evidence is one of the most consistently effective techniques found in forecasting research.`, zh: `主动寻找反驳证据，是预测研究中被反复证明最有效的技巧之一。` }
    },
    {
      type: "short",
      question: { en: `True or False: Calibration means your stated confidence levels match how often you're actually correct.`, zh: `判断对错：校准意味着你声称的信心水平与你实际正确的频率相匹配。` },
      answer: "true",
      explanation: { en: `True — that's the precise definition of calibration.`, zh: `正确——这正是校准的精确定义。` }
    }
  ]
},
{
  day: 27,
  title: { en: `Black Swans and Fat Tails`, zh: `黑天鹅与厚尾分布` },
  content: {
    en: `<p>Many real-world quantities — market crashes, pandemic outbreaks, viral hits, catastrophic failures — don't follow the normal distribution's "68-95-99.7" pattern (Day 13). Instead they're <strong>fat-tailed</strong>: extreme outliers happen far more often than a normal distribution would predict, and a small number of extreme events can dominate the total outcome.</p>
    <p>A "<strong>black swan</strong>" (Nassim Taleb's term) is an event that's rare, has an extreme impact, and seems "obvious in hindsight" but was essentially unpredictable in advance from historical data alone. The 2008 financial crisis and COVID-19's early economic shock are commonly cited examples.</p>
    <div class="formula">Fat tails: extreme events are rare but not negligible — standard-deviation-based intuition (Day 13) badly underestimates their frequency</div>
    <p>The practical response isn't to try to predict the specific black swan (usually impossible) — it's to build <strong>robustness</strong>: keep enough cash reserves, avoid concentrated bets that could be wiped out by a single extreme event, and structure decisions so that being wrong about a rare event is survivable rather than fatal.</p>`,
    zh: `<p>现实中的许多量——市场崩盘、疫情爆发、病毒式爆红内容、灾难性故障——并不遵循正态分布的"68-95-99.7"规律（第13天内容）。它们往往是<strong>厚尾</strong>分布：极端离群值发生的频率远高于正态分布所预测的水平，而少数极端事件往往能主导整体结果。</p>
    <p>"<strong>黑天鹅</strong>"（纳西姆·塔勒布提出的概念）指的是一种罕见、影响极端、且事后看来"显而易见"，但仅凭历史数据事先几乎无法预测的事件。2008年金融危机和新冠疫情初期的经济冲击，都是常被引用的例子。</p>
    <div class="formula">厚尾：极端事件虽然罕见，但绝不可忽略——基于标准差的直觉（第13天内容）严重低估了它们发生的频率</div>
    <p>面对黑天鹅，实际可行的应对方式并不是去尝试预测某个具体的黑天鹅事件（这通常是不可能的）——而是构建<strong>稳健性</strong>：保留足够的现金储备、避免可能因单一极端事件而被彻底摧毁的集中投注，并让决策结构确保：即使对某个罕见事件的判断错了，也是可以承受的，而不是致命的。</p>`
  },
  example: {
    en: `<p>A company keeps only 2 weeks of cash reserves because "historically we've always been able to raise more" (relying on normal-distribution-style comfort). A single black swan (a market crash freezing fundraising for 6 months) wipes them out — not because the probability of that event was miscalculated exactly, but because they built no robustness against a rare, extreme scenario the recent past hadn't shown them.</p>`,
    zh: `<p>某公司只保留2周的现金储备，理由是"历史上我们总能再融到资"（这依赖的是正态分布式的安全感）。一次黑天鹅事件（市场崩盘导致融资渠道冻结6个月）就足以让公司彻底垮掉——问题并不在于对那个事件概率的具体计算有误，而在于公司根本没有为这种近期历史未曾出现过的、罕见而极端的情形建立起任何稳健性。</p>`
  },
  takeaway: {
    en: `Don't try to precisely predict rare catastrophic events — build enough slack and avoid concentrated exposure so that being wrong about a black swan is survivable.`,
    zh: `不要试图精确预测罕见的灾难性事件——而是建立足够的缓冲空间，避免过度集中的风险敞口，这样即使在黑天鹅面前判断失误，也依然能够生存下来。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `A "fat-tailed" distribution means:`, zh: `"厚尾"分布意味着什么？` },
      options: [
        { en: `Extreme outliers are less common than a normal distribution predicts`, zh: `极端离群值比正态分布预测的更少见` },
        { en: `Extreme outliers are more common than a normal distribution predicts`, zh: `极端离群值比正态分布预测的更常见` },
        { en: `There are no outliers at all`, zh: `完全不存在离群值` },
        { en: `The distribution is perfectly symmetric like the normal curve`, zh: `该分布像正态曲线一样完全对称` }
      ],
      answer: 1,
      explanation: { en: `That's the defining property — fat tails mean extreme events happen more often than normal-distribution intuition suggests.`, zh: `这正是厚尾分布的定义特征——极端事件发生的频率超出了正态分布直觉的预期。` }
    },
    {
      type: "mcq",
      question: { en: `What is the recommended practical response to black swan risk?`, zh: `面对黑天鹅风险，推荐采取的实际应对方式是什么？` },
      options: [
        { en: `Precisely calculate the probability of every possible catastrophe`, zh: `精确计算每一种可能灾难的概率` },
        { en: `Build robustness and slack so rare extreme events are survivable, not fatal`, zh: `建立稳健性和缓冲空间，让罕见的极端事件变得可以承受，而不是致命的` },
        { en: `Ignore rare events since they're unpredictable`, zh: `因为无法预测就干脆忽略罕见事件` },
        { en: `Concentrate resources into your single best bet`, zh: `把资源集中押注在你认为最好的单一选项上` }
      ],
      answer: 1,
      explanation: { en: `Since specific black swans can't be reliably predicted, robustness — not prediction — is the practical defense.`, zh: `由于无法可靠地预测具体的黑天鹅事件，稳健性而非预测，才是实际可行的防御方式。` }
    },
    {
      type: "short",
      question: { en: `True or False: Black swan events are typically predictable well in advance using standard historical data.`, zh: `判断对错：黑天鹅事件通常可以通过标准历史数据提前很好地预测。` },
      answer: "false",
      explanation: { en: `False — by definition, black swans are essentially unpredictable in advance from historical data alone.`, zh: `错误——按照定义，黑天鹅事件本质上是仅凭历史数据无法提前预测的。` }
    }
  ]
},
{
  day: 28,
  title: { en: `Probabilistic Negotiation & Game Theory`, zh: `概率视角下的谈判与博弈论` },
  content: {
    en: `<p>Negotiation and competitive strategy are inherently probabilistic: you rarely know the other side's true walk-away point, alternatives, or true preferences — you're reasoning under uncertainty about another agent's hidden information, updating as they reveal signals (Bayesian updating again, Day 24).</p>
    <p>A core game theory concept: your <strong>BATNA</strong> (Best Alternative to a Negotiated Agreement) sets a probabilistic floor. The better and more certain your BATNA, the less risk you need to accept in any single negotiation — because you have a reliable fallback distribution of outcomes if this one falls through.</p>
    <div class="formula">Expected value of walking away (your BATNA) sets the threshold any deal must beat</div>
    <p>Mixed strategies — deliberately randomizing your behavior (e.g., sometimes accepting a slightly worse deal, sometimes not) — matter in repeated negotiations or competitive settings because a perfectly predictable strategy can be exploited. This is the same logic professional poker players and pricing teams use to avoid becoming exploitable.</p>`,
    zh: `<p>谈判和竞争策略本质上是概率性的：你通常并不知道对方真正的底线、备选方案，或真实偏好——你是在对另一个主体的隐藏信息进行不确定性推理，并随着他们释放出的信号不断更新判断（这又是第24天讲过的贝叶斯更新）。</p>
    <p>博弈论的一个核心概念是：你的<strong>BATNA</strong>（谈判协议的最佳替代方案）设定了一个概率意义上的底线。你的BATNA越好、越确定，你在任何一次具体谈判中就越不需要承担风险——因为一旦这次谈判破裂，你还有一个可靠的备选结果分布。</p>
    <div class="formula">离开谈判桌的期望值（你的BATNA）设定了任何协议都必须超越的门槛</div>
    <p>混合策略——刻意随机化自己的行为（比如有时接受一个稍差的条件，有时不接受）——在重复谈判或竞争场景中非常重要，因为一个完全可预测的策略是可以被对方利用的。这正是职业扑克玩家和定价团队用来避免自己被"看穿"和利用的同一套逻辑。</p>`
  },
  example: {
    en: `<p>A founder negotiating an acquisition offer has no other bidders (a weak, uncertain BATNA), so they're forced to accept more risk and worse terms just to close the deal. A founder with two competing term sheets has a strong BATNA and can credibly walk away from unfavorable terms — the probability of "no deal at all" is low either way, which changes the entire negotiating dynamic.</p>`,
    zh: `<p>一位创始人在谈判收购要约时，没有其他竞价方（这是一个弱且不确定的BATNA），因此被迫接受更高的风险和更差的条件，只为了能促成交易。而另一位手握两份竞争性投资意向书的创始人，拥有强有力的BATNA，可以有底气地拒绝不利条款——无论哪种情况，"完全谈不成"的概率都很低，但这彻底改变了整个谈判的动态。</p>`
  },
  takeaway: {
    en: `Strengthen your BATNA before you negotiate, not during. A strong, certain alternative is what actually gives you leverage — not aggressive tactics at the table.`,
    zh: `在谈判之前而不是谈判过程中，先去强化你的BATNA。真正给你带来谈判筹码的，是一个强有力、确定的替代方案，而不是谈判桌上的强硬策略。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `A strong BATNA gives you leverage in negotiation primarily because:`, zh: `一个强有力的BATNA能在谈判中带来筹码，主要是因为：` },
      options: [
        { en: `It makes you a more persuasive talker`, zh: `它能让你更有说服力` },
        { en: `It raises the expected-value threshold any deal must beat, reducing how much risk you need to accept`, zh: `它提高了任何协议都必须超越的期望值门槛，降低了你需要承担的风险` },
        { en: `It guarantees the other side will fold`, zh: `它能保证对方一定让步` },
        { en: `It has nothing to do with probability`, zh: `它与概率毫无关系` }
      ],
      answer: 1,
      explanation: { en: `A strong BATNA raises the bar any proposed deal must clear, which is fundamentally a probabilistic threshold.`, zh: `强有力的BATNA提高了任何提议协议都必须跨越的门槛，这本质上是一个概率意义上的阈值。` }
    },
    {
      type: "mcq",
      question: { en: `Why might a rational negotiator use a "mixed strategy" (randomizing behavior) in repeated negotiations?`, zh: `为什么理性的谈判者会在重复谈判中使用"混合策略"（随机化自己的行为）？` },
      options: [
        { en: `To confuse themselves`, zh: `为了让自己感到困惑` },
        { en: `A perfectly predictable strategy can be studied and exploited by the other side`, zh: `一个完全可预测的策略会被对方研究并利用` },
        { en: `Randomness always produces better outcomes`, zh: `随机性总能带来更好的结果` },
        { en: `It removes all risk from the negotiation`, zh: `它能消除谈判中的所有风险` }
      ],
      answer: 1,
      explanation: { en: `If your behavior is perfectly predictable, a repeated counterpart can learn and exploit it — randomization protects against that.`, zh: `如果你的行为完全可预测，长期对手就能摸清规律并加以利用——随机化正是为了防范这一点。` }
    },
    {
      type: "short",
      question: { en: `True or False: Negotiation outcomes are best understood as certain, not probabilistic.`, zh: `判断对错：谈判结果最好被理解为确定性的，而不是概率性的。` },
      answer: "false",
      explanation: { en: `False — negotiation involves reasoning under uncertainty about the other party's hidden information, making it inherently probabilistic.`, zh: `错误——谈判涉及在对方隐藏信息的不确定性下进行推理，本质上是概率性的。` }
    }
  ]
},
{
  day: 29,
  title: { en: `Cognitive Biases in Probabilistic Judgment`, zh: `概率判断中的认知偏误（复习）` },
  content: {
    en: `<p>Today, review five biases you've now met that consistently distort probabilistic judgment — recognizing them by name is often enough to catch yourself in the act.</p>
    <ul>
    <li><strong>Base rate neglect</strong> (Day 16): ignoring the prior in favor of vivid, specific evidence.</li>
    <li><strong>Gambler's fallacy / hot hand</strong> (Day 17): misreading independence in random streaks.</li>
    <li><strong>Overconfidence</strong> (Day 26): stated confidence exceeding actual accuracy.</li>
    <li><strong>Confusing P(A|B) with P(B|A)</strong> (Day 4): reversing the direction of a conditional probability.</li>
    <li><strong>Underestimating fat tails</strong> (Day 27): using normal-distribution intuition for catastrophic, rare events.</li>
    </ul>
    <p>These biases share a root cause: your brain evolved to make fast decisions with sparse data, not to run precise Bayesian calculations. The goal isn't to eliminate intuition — it's to know when to override it with the tools from this course.</p>
    <div class="formula">Bias-proofing habit: before trusting a probability judgment, name which bias might be distorting it</div>`,
    zh: `<p>今天，复习一下你在这门课中遇到的五种持续扭曲概率判断的认知偏误——能叫出它们的名字，往往就足以让你在犯错的当下抓住自己。</p>
    <ul>
    <li><strong>基础比率忽视</strong>（第16天）：忽略先验概率，偏向生动具体的证据。</li>
    <li><strong>赌徒谬误/热手效应</strong>（第17天）：误读随机连续事件中的独立性。</li>
    <li><strong>过度自信</strong>（第26天）：声称的信心水平超过实际的准确率。</li>
    <li><strong>混淆P(A|B)与P(B|A)</strong>（第4天）：搞反条件概率的方向。</li>
    <li><strong>低估厚尾</strong>（第27天）：用正态分布式的直觉去理解灾难性的稀有事件。</li>
    </ul>
    <p>这些偏误有一个共同的根源：你的大脑进化出的是在数据稀缺的情况下快速做出决策的能力，而不是精确运行贝叶斯计算的能力。我们的目标不是消灭直觉，而是知道什么时候该用这门课学到的工具去覆盖它。</p>
    <div class="formula">防偏误习惯：在相信一个概率判断之前，先说出可能正在扭曲它的是哪一种偏误</div>`
  },
  example: {
    en: `<p>Before finalizing next quarter's revenue forecast, a manager runs through the checklist: Am I anchoring on a vivid recent win instead of the base rate (base rate neglect)? Am I overconfident in this number (check calibration history)? Am I underestimating the chance of a rare disruption (fat tails)? This five-minute check catches errors a purely intuitive forecast would miss.</p>`,
    zh: `<p>在最终确定下个季度的营收预测之前，一位经理会走一遍检查清单：我是不是在用最近一次生动的成功案例来锚定判断，而不是基础比率（基础比率忽视）？我对这个数字是不是过度自信（对照校准历史）？我是不是低估了某种罕见颠覆性事件发生的可能性（厚尾）？这五分钟的检查，能捕捉到纯凭直觉做预测时会漏掉的错误。</p>`
  },
  takeaway: {
    en: `Keep this five-bias checklist handy. Naming a bias out loud is often the fastest way to neutralize it.`,
    zh: `把这五种偏误的检查清单随身备好。把偏误大声说出来，往往是消除它最快的方法。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Ignoring how common an outcome is overall, in favor of one vivid anecdote, is called:`, zh: `忽略一个结果的整体普遍程度，转而偏信一个生动的个案，这被称为：` },
      options: [
        { en: `The gambler's fallacy`, zh: `赌徒谬误` },
        { en: `Base rate neglect`, zh: `基础比率忽视` },
        { en: `Overconfidence`, zh: `过度自信` },
        { en: `Fat tails`, zh: `厚尾` }
      ],
      answer: 1,
      explanation: { en: `Ignoring the prior in favor of a vivid anecdote is precisely base rate neglect (Day 16).`, zh: `忽略先验、偏信生动的个案，正是基础比率忽视（第16天内容）。` }
    },
    {
      type: "mcq",
      question: { en: `A forecaster whose "90% confident" predictions come true only 60% of the time exhibits:`, zh: `一位预测者"90%确信"的预测只有60%成真，这体现了什么？` },
      options: [
        { en: `Good calibration`, zh: `良好的校准` },
        { en: `Overconfidence`, zh: `过度自信` },
        { en: `Underconfidence`, zh: `信心不足` },
        { en: `The base rate fallacy`, zh: `基础比率谬误` }
      ],
      answer: 1,
      explanation: { en: `Stated confidence exceeding real accuracy is the definition of overconfidence (Day 26).`, zh: `声称的信心超过实际准确率，正是过度自信的定义（第26天内容）。` }
    },
    {
      type: "short",
      question: { en: `True or False: These cognitive biases mean intuition should always be discarded in favor of formal calculation.`, zh: `判断对错：这些认知偏误意味着应该永远抛弃直觉，只依赖正式计算。` },
      answer: "false",
      explanation: { en: `False — the goal is knowing when to override intuition with these tools, not eliminating intuition altogether.`, zh: `错误——目标是知道什么时候该用这些工具去纠正直觉，而不是彻底抛弃直觉。` }
    }
  ]
},
{
  day: 30,
  title: { en: `Capstone: Your Probabilistic Decision Framework`, zh: `毕业课：构建你自己的概率决策框架` },
  content: {
    en: `<p>Congratulations — you've built a genuine probabilistic toolkit: the rules of probability, distributions and their shapes, and a set of debiasing habits for real decisions. Today's goal is to consolidate it into a repeatable framework you'll actually use.</p>
    <p><strong>The 5-step Probabilistic Decision Framework:</strong></p>
    <ul>
    <li><strong>1. Define the sample space.</strong> What are ALL the plausible outcomes, not just the two extremes? (Day 2)</li>
    <li><strong>2. Set a prior from a reference class.</strong> What happens, on average, in situations like this? (Days 6, 22)</li>
    <li><strong>3. Gather genuinely diagnostic evidence</strong> and update proportionally — resisting both over- and under-updating. (Days 16, 24)</li>
    <li><strong>4. Compute expected value AND spread.</strong> Don't just ask "what's likely," ask "how bad could the downside be, and is it catastrophic?" (Days 9, 10, 19, 27)</li>
    <li><strong>5. Decide, then track the outcome</strong> against your stated confidence to improve your calibration next time. (Day 26)</li>
    </ul>
    <div class="formula">Outcomes → Prior → Evidence → Expected Value + Risk → Decide + Track</div>
    <p>Pick one real decision in front of you right now — a hire, a pricing change, a personal choice — and run it through these five steps today. The framework only becomes useful once you've used it on something that actually matters.</p>`,
    zh: `<p>恭喜你——你已经建立起了一套真正的概率思维工具箱：概率的基本规则、各种分布及其形态，以及一整套用于实际决策的去偏见习惯。今天的目标是把它们整合成一个你会真正反复使用的框架。</p>
    <p><strong>五步概率决策框架：</strong></p>
    <ul>
    <li><strong>1. 定义样本空间。</strong> 所有合理的结果都有哪些，而不只是两个极端？（第2天）</li>
    <li><strong>2. 从参照类别设定先验。</strong> 在类似的情况下，平均而言会发生什么？（第6天、第22天）</li>
    <li><strong>3. 收集真正具有诊断价值的证据</strong>，并按比例更新——既不过度更新，也不更新不足。（第16天、第24天）</li>
    <li><strong>4. 同时计算期望值和波动范围。</strong> 不要只问"最可能发生什么"，还要问"最坏的情况有多糟，它是灾难性的吗？"（第9天、第10天、第19天、第27天）</li>
    <li><strong>5. 做出决策，然后追踪结果</strong>，并与你当初声明的信心水平进行对照，以提升你下一次的校准度。（第26天）</li>
    </ul>
    <div class="formula">结果集合 → 先验 → 证据 → 期望值+风险 → 决策+追踪</div>
    <p>现在就选一个你正面临的真实决策——一次招聘、一次定价调整、一个个人选择——今天就把它套进这五个步骤走一遍。只有当你把这个框架用在真正重要的事情上时，它才会真正发挥作用。</p>`
  },
  example: {
    en: `<p>A reader uses the framework on "should I quit my job to start a company?" Sample space: not just "succeed big" or "fail totally," but also "learn a lot and get a good job after" or "partial success." Prior: reference-class outcomes for similar founders. Evidence: savings runway, a validated early customer, a co-founder with complementary skills. Expected value and risk: what's the true financial and career downside, and is it survivable? Decide, then revisit the prediction in 6 months to calibrate the next big decision.</p>`,
    zh: `<p>一位读者把这个框架应用到"我该不该辞职创业？"这个问题上。样本空间：不只是"大获成功"或"彻底失败"，还包括"学到很多、之后找到更好的工作"或"部分成功"等等。先验：类似创业者的参照类别结果。证据：自己的储蓄能撑多久、是否已有经过验证的早期客户、是否有能力互补的联合创始人。期望值与风险：真实的财务和职业下行风险有多大，是否可以承受？做出决策，然后在6个月后回顾这个预测，为下一个重大决策校准判断。</p>`
  },
  takeaway: {
    en: `You now have a five-step framework, not just a collection of facts. Use it on one real decision today — that's the difference between knowing probability and thinking probabilistically.`,
    zh: `现在你拥有的不只是一堆孤立的知识点，而是一个五步框架。今天就把它用在一个真实的决策上——这正是"懂概率"和"用概率思考"之间的区别。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `What is step 1 of the 5-step probabilistic decision framework?`, zh: `五步概率决策框架的第一步是什么？` },
      options: [
        { en: `Compute expected value`, zh: `计算期望值` },
        { en: `Define the full sample space of outcomes`, zh: `定义完整的结果样本空间` },
        { en: `Pick the best option immediately`, zh: `立刻选出最佳选项` },
        { en: `Ignore the base rate`, zh: `忽略基础比率` }
      ],
      answer: 1,
      explanation: { en: `Everything else in the framework depends on first having named the full range of plausible outcomes.`, zh: `框架中的其他一切步骤，都建立在首先明确列出所有合理结果范围的基础之上。` }
    },
    {
      type: "mcq",
      question: { en: `Step 4 of the framework asks you to evaluate expected value AND:`, zh: `框架的第4步要求你在评估期望值的同时，还要评估什么？` },
      options: [
        { en: `Your gut feeling only`, zh: `只凭直觉感受` },
        { en: `The spread/risk, including catastrophic downside`, zh: `波动范围/风险，包括灾难性的下行可能` },
        { en: `The opinion of the loudest person in the room`, zh: `会议室里声音最大的人的意见` },
        { en: `Nothing else is needed`, zh: `不需要评估其他任何东西` }
      ],
      answer: 1,
      explanation: { en: `Days 10, 19, and 27 all point to the same conclusion: expected value alone is insufficient without also weighing risk and catastrophic downside.`, zh: `第10天、第19天和第27天的内容都指向同一个结论：仅有期望值是不够的，还必须权衡风险和灾难性的下行可能。` }
    },
    {
      type: "short",
      question: { en: `True or False: Step 5 of the framework involves tracking your outcome against your stated confidence to improve future calibration.`, zh: `判断对错：框架的第5步包括将结果与你当初声明的信心水平进行对照，以提升未来的校准度。` },
      answer: "true",
      explanation: { en: `True — this closes the loop back to Day 26's lesson on calibration, turning every decision into training data for the next one.`, zh: `正确——这与第26天关于校准的内容形成闭环，把每一次决策都变成下一次决策的训练数据。` }
    }
  ]
}
];
