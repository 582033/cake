<div class="h2_cat" onmouseover="this.className='h2_cat active_cat'" onmouseout="this.className='h2_cat'">
                    <h3>
						<a target="_blank" href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a>
                    </h3>
                    <div class="h3_cat">
                        <div class="shadow">
                            <div class="shadow_border">
                                <div style="background-color:#f4f4f4; overflow:hidden; zoom:1;">
                                    <div class="huibeijing_right">
										{dede:channel type='son' noself='yes'}
                                        <ul class="remen_pinpai">
                                            <li>
                                                <a target="_blank" href="[field:typelink/]" class="menu_link_ga">[field:typename/]</a>
                                            </li>
                                            <!-- <li>|</li>-->
                                        </ul>
										{/dede:channel}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>