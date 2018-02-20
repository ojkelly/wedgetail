<footer id="footer" class="wrapper">
  <div class="inner">
    <div id="footer-copyright">
      &copy; {{ moment(Date.now()).year() }} <a href="https://github.com/ojkelly/wedgetail/graphs/contributors" target="_blank">{{ config.author }}</a><br>
      Documentation licensed under MIT.
      <br />
      <br />
      <div class="footer-badges">
        {{ partial('badges_footer')}}
      </div>
    </div>
    <div id="footer-links">
      <a href="https://twitter.com/{{ config.twitter }}" class="footer-link" target="_blank"><i class="fa fa-twitter"></i></a>
      <a href="https://github.com/{{ config.github }}" class="footer-link" target="_blank"><i class="fa fa-github-alt"></i></a>
    </div>
  </div>
</footer>
