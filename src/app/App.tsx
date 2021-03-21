import Characters from './components/Characters'
import Layout from './components/Layout'
import './styles/index.css'

export default function App() {
	return (
		<div id='root'>
			<Layout>
				<Characters />
			</Layout>
		</div>
	)
}
