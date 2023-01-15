import styles from '../../styles/[country].module.scss'
import ProductCard from '../../components/ProductCard'
import Filter from '../../components/Filter'
import { useState } from 'react'
import countriesObject from '../../data/countries.json'


export async function getStaticPaths() {
	const { countries } = countriesObject
	const paths = countries.map(country => {
		return {
			params: {
				country
			}
		}
	})
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	function dateInXMonths (X) {
		const dateToday = new Date()
		const dateInFuture = new Date(dateToday.setMonth(dateToday.getMonth() + X))
		return dateInFuture
	}
	function randomDateBetweenNowAndDateInXMonths(X) {
		const dateToday = new Date()
		const randomDate = new Date(dateToday.getTime() +
							(Math.random() * (dateInXMonths(X).getTime() - dateToday.getTime())))
							.toLocaleDateString()
		return randomDate
	}
	const products = Array(6).fill(0).map(v => {
		return {
			hotelImageNum : Math.floor(Math.random() * 10), // Num 0 -> 9
			price : Math.floor(Math.random() * (2000 - 950 + 1) + 950), // Num 950 -> 2000
			randomDate : randomDateBetweenNowAndDateInXMonths(6).replace(/-/g, '/').split('/').reverse().join('/') // Format to dd/mm/yyyy
		}
	})
	return {
		props: {
			context: params,
			products,
			dateInSixMonths: dateInXMonths(6).toLocaleDateString()
		}
	}
}


export default function country({ context, products, dateInSixMonths }) {
	const [filterProps, setFilterProps] = useState({})
	const isThisValid = (product) => {
		if(filterProps.minNum && product.price <= filterProps.minNum) return false
		if(filterProps.maxNum && product.price >= filterProps.maxNum) return false
		if(filterProps.dateField && product.randomDate != filterProps.dateField) return false
		return true
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.headerFilterContainer}>
				<h1>{context.country}</h1>
				<Filter maxDate={dateInSixMonths} filter={setFilterProps}/>
			</div>
			<div className={styles.container}> {
					products.map((product, i) => {
						if (!isThisValid(product)) return false
						return (<ProductCard key={i} {...product}/>)
					} 
				)}
			</div>
		</div>
	)
}