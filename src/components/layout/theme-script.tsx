// İlk boyamadan önce temayı seçer (titreme olmasın diye <head> içinde çalışır).
// Kayıtlı seçim yoksa işletim sisteminin ayarına bakar.
const code = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
