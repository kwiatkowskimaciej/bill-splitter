import random
import matplotlib.pyplot as plt
from bill_splitter import transactions_maker

def generate_random_list():
    length = random.randint(1, 15)  # Random length between 5 and 15
    return [random.randint(1, 200) for _ in range(length)]  # Random positive values between 1 and 200

results = []
for _ in range(10):
    lst = generate_random_list()
    print(lst, len(lst))
    result = transactions_maker(lst)
    results.append(result)

for result in results:
    print(result, '\n')

# Unpack the results and extract relevant data for plotting
transactions_data = [transactions for transactions, _, _, _ in results]
len_list = [lst for _, _, _, lst in results]
num_positives = [pos for _, _, (pos, _), _ in results]
num_negatives = [neg for _, _, (_, neg), _ in results]

# Create plots
plt.figure(figsize=(15, 5))

# Plot: Number of transactions vs. Initial list length
plt.subplot(1, 3, 1)
plt.plot(len_list, [len(transactions) for transactions in transactions_data], 'o')
plt.xlabel('Initial List Length')
plt.ylabel('Number of Transactions')
plt.title('Number of Transactions vs. Initial List Length')

# Plot: Number of transactions vs. Number of Negatives
plt.subplot(1, 3, 2)
plt.plot(num_negatives, [len(transactions) for transactions in transactions_data], 'o')
plt.xlabel('Number of Negatives')
plt.ylabel('Number of Transactions')
plt.title('Number of Transactions vs. Number of Negatives')

# Plot: Number of transactions vs. Number of Positives
plt.subplot(1, 3, 3)
plt.plot(num_positives, [len(transactions) for transactions in transactions_data], 'o')
plt.xlabel('Number of Positives')
plt.ylabel('Number of Transactions')
plt.title('Number of Transactions vs. Number of Positives')

plt.tight_layout()
plt.show()