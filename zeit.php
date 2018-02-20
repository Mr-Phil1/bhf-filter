<?php
if (isset($_GET['width']) AND isset($_GET['height'])) {
  // Ausgabe der beiden Größenangaben
  echo "Die Bildschirmbreite ist: ". $_GET['width'] ."<br />\n";
  echo "Die Bildschirmhöhe ist: ". $_GET['height'] ."<br />\n";
} else {
  // Übergabe der Größenangaben
  // (der ursprüngliche 'QUERY_STRING' wird beibehalten;
  //  POST-Variablen müssen anders behandelt werden)

  echo "<script language='javascript'>\n";
  echo "  location.href=\"${_SERVER['SCRIPT_NAME']}?${_SERVER['QUERY_STRING']}"
            . "&width=\" + screen.width + \"&height=\" + screen.height;\n";
  echo "</script>\n";
  exit();
}
?>
