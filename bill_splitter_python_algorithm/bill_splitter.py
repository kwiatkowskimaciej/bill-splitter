def bill_splitter(list):
    total = sum(list)
    items = len(list)
    avg = total / items
    diff_list = [x - avg for x in sorted(list)]
    pos_count = sum(1 for x in diff_list if x >= 0)
    neg_count = len(diff_list) - pos_count

    transactions = []
    i, j = 0, len(diff_list) - 1

    while i < j:
        while diff_list[i] < 0:
            if -diff_list[i] > diff_list[j]:
                amount = round(diff_list[j], 2)
                diff_list[i] += diff_list[j]
                diff_list[j] = 0
                if amount > 0:
                    transactions.append((i, j, amount))
                j -= 1
            else:
                amount = round(-diff_list[i], 2)
                diff_list[j] += diff_list[i]
                diff_list[i] = 0
                if amount > 0:
                    transactions.append((i, j, amount))
        i += 1

    return transactions

lst = [71, 159, 142, 100, 69, 100, 12, 2]

print(bill_splitter(lst))