import React from 'react';
import kitty from '../resources/kitty.jpg'
import puppy from '../resources/puppy.jpg'

export default class Adopt extends React.Component {
    render() {
        return  <div id="adopt" class="adopt">
        <h2> Meet the pets! </h2>
        <div class="petpics-adoption">
            <div id="container-cat" class="container-cat">
                <div class="pet-background">
                    <img src={kitty} />
                    <p>Milo</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu. Semper
                        eget duis at tellus. Proin gravida hendrerit lectus a. Donec adipiscing tristique risus
                        nec feugiat in fermentum posuere urna. Aenean vel elit scelerisque mauris pellentesque pulvinar
                        pellentesque habitant. Augue neque gravida in fermentum. Sed turpis tincidunt id aliquet
                        risus feugiat in ante metus. Sollicitudin ac orci phasellus egestas. Lacus sed viverra tellus
                        in hac habitasse platea dictumst. Consequat interdum varius sit amet mattis vulputate
                        enim nulla aliquet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa.
                        Nulla facilisi nullam vehicula ipsum. Facilisis magna etiam tempor orci eu lobortis elementum.
                        A pellentesque sit amet porttitor eget. Amet venenatis urna cursus eget nunc scelerisque.
                        Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Libero id faucibus nisl
                        tincidunt eget nullam non nisi est.</p>
                </div>
            </div>
            <div id="container-dog" class="container-dog">
                <div class="pet-background">
                    <img src={puppy} />
                    <p>Bubbles</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu. Semper
                        eget duis at tellus. Proin gravida hendrerit lectus a. Donec adipiscing tristique risus
                        nec feugiat in fermentum posuere urna. Aenean vel elit scelerisque mauris pellentesque pulvinar
                        pellentesque habitant. Augue neque gravida in fermentum. Sed turpis tincidunt id aliquet
                        risus feugiat in ante metus. Sollicitudin ac orci phasellus egestas. Lacus sed viverra tellus
                        in hac habitasse platea dictumst. Consequat interdum varius sit amet mattis vulputate
                        enim nulla aliquet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa.
                        Nulla facilisi nullam vehicula ipsum. Facilisis magna etiam tempor orci eu lobortis elementum.
                        A pellentesque sit amet porttitor eget. Amet venenatis urna cursus eget nunc scelerisque.
                        Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Libero id faucibus nisl
                        tincidunt eget nullam non nisi est.</p>
                </div>
            </div>
        </div>
    </div>
    }
}