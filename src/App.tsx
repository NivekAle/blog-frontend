import Footer from './components/footer/footer';
import HeaderComponent from './components/header/header';
import HeroComponent from './components/hero/hero';
import HighlightArticles from './components/highlightArticles/highlightArticles';
import HotArticles from './components/hotArticles/hotArticles';
import SearchBlog from './components/searchBlog/searchBlog';
import './index.css';

function App() {


	return (
		<>
			<HeaderComponent />
			<HeroComponent />
			<HotArticles />
			<SearchBlog />
			<HighlightArticles />
			<hr />
			<Footer />
		</>
	)
}

export default App;
