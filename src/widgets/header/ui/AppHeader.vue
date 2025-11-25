<template>
	<header class="header">
		<div class="wrapper">
			<div class="header__left">
				<NuxtImg src="/img/logo.png" />
				<div class="header__links">
					<NuxtLink activeClass="--active" to="/pet">{{ $t('links.market') }}</NuxtLink>
					<NuxtLink activeClass="--active">{{ $t('links.items') }}</NuxtLink>
					<NuxtLink activeClass="--active">{{ $t('links.sell') }}</NuxtLink>
					<NuxtLink activeClass="--active">{{ $t('links.robucs') }}</NuxtLink>
					<NuxtLink activeClass="--active">{{ $t('links.help') }}</NuxtLink>
				</div>
			</div>
			<div class="header__right">
				<BalanceButton />
				<LanguageChange />
				<VDropdown :distance="6" strategy="fixed">
					<ProfileButton />
					<template #popper>
						<ProfileMenu />
					</template>
				</VDropdown>
			</div>
		</div>
		<div class="cart">
			<CartWidget />
		</div>
	</header>
</template>

<script setup lang="ts">
import { CartWidget } from '@widgets/cart';
import { ProfileButton, ProfileMenu } from '@features/profile-menu';
import { LanguageChange } from '@features/language-change'
import { BalanceButton } from '@features/add-balance';
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background: white;
	box-shadow: $shadow;
}

.header {
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	&__left {
		display: flex;
		align-items: center;
		gap: 50px;

		padding-left: 25px;
	}

	&__links {
		display: flex;
		align-items: center;
		gap: 46px;

		& a {
			font-family: Inter;
			font-weight: 500;
			font-style: Medium;
			font-size: 18px;
			leading-trim: NONE;
			line-height: 150%;
			letter-spacing: 0%;
			vertical-align: middle;

			color: $text-grey;

			&.--active {
				font-weight: bold;
				color: $text-dark
			}

		}
	}

	&__right {
		padding-right: 46px;
		display: flex;
		align-items: center;
		gap: 14px;
	}

	& .cart {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		height: -webkit-fill-available;

		background: #FAFAFA;
	}
}
</style>