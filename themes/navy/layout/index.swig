<header id="banner" class="wrapper">
  <div class="inner">
    <h2 id="banner-title">{{ page.subtitle }}</h2>
    <div id="banner-start">
      <span id="banner-start-command">{{ page.install }}</span><a id="banner-start-link" href="docs/"><i class="fa fa-arrow-right"></i></a>
    </div>
    <div id="banner-share">{{ partial('partial/badges') }}</div>
  </div>
</header>
<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {{ page.content }}
      <div id="intro-get-started-wrap">
        <a href="docs/" id="intro-get-started-link">{{ __('index.get_started') }}</a>
      </div>
      <div class="article-content" itemprop="articleBody" style="max-width: 710px;margin: 0 auto;">
          <figure class="highlight javascript"><table><tbody><tr><td class="code"><pre><span class="line"><span class="keyword">import</span> test <span class="keyword">from</span> <span class="string">"ava"</span>;</span><br><span class="line"></span><br><span class="line"><span class="keyword">import</span> { timeExecution } <span class="keyword">from</span> <span class="string">"wedgetail"</span>;</span><br><span class="line"></span><br><span class="line">test(<span class="string">"Can time a function"</span>, <span class="keyword">async</span> t =&gt; {</span><br><span class="line"></span><br><span class="line">    <span class="comment">// This object contains a definition of the threshold</span></span><br><span class="line">    <span class="comment">// at which your function is too slow.</span></span><br><span class="line">    <span class="comment">// All timings are in milliseconds(ms)</span></span><br><span class="line">    <span class="keyword">const</span> allowedPerformance = {</span><br><span class="line">        average: <span class="number">0.001</span>,</span><br><span class="line">        high: <span class="number">1</span>,</span><br><span class="line">        low: <span class="number">0.001</span>,</span><br><span class="line">        percentiles: {</span><br><span class="line">            ninetieth: <span class="number">0.0004</span>,</span><br><span class="line">            ninetyFifth: <span class="number">0.001</span>,</span><br><span class="line">            ninetyNinth: <span class="number">0.001</span>,</span><br><span class="line">            tenth: <span class="number">0.0005</span>,</span><br><span class="line">        },</span><br><span class="line">    };</span><br><span class="line"></span><br><span class="line">    <span class="keyword">const</span> timings = <span class="keyword">await</span> timeExecution({</span><br><span class="line">        expectedTimings: allowedPerformance,</span><br><span class="line">        numberOfExecutions: <span class="number">5000</span>,</span><br><span class="line">        <span class="comment">// By using an anonymous arrow function you should</span></span><br><span class="line">        <span class="comment">// be able to maintain the correct scope</span></span><br><span class="line">        <span class="comment">// of `this`.</span></span><br><span class="line">        callback: <span class="function"><span class="params">()</span> =&gt;</span> {</span><br><span class="line">            <span class="comment">// Your function goes here</span></span><br><span class="line">            <span class="built_in">Math</span>.sqrt(<span class="built_in">Math</span>.random());</span><br><span class="line">        },</span><br><span class="line">    });</span><br><span class="line"></span><br><span class="line">    <span class="comment">// You can use any testing or assertion library.</span></span><br><span class="line">    <span class="comment">// if the timings are below your expected values then</span></span><br><span class="line">    <span class="comment">// `timings.results.passed` will be `true`</span></span><br><span class="line">    t.true(timings.results.passed, <span class="string">"timings failed"</span>);</span><br><span class="line">});</span><br></pre></td></tr></tbody></table></figure>
      </div>
    </div>
  </div>
</div>
