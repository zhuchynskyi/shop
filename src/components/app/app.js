import React from "react";
import Header from "../header";
import Footer from "../footer";
import Items from "../items";
import Categories from "../Categories";
import ShowFullItem from "../ShowFullItem";



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Nvidia GeForce RTX 4080',
                    img: 'nvidia1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'video-card',
                    price: '1250'
                },
                {
                    id: 2,
                    title: 'Nvidia GeForce RTX 4090',
                    img: 'nvidia2.webp',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'video-card',
                    price: '2100'
                },

                {
                    id: 3,
                    title: 'Nvidia GeForce RTX 4070',
                    img: 'nvidia3.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'video-card',
                    price: '850'
                },

                {
                    id: 4,
                    title: 'Logitech G Pro X Superlight',
                    img: 'logitech1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'mouse',
                    price: '99'
                },
                {
                    id: 5,
                    title: 'Logitech G Pro Gaming Wireless',
                    img: 'logitech2.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'mouse',
                    price: '89'
                },
                {
                    id: 6,
                    title: 'MSI Vigor GK30',
                    img: 'keyboard1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'keyboard',
                    price: '55'
                },
                {
                    id: 7,
                    title: 'LOGITECH G915 TKL Lightspeed Linear',
                    img: 'keyboard2.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'keyboard',
                    price: '129'
                },
                {
                    id: 8,
                    title: 'SAMSUNG Odyssey G5',
                    img: 'monitor1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'monitor',
                    price: '555'
                },
                {
                    id: 9,
                    title: 'ASUS TUF Gaming',
                    img: 'monitor2.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    category: 'monitor',
                    price: '499'
                },

            ],

            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)

    }

    render() {
        
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}></Header>
                <Categories chooseCategory={this.chooseCategory}></Categories>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}></Items>
                
                {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}></ShowFullItem>}
                <Footer></Footer>
            </div>
        )
    }


    onShowItem(item) {
        this.setState({ fullItem: item })
        this.setState({ showFullItem: !this.state.showFullItem })
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({ currentItems: this.state.items })
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }


    deleteOrder(id) {
        this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
    }


    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({ orders: [...this.state.orders, item] })
    }
}

export default App;