const translate_refresh = () => {
  $(".lang").each(function (index, item) {
    $(this).text(arrLang[lang][$(this).attr("accessKey")]);
  });
};
const translate_button = () => {
  $(function () {
    console.log("xxx");
    $(".translate").click(function () {
      const lang = $(this).attr("id");
      localStorage.setItem("lng", String(lang));
      $(".lang").each(function (index, item) {
        $(this).text(arrLang[lang][$(this).attr("accessKey")]);
      });
    });
  });
};
