const WEEK3 = [
{
  day: 15,
  title: { en: `Correlation vs. Causation`, zh: `相关性与因果性` },
  content: {
    en: `<p>Two variables are <strong>correlated</strong> when they tend to move together — but correlation alone never tells you that one causes the other. There are three common alternative explanations: reverse causation (B causes A), a confounding variable (C causes both A and B), or pure coincidence.</p>
    <p>A classic confounder example: ice cream sales and drowning deaths are strongly correlated. Ice cream doesn't cause drowning — hot weather (the confounder) drives both more ice cream purchases and more swimming, hence more drownings.</p>
    <p>In business, this trap is everywhere: "companies that use our premium plan have 3x higher retention" might mean the premium plan causes retention — or it might mean successful, committed customers (a confounder) are the ones who both upgrade AND stick around.</p>
    <div class="formula">Correlation ⇏ Causation. Ask: reverse causation? confounder? coincidence?</div>`,
    zh: `<p>当两个变量倾向于同向变化时，它们就是<strong>相关</strong>的——但仅凭相关性，永远无法断定一个变量导致了另一个变量。通常有三种替代解释：反向因果（B导致了A）、混杂变量（C同时导致了A和B），或者纯属巧合。</p>
    <p>一个经典的混杂变量例子：冰淇淋销量和溺水人数高度相关。并不是冰淇淋导致了溺水——炎热的天气（混杂变量）同时推动了冰淇淋销量的上升和游泳人数的增加，从而导致溺水事件增多。</p>
    <p>在商业中，这个陷阱随处可见："使用我们高级套餐的公司留存率高出3倍"，这可能意味着高级套餐提升了留存——但也可能是那些本就成功、忠诚度高的客户（混杂变量），既更愿意升级，也更愿意长期留存。</p>
    <div class="formula">相关 ⇏ 因果。请自问：是否存在反向因果？是否存在混杂变量？是否只是巧合？</div>`
  },
  example: {
    en: `<p>A hiring manager notices employees who went to a certain university perform better. Before crediting the university, check for confounders: maybe that university has selective admissions (confounder = raw talent), which explains both getting in AND performing well at work — the degree itself may add little.</p>`,
    zh: `<p>一位招聘经理注意到，毕业于某所大学的员工表现更好。在把功劳归给这所大学之前，先检查是否存在混杂变量：也许这所大学的录取门槛本身就很高（混杂变量=原始天赋），这既能解释为什么他们能被录取，也能解释为什么他们工作表现出色——学位本身可能并没有增加太多价值。</p>`
  },
  takeaway: {
    en: `Whenever you see a correlation, force yourself to name at least one plausible confounder before assuming causation.`,
    zh: `每当你看到一个相关性时，强迫自己先想出至少一个可能的混杂变量，再去假设因果关系。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Cities with more firefighters tend to have more fire damage. What's the most likely explanation?`, zh: `消防员越多的城市，火灾损失往往也越大。最可能的解释是什么？` },
      options: [
        { en: `Firefighters cause fires`, zh: `消防员导致了火灾` },
        { en: `Larger, more severe fires (a confounder) draw more firefighters AND cause more damage`, zh: `更大、更严重的火灾（混杂变量）既需要更多消防员，也造成更大损失` },
        { en: `It's pure coincidence`, zh: `这纯属巧合` },
        { en: `Fewer firefighters cause less damage`, zh: `消防员越少造成的损失越小` }
      ],
      answer: 1,
      explanation: { en: `Fire severity is the confounding variable driving both the number of firefighters dispatched and the resulting damage.`, zh: `火灾的严重程度是混杂变量，它同时决定了派出的消防员数量和最终的损失大小。` }
    },
    {
      type: "mcq",
      question: { en: `Which is the best defense against mistaking correlation for causation?`, zh: `以下哪种方法最能有效防止把相关性误认为因果关系？` },
      options: [
        { en: `Collecting more data of the same kind`, zh: `收集更多同类型的数据` },
        { en: `Actively looking for confounding variables or running a controlled experiment`, zh: `主动寻找混杂变量，或进行对照实验` },
        { en: `Trusting a strong correlation coefficient`, zh: `信任一个很高的相关系数` },
        { en: `Ignoring the relationship entirely`, zh: `完全忽略这个关系` }
      ],
      answer: 1,
      explanation: { en: `Controlled experiments (like A/B tests, Day 21) and deliberately hunting for confounders are the real tools for establishing causation.`, zh: `对照实验（例如第21天的A/B测试）以及主动排查混杂变量，才是真正建立因果关系的工具。` }
    },
    {
      type: "short",
      question: { en: `True or False: A strong correlation is enough evidence to prove causation.`, zh: `判断对错：强相关性足以证明因果关系。` },
      answer: "false",
      explanation: { en: `False — correlation is necessary but never sufficient evidence for causation.`, zh: `错误——相关性是因果关系的必要条件，但绝不是充分条件。` }
    }
  ]
},
{
  day: 16,
  title: { en: `The Base Rate Fallacy`, zh: `基础比率谬误` },
  content: {
    en: `<p>The <strong>base rate fallacy</strong> happens when you ignore how common something is in the overall population (the base rate, or prior) and focus only on specific, vivid evidence. It's the same mistake Bayes' theorem (Day 6) helps you avoid — but it's so common and costly it deserves its own day.</p>
    <p>People consistently overweight vivid, specific evidence (a positive test, a glowing reference, a dramatic anecdote) and underweight the boring statistical background rate. A "95% accurate" fraud detector sounds airtight, but if fraud is genuinely rare, most flagged transactions will still be innocent.</p>
    <div class="formula">Ignoring the base rate = ignoring the prior in Bayes' theorem</div>
    <p>The fix is a habit, not a formula: before reacting to any striking piece of evidence, ask "how common is this thing in general, before I even saw this evidence?"</p>`,
    zh: `<p><strong>基础比率谬误</strong>指的是忽略某件事在整体人群中的普遍程度（即基础比率/先验概率），而只关注具体、生动的证据。这其实和贝叶斯定理（第6天）帮你避免的错误是同一类问题——但它实在太常见、代价也太高，值得单独用一天来讲。</p>
    <p>人们总是习惯性地过度重视生动、具体的证据（一次阳性检测、一封热情洋溢的推荐信、一个戏剧化的案例），却低估了枯燥的统计基础比率。一个"95%准确"的欺诈检测系统听起来天衣无缝，但如果欺诈本身确实很罕见，被标记出来的交易中，大部分仍然可能是无辜的。</p>
    <div class="formula">忽略基础比率 = 忽略贝叶斯定理中的先验概率</div>
    <p>解决办法与其说是一个公式，不如说是一种习惯：在对任何引人注目的证据做出反应之前，先问自己"在看到这个证据之前，这件事本身有多普遍？"</p>`
  },
  example: {
    en: `<p>An investor hears a founder pitch with incredible charisma and a killer story (vivid evidence) and wants to invest immediately. The base rate reminder: roughly 90% of startups fail regardless of how good the pitch sounds. That sobering prior should temper — not eliminate — enthusiasm from any single pitch.</p>`,
    zh: `<p>一位投资人听到某位创始人极具魅力、故事讲得引人入胜（生动的证据），立刻想要投资。这时基础比率提醒我们：无论路演讲得多好，大约90%的创业公司最终都会失败。这个清醒的先验概率，应该（但不是完全）冲淡对任何单次路演的热情。</p>`
  },
  takeaway: {
    en: `Before any striking piece of evidence changes your mind, anchor first on the base rate — how common is this outcome across everyone, not just this one case?`,
    zh: `在任何引人注目的证据改变你的想法之前，先锚定基础比率——在所有情况中，这个结果有多普遍，而不是只看这一个案例？`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `A resume-screening AI is "90% accurate" at spotting top hires, but only 10% of applicants are actually top-hire material (the base rate). What does the base rate fallacy warn you about?`, zh: `一个简历筛选AI"90%准确"地识别优质候选人，但实际上只有10%的应聘者真正是优质候选人（基础比率）。基础比率谬误提醒我们要警惕什么？` },
      options: [
        { en: `Trusting the 90% figure blindly without checking how many flagged candidates are actually false positives`, zh: `盲目相信90%这个数字，而不去检查被标记的候选人中有多少其实是假阳性` },
        { en: `Nothing — 90% is always reliable`, zh: `没什么需要警惕的——90%永远是可靠的` },
        { en: `The AI must be broken`, zh: `这个AI一定是坏了` },
        { en: `Base rates only matter for medical tests`, zh: `基础比率只在医学检测中才重要` }
      ],
      answer: 0,
      explanation: { en: `With a low base rate, even a 90% accurate tool can flag mostly false positives — exactly the pattern from Day 6's medical test example.`, zh: `当基础比率很低时，即使是90%准确的工具，标记出的结果也可能大多是假阳性——这正是第6天医学检测例子中的模式。` }
    },
    {
      type: "mcq",
      question: { en: `The base rate fallacy is essentially ignoring which part of Bayes' theorem?`, zh: `基础比率谬误本质上是忽略了贝叶斯定理中的哪一部分？` },
      options: [
        { en: `The likelihood`, zh: `似然` },
        { en: `The prior`, zh: `先验` },
        { en: `The posterior`, zh: `后验` },
        { en: `The sample space`, zh: `样本空间` }
      ],
      answer: 1,
      explanation: { en: `The base rate IS the prior — ignoring it is the same mistake in different clothing.`, zh: `基础比率本身就是先验概率——忽略它其实是同一个错误换了个说法。` }
    },
    {
      type: "short",
      question: { en: `True or False: Vivid, specific evidence should always outweigh boring statistical base rates.`, zh: `判断对错：生动、具体的证据应该总是比枯燥的统计基础比率更重要。` },
      answer: "false",
      explanation: { en: `False — vivid evidence should update your belief, but the base rate should still anchor it.`, zh: `错误——生动的证据应该用来更新你的信念，但基础比率仍然应该作为锚点。` }
    }
  ]
},
{
  day: 17,
  title: { en: `Gambler's Fallacy & the Hot Hand`, zh: `赌徒谬误与热手效应` },
  content: {
    en: `<p>The <strong>gambler's fallacy</strong> is the mistaken belief that independent random events "owe" a correction — after a coin lands heads 5 times in a row, people wrongly feel tails is "due." But independent trials have no memory: the probability of heads on flip 6 is still 50%, unaffected by the past.</p>
    <p>The related "<strong>hot hand</strong>" belief is the opposite error: assuming a streak of successes (a basketball player making 5 shots in a row) means the next one is more likely to succeed too, even in domains where trials remain close to independent.</p>
    <p>The practical skill is diagnosis: is the process actually independent (coin flips, roulette, most lottery draws) — in which case streaks predict nothing — or is there a real mechanism for momentum or persistence (a salesperson gaining confidence, a market trend with genuine momentum)? Treating dependent processes as independent, or vice versa, both lead to bad decisions.</p>`,
    zh: `<p><strong>赌徒谬误</strong>是一种错误信念，认为独立的随机事件会自我"纠正"——当硬币连续5次正面朝上后，人们会错误地觉得反面"该出现了"。但独立试验是没有记忆的：第6次投掷正面朝上的概率仍然是50%，不受过去结果的影响。</p>
    <p>与之相关的"<strong>热手效应</strong>"信念则是相反的错误：认为一连串的成功（比如篮球运动员连续投中5球）意味着下一次成功的概率也会更高，即使在各次试验其实接近独立的领域中也是如此。</p>
    <p>真正的技能在于判断：这个过程是否真的独立（掷硬币、轮盘赌、大多数彩票开奖）——如果是，连胜连败并不能预测未来；还是说，其中确实存在动量/持续性的机制（销售员越谈越有信心、市场趋势具有真实的惯性）？把相关的过程当作独立处理，或者反过来，都会导致糟糕的决策。</p>`
  },
  example: {
    en: `<p>A trader sees a stock rise for 4 days straight and reasons "it's due for a pullback" (gambler's fallacy) — but daily price moves in an efficient market are close to independent, so the streak alone tells you almost nothing about tomorrow. Meanwhile, a manager assumes a rep on a "hot streak" will keep closing at the same rate without checking whether anything actually changed — the hot hand fallacy in the other direction.</p>`,
    zh: `<p>一位交易者看到某只股票连续上涨4天，推断"该回调了"（赌徒谬误）——但在有效市场中，每日的价格变动接近独立，仅凭连涨本身几乎无法预测明天的走势。与此同时，一位经理认为处于"手感火热"状态的销售会一直保持同样的成交率，却没有去检查是否真的发生了变化——这是另一个方向上的热手谬误。</p>`
  },
  takeaway: {
    en: `Before reacting to a streak, ask: is this process actually independent? If yes, the streak predicts nothing. Only if there's a real mechanism for momentum should the streak update your belief.`,
    zh: `在对一连串结果做出反应之前，先问：这个过程是否真的独立？如果是，连胜连败并不能预测未来。只有当确实存在动量的机制时，这一连串结果才应该改变你的判断。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `A roulette wheel has landed on red 6 times in a row. What is the probability the next spin is black (assume 50/50, ignore green)?`, zh: `轮盘赌已经连续6次开出红色。假设正常情况下概率各为50%（忽略绿色），下一次开出黑色的概率是多少？` },
      options: [
        { en: `About 50%`, zh: `大约50%` },
        { en: `Less than 50%`, zh: `小于50%` },
        { en: `More than 50%`, zh: `大于50%` },
        { en: `Exactly 0%`, zh: `恰好为0%` }
      ],
      answer: 0,
      explanation: { en: `Each spin is independent — the wheel has no memory of past results.`, zh: `每一次转动都是独立的——轮盘对过去的结果没有任何记忆。` }
    },
    {
      type: "mcq",
      question: { en: `Which best describes the gambler's fallacy?`, zh: `以下哪一项最准确地描述了赌徒谬误？` },
      options: [
        { en: `Believing independent events must "balance out" soon`, zh: `认为独立事件很快必须"自我平衡"` },
        { en: `Believing streaks are always meaningful`, zh: `认为连续结果总是有意义的` },
        { en: `Believing probabilities change over time naturally`, zh: `认为概率会随时间自然变化` },
        { en: `Correctly identifying a dependent process`, zh: `正确识别出一个相关的过程` }
      ],
      answer: 0,
      explanation: { en: `That's the core error — expecting a "correction" from a process that has no memory.`, zh: `这正是核心错误——期待一个没有记忆的过程会自我"纠正"。` }
    },
    {
      type: "short",
      question: { en: `True or False: Independent random events have no "memory" of past outcomes.`, zh: `判断对错：独立的随机事件对过去的结果没有"记忆"。` },
      answer: "true",
      explanation: { en: `True — that's the defining property of independence.`, zh: `正确——这正是独立性的定义特征。` }
    }
  ]
},
{
  day: 18,
  title: { en: `Expected Value in Everyday Decisions`, zh: `期望值在日常决策中的应用` },
  content: {
    en: `<p>You've learned expected value formally (Day 9). Today: turn it into a daily habit. Any recurring decision — should I pay for the extended warranty, should I take the toll road, should I negotiate this offer — can be roughly evaluated by estimating outcomes, probabilities, and payoffs, then multiplying and summing.</p>
    <p>You don't need precision to benefit. Even rough estimates ("this feels like roughly a 30% chance of X, worth about $500 if it happens") beat pure gut instinct, because writing down the numbers forces you to notice which assumption is driving the decision — and lets you sanity-check it.</p>
    <div class="formula">Decision value ≈ Σ [probability of outcome × value of outcome] − cost</div>
    <p>The habit to build: whenever you catch yourself about to decide from pure emotion ("I have a good feeling about this"), pause and sketch even a rough expected-value table. It rarely takes more than two minutes and often reverses the decision.</p>`,
    zh: `<p>你已经在第9天正式学习了期望值。今天，要把它变成一个日常习惯。任何反复出现的决策——要不要购买延保服务、要不要走收费路段、要不要就这份offer进行谈判——都可以通过估算结果、概率和收益，再相乘求和，来大致评估。</p>
    <p>你不需要精确的数字才能从中受益。即使是粗略的估算（"这大概有30%的概率会发生X，一旦发生大约值500元"）也比纯粹凭直觉判断要好，因为把数字写下来会迫使你注意到究竟是哪个假设在驱动这个决策——并且让你可以对它进行合理性检验。</p>
    <div class="formula">决策价值 ≈ Σ [结果发生的概率 × 结果的价值] − 成本</div>
    <p>需要养成的习惯是：每当你发现自己正准备凭纯粹的情绪做决定时（"我对这件事感觉不错"），停下来，哪怕只是粗略地画一张期望值表格。这通常花不了两分钟，却常常能推翻原本的决定。</p>`
  },
  example: {
    en: `<p>Should you buy a $200 extended warranty on a $1,000 laptop? If there's a 15% chance of a $600 repair within the warranty period, the expected cost of NOT buying it is 0.15 × $600 = $90 — less than the $200 warranty price. Unless you're highly risk-averse, skipping the warranty has better expected value, even though buying it feels "safer."</p>`,
    zh: `<p>你要不要为一台1000元的笔记本电脑购买200元的延保服务？如果在保修期内有15%的概率需要支付600元的维修费，那么不购买延保的预期成本是0.15 × 600 = 90元——低于200元的延保价格。除非你极度厌恶风险，不购买延保的期望值反而更好，尽管购买它"感觉上"更保险。</p>`
  },
  takeaway: {
    en: `Before any recurring decision, sketch a two-minute expected-value estimate. Rough numbers beat pure gut feeling almost every time.`,
    zh: `在任何反复出现的决策之前，花两分钟粗略估算一下期望值。粗略的数字几乎总是比纯粹的直觉更可靠。`
  },
  exercises: [
    {
      type: "numeric",
      question: { en: `A $200 extended warranty covers a repair that has a 20% chance of costing $500. What is the expected cost of NOT buying the warranty?`, zh: `一份200美元的延保服务覆盖一项维修，该维修有20%的概率花费500美元。不购买延保的预期成本是多少？` },
      answer: "100",
      explanation: { en: `0.2 × 500 = 100.`, zh: `0.2 × 500 = 100。` }
    },
    {
      type: "mcq",
      question: { en: `Given the expected cost of not buying is $100 and the warranty costs $200, what does expected value suggest?`, zh: `已知不购买延保的预期成本是100美元，而延保本身要价200美元，期望值分析建议怎么做？` },
      options: [
        { en: `Buy the warranty — it's a good deal`, zh: `购买延保——这是一笔划算的交易` },
        { en: `Skip the warranty — its price exceeds the expected cost it protects against`, zh: `不买延保——它的价格超过了它所防范的预期成本` },
        { en: `It's exactly a coin flip`, zh: `这完全是五五开的选择` },
        { en: `Not enough information to say`, zh: `信息不足，无法判断` }
      ],
      answer: 1,
      explanation: { en: `Paying $200 to avoid a $100 expected loss is negative expected value, unless catastrophic-loss protection (Day 19) justifies it.`, zh: `花200美元去规避一个预期损失只有100美元的风险，期望值是负的，除非考虑到灾难性损失保护（第19天内容）能证明其合理性。` }
    },
    {
      type: "short",
      question: { en: `True or False: A rough, quickly-sketched expected value estimate is generally more reliable than pure gut feeling for repeated decisions.`, zh: `判断对错：对于反复出现的决策，一个快速粗略的期望值估算通常比纯粹的直觉更可靠。` },
      answer: "true",
      explanation: { en: `True — writing down even rough numbers surfaces hidden assumptions that gut feeling skips over.`, zh: `正确——即使是粗略的数字，写下来也能暴露出直觉容易忽略的隐藏假设。` }
    }
  ]
},
{
  day: 19,
  title: { en: `Risk, Insurance, and Utility`, zh: `风险、保险与效用` },
  content: {
    en: `<p>If expected value were the only thing that mattered, no one would ever buy insurance — insurers price policies so the expected value is slightly negative for the buyer (that's how they stay in business). Yet buying insurance is often still the right call. Why?</p>
    <p>The answer is <strong>utility</strong>: money isn't worth the same to you at every level of wealth. Losing $50,000 you can't afford to lose (bankruptcy, losing your home) hurts far more than 50,000 times the pain of losing $1. This is called <strong>diminishing marginal utility</strong> — each additional dollar matters a little less, and each dollar of catastrophic loss matters a lot more.</p>
    <div class="formula">Rational risk-taking ≠ maximizing expected value. It means maximizing expected utility.</div>
    <p>This is why it can be simultaneously true that "the lottery has negative expected value, don't play it for the money" and "buying health or home insurance with negative expected value is still smart" — the difference is whether the potential loss is catastrophic (insurance) or merely disappointing (a lottery ticket).</p>`,
    zh: `<p>如果期望值是唯一重要的因素，就不会有人购买保险——保险公司在定价时，会让保单对购买者而言的期望值略微为负（这正是保险公司能够盈利的原因）。然而，购买保险往往仍然是明智的选择。这是为什么？</p>
    <p>答案在于<strong>效用</strong>：金钱在你财富的不同水平上，价值是不同的。损失一笔你无法承受的5万元（可能导致破产、失去房子），带来的痛苦远远超过损失1元痛苦的5万倍。这被称为<strong>边际效用递减</strong>——每多一元钱带来的满足感会逐渐变小，而每一元灾难性损失带来的痛苦却会急剧增大。</p>
    <div class="formula">理性的风险决策 ≠ 最大化期望值，而是最大化期望效用。</div>
    <p>这就是为什么以下两句话可以同时成立："彩票的期望值是负的，别为了赚钱去买"，以及"购买期望值为负的医疗/房屋保险仍然是明智的"——区别就在于潜在损失是灾难性的（保险）还是仅仅令人失望的（彩票）。</p>`
  },
  example: {
    en: `<p>A founder is offered a chance to bet the entire company's cash reserves on a marketing campaign with positive expected value but a 20% chance of running the company out of money before the next funding round. Even with positive expected value, this bet can be irrational — bankruptcy isn't just "a bad outcome," it's catastrophic and non-recoverable, and should be weighted far more heavily than the raw dollar amount suggests.</p>`,
    zh: `<p>一位创始人有机会把公司全部现金储备押注在一个营销活动上，这个活动的期望值为正，但有20%的概率会导致公司在下一轮融资之前耗尽资金。即使期望值为正，这个赌注也可能是不理性的——破产不仅仅是"一个糟糕的结果"，而是灾难性的、不可挽回的结果，它应该被赋予远超其账面金额本身的权重。</p>`
  },
  takeaway: {
    en: `Don't just maximize expected value — protect against catastrophic, irreversible losses even at a negative expected-value cost. That's what insurance, and prudent risk management, are for.`,
    zh: `不要只追求期望值最大化——即使要付出期望值为负的代价，也要防范灾难性、不可逆转的损失。这正是保险以及审慎风险管理存在的意义。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Why is buying insurance often rational even though it has a negative expected value?`, zh: `为什么即使保险的期望值为负，购买保险往往仍然是理性的？` },
      options: [
        { en: `Insurance companies always lose money`, zh: `保险公司总是亏钱` },
        { en: `Diminishing marginal utility means catastrophic losses hurt disproportionately more than their dollar value`, zh: `边际效用递减意味着灾难性损失带来的痛苦，远超其账面金额本身` },
        { en: `Expected value calculations are always wrong`, zh: `期望值计算总是错的` },
        { en: `Insurance always has positive expected value`, zh: `保险的期望值总是正的` }
      ],
      answer: 1,
      explanation: { en: `Insurance trades a small certain cost for protection against a rare but catastrophic, high-utility-cost loss.`, zh: `保险用一笔小额但确定的成本，换取对罕见但灾难性、高效用损失的保护。` }
    },
    {
      type: "mcq",
      question: { en: `A startup considers risking 90% of its cash on a high-expected-value bet that could bankrupt it. Utility theory suggests:`, zh: `一家创业公司考虑将90%的现金押注在一个期望值很高、但可能导致公司破产的赌注上。效用理论建议怎么做？` },
      options: [
        { en: `Always take positive-EV bets regardless of size`, zh: `无论规模大小，都应该接受任何期望值为正的赌注` },
        { en: `Weigh the catastrophic, irreversible downside more heavily than the raw expected value`, zh: `应当比原始期望值更重地权衡那个灾难性、不可逆的下行风险` },
        { en: `Ignore downside risk entirely`, zh: `完全忽略下行风险` },
        { en: `Never take any risk at all`, zh: `永远不要承担任何风险` }
      ],
      answer: 1,
      explanation: { en: `Bankruptcy is a non-recoverable state — expected utility theory says it deserves outsized weight, not just its face-value probability.`, zh: `破产是一种不可恢复的状态——期望效用理论认为，它应该被赋予远超其表面概率的权重。` }
    },
    {
      type: "short",
      question: { en: `True or False: Diminishing marginal utility means each additional dollar is worth exactly the same to you, no matter how much money you already have.`, zh: `判断对错：边际效用递减意味着，无论你已经拥有多少钱，每多一元钱对你的价值都完全相同。` },
      answer: "false",
      explanation: { en: `False — that's the opposite of diminishing marginal utility, which says each additional dollar is worth less as wealth grows.`, zh: `错误——这与边际效用递减恰恰相反，后者认为随着财富增加，每多一元钱的价值会逐渐降低。` }
    }
  ]
},
{
  day: 20,
  title: { en: `Confidence Intervals: How Sure Are We?`, zh: `置信区间：我们究竟有多确定？` },
  content: {
    en: `<p>A single number (like "our average order value is $47") hides how much uncertainty surrounds it. A <strong>confidence interval</strong> gives a range instead: "we're 95% confident the true average order value is between $43 and $51." It communicates both the estimate AND how much to trust it.</p>
    <div class="formula">Estimate ± Margin of Error (a wider interval means less certainty, often from a smaller sample)</div>
    <p>Two things shrink a confidence interval, making you more certain: a larger sample size, and less variability in the underlying data. This is the direct business payoff of the Law of Large Numbers (Day 14) — more data narrows your uncertainty.</p>
    <p>A "95% confidence interval" doesn't strictly mean "95% probability the true value is in this range" in the technical sense — but for everyday decision-making, treating it that way is a reasonable simplification. The key habit: whenever you see a single reported number (survey result, average rating, conversion rate), ask "what's the margin of error, and how big was the sample?"</p>`,
    zh: `<p>一个单一的数字（比如"我们的平均订单金额是47元"）掩盖了它背后有多大的不确定性。<strong>置信区间</strong>则提供了一个范围："我们有95%的把握认为，真实的平均订单金额介于43元到51元之间。"它同时传达了估计值本身，以及这个估计值有多可信。</p>
    <div class="formula">估计值 ± 误差范围（区间越宽，代表确定性越低，通常是因为样本量较小）</div>
    <p>有两个因素能让置信区间变窄（也就是让你更确定）：更大的样本量，以及数据本身波动更小。这正是大数定律（第14天）在商业上的直接体现——更多的数据能缩小你的不确定性。</p>
    <p>严格来说，"95%置信区间"并不意味着"真实值有95%的概率落在这个区间内"——但在日常决策中，这样理解也是一种合理的简化。需要养成的习惯是：每当你看到一个单一的报告数字（调查结果、平均评分、转化率），都要问一句"误差范围是多少？样本量有多大？"</p>`
  },
  example: {
    en: `<p>A survey of 30 customers shows 60% satisfaction. With such a small sample, the 95% confidence interval might be roughly 42%-78% — a huge range that shouldn't drive major decisions. The same 60% from 3,000 customers might have a confidence interval of just 58%-62%, which is actually decision-worthy.</p>`,
    zh: `<p>一份针对30位客户的调查显示满意度为60%。由于样本量太小，95%置信区间可能大致是42%到78%——范围如此之宽，不应该据此做出重大决策。而同样是60%，如果来自3000位客户的调查，置信区间可能只有58%到62%，这样的结果才真正值得用来做决策。</p>`
  },
  takeaway: {
    en: `Never trust a single reported percentage without asking about sample size and margin of error — a wide confidence interval means the number is basically noise.`,
    zh: `永远不要只相信一个孤立的百分比数字，一定要问清楚样本量和误差范围——如果置信区间很宽，这个数字基本上就是噪音。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Which survey result is more trustworthy?`, zh: `以下哪个调查结果更值得信赖？` },
      options: [
        { en: `60% approval from 25 people`, zh: `来自25人的60%赞成率` },
        { en: `60% approval from 4,000 people`, zh: `来自4000人的60%赞成率` },
        { en: `They are equally trustworthy`, zh: `两者同样值得信赖` }
      ],
      answer: 1,
      explanation: { en: `A larger sample produces a much narrower, more trustworthy confidence interval around the same point estimate.`, zh: `样本量更大时，同样的点估计会对应一个窄得多、也更值得信赖的置信区间。` }
    },
    {
      type: "mcq",
      question: { en: `What primarily narrows a confidence interval?`, zh: `以下哪项主要能让置信区间变窄？` },
      options: [
        { en: `A larger sample size`, zh: `更大的样本量` },
        { en: `A more exciting result`, zh: `一个更令人兴奋的结果` },
        { en: `Rounding the percentage`, zh: `对百分比进行四舍五入` },
        { en: `Asking more emotionally worded survey questions`, zh: `使用更情绪化的调查问题措辞` }
      ],
      answer: 0,
      explanation: { en: `Sample size (and lower underlying variability) are what genuinely shrink a confidence interval.`, zh: `样本量（以及数据本身更小的波动性）才是真正能缩小置信区间的因素。` }
    },
    {
      type: "short",
      question: { en: `True or False: A wide confidence interval indicates high certainty about the true value.`, zh: `判断对错：宽的置信区间意味着我们对真实值有很高的确定性。` },
      answer: "false",
      explanation: { en: `False — a wide interval means LOW certainty; a narrow interval means high certainty.`, zh: `错误——区间越宽，代表确定性越低；区间越窄，确定性才越高。` }
    }
  ]
},
{
  day: 21,
  title: { en: `A/B Testing & Hypothesis Testing Basics`, zh: `A/B测试与假设检验基础` },
  content: {
    en: `<p>A/B testing is applied probability: you split users into two random groups (A = control, B = variant), measure an outcome (conversion rate, click rate), and ask whether the observed difference is a real effect or just random noise.</p>
    <p><strong>Hypothesis testing</strong> formalizes this. You start with a "null hypothesis" (H0: there's no real difference between A and B) and calculate a <strong>p-value</strong> — the probability of seeing a difference at least this large purely by chance, if the null hypothesis were actually true. A small p-value (conventionally under 0.05) suggests the difference is unlikely to be random noise.</p>
    <div class="formula">p-value = P(seeing this result or more extreme | no real effect exists)</div>
    <p>Two common traps: stopping a test too early (small samples produce noisy, often exaggerated differences — recall Day 14), and running many simultaneous tests while only reporting the ones that happened to look significant ("p-hacking"). Both make random noise look like a real effect.</p>`,
    zh: `<p>A/B测试本质上是应用概率论：你把用户随机分成两组（A组为对照组，B组为实验组），测量某个结果（转化率、点击率），然后判断观察到的差异究竟是真实的效果，还是仅仅是随机噪音。</p>
    <p><strong>假设检验</strong>把这个过程正式化。你从一个"原假设"出发（H0：A和B之间没有真实差异），然后计算<strong>p值</strong>——如果原假设真的成立，仅凭随机波动就观察到这么大（或更大）差异的概率。p值越小（通常以0.05为界），就越说明这个差异不太可能只是随机噪音。</p>
    <div class="formula">p值 = P(观察到这个结果或更极端的结果 | 实际上不存在真实效果)</div>
    <p>有两个常见陷阱：一是测试提前结束（小样本会产生噪音很大、经常被夸大的差异——回想第14天的内容），二是同时跑很多个测试，却只报告那些恰好看起来显著的结果（"p值篡改"）。这两种做法都会让随机噪音看起来像是真实的效果。</p>`
  },
  example: {
    en: `<p>A team tests a new checkout button color for 2 days, sees a 15% lift, and ships it immediately. With only 2 days of data, that 15% is likely mostly noise — recall Day 20's lesson on confidence intervals. A properly powered test run for 2-3 weeks, across enough visitors, would reveal whether the lift is real or a mirage.</p>`,
    zh: `<p>某团队测试了一个新的结账按钮颜色，只跑了2天，看到提升了15%，便立刻上线。仅凭2天的数据，这15%的提升很可能大部分只是噪音——回想第20天关于置信区间的内容。一个样本量足够、持续跑2到3周的规范测试，才能真正判断这个提升是真实的，还是一场幻觉。</p>`
  },
  takeaway: {
    en: `Never trust an A/B test result without checking sample size and test duration. A p-value only means something if the test ran long enough to escape small-sample noise.`,
    zh: `在没有确认样本量和测试时长之前，永远不要轻信A/B测试的结果。只有当测试运行足够久、摆脱了小样本噪音的影响，p值才真正有意义。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `A small p-value (e.g., 0.02) suggests:`, zh: `一个很小的p值（例如0.02）说明了什么？` },
      options: [
        { en: `There is definitely no real effect`, zh: `一定不存在真实效果` },
        { en: `The observed difference is unlikely to be pure random chance, assuming no real effect exists`, zh: `假设不存在真实效果，观察到的差异不太可能仅仅是随机波动` },
        { en: `The test should be stopped immediately`, zh: `测试应该立刻停止` },
        { en: `The sample size was too small`, zh: `样本量太小了` }
      ],
      answer: 1,
      explanation: { en: `That's the precise definition — a small p-value makes "pure chance" an unlikely explanation, though it's not absolute proof.`, zh: `这正是p值的精确定义——小的p值使"纯属偶然"成为一个不太可能的解释，但这并不是绝对的证明。` }
    },
    {
      type: "mcq",
      question: { en: `What is the main danger of stopping an A/B test after only a few hours?`, zh: `仅运行几个小时就停止A/B测试，主要的风险是什么？` },
      options: [
        { en: `Nothing — results are always reliable`, zh: `没有风险——结果总是可靠的` },
        { en: `Small samples produce noisy results that can look like a big effect when there isn't one`, zh: `小样本会产生噪音很大的结果，即使实际上不存在效果，也可能看起来像有很大的效果` },
        { en: `It saves too much money`, zh: `会节省过多的成本` },
        { en: `Users get confused`, zh: `用户会感到困惑` }
      ],
      answer: 1,
      explanation: { en: `Early results are dominated by small-sample noise (Day 14) — they regularly show dramatic "effects" that vanish with more data.`, zh: `早期结果主要受小样本噪音（第14天内容）主导——常常会出现戏剧性的"效果"，但随着数据增多就会消失。` }
    },
    {
      type: "short",
      question: { en: `True or False: Running many simultaneous tests and only reporting the significant ones increases the risk of false positives.`, zh: `判断对错：同时运行多个测试、只报告显著的结果，会增加出现假阳性的风险。` },
      answer: "true",
      explanation: { en: `True — this is "p-hacking." With enough simultaneous tests, some will look significant by chance alone.`, zh: `正确——这就是所谓的"p值篡改"。只要同时测试的数量足够多，总会有一些仅凭偶然就显得"显著"。` }
    }
  ]
}
];
